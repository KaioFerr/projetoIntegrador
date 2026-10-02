//sprites e cenário
import platform from '../img/platform.png'
import miniPlatform from '../img/miniPlatform.png'
import background from '../img/background.png'
import bannerBase from '../img/banner-base.png'
import lockClosed from '../img/lock-closed.png'
import lockOpen from '../img/lock-open.png'

import { LEVELS, GROUND_Y, GROUND_STEP, GROUND_TILE_W, MINI_STEP, MINI_W, MINI_H, BANNER_W, BANNER_H } from './levels'
import { createQuestion } from './math'
import { getProfile, saveProfile, getProgress, saveResult } from './storage'
import * as ui from './ui'
import { sfx, isMuted, setMuted } from './sfx'
import { startMusic, setMusicMode, isMusicOn, setMusicOn } from './music'

//Tela
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const W = 1024
const H = 576
canvas.width = W
canvas.height = H

const gravity = 1.4
const STEP = 1000 / 60
const MAX_LIVES = 5
const MIN_CAM_Y = -280 // quanto a câmera pode subir
const FONT = '"Jockey One", "Arial Narrow", sans-serif'
// animação do cadeado ao hackear um painel (em passos de 1/60 s)
const UNLOCK_TICKS = 80
const LOCK_OPEN_AT = 28
// o sprite tem 80px, mas os pés ocupam só o centro; a colisão usa essa faixa
const FEET_L = 28
const FEET_R = 52
const MINI_EDGE = 9 // borda transparente de cada lado da miniPlatform.png

//função que cria imagens
function creatImage(src) {
    const image = new Image()
    image.src = src
    return image
}

// carrega todas as imagens de uma pasta, em ordem alfabética
function loadFrames(ctx) {
    return ctx.keys().sort().map(key => {
        const mod = ctx(key)
        return creatImage(mod.default || mod)
    })
}

const SPRITES = {
    boy: {
        idle: loadFrames(require.context('../img/Idle-boy', false, /\.png$/)),
        run: loadFrames(require.context('../img/Run-boy', false, /\.png$/)),
        jump: loadFrames(require.context('../img/Jump-boy', false, /\.png$/))
    },
    girl: {
        idle: loadFrames(require.context('../img/idle-girl', false, /\.png$/)),
        run: loadFrames(require.context('../img/run-girl', false, /\.png$/)),
        jump: loadFrames(require.context('../img/jump-girl', false, /\.png$/))
    }
}

const platformImage = creatImage(platform)
const miniPlatformImage = creatImage(miniPlatform)
const backgroundImage = creatImage(background)
const bannerBaseImage = creatImage(bannerBase)
const lockClosedImage = creatImage(lockClosed)
const lockOpenImage = creatImage(lockOpen)
const LOCK_X = 35 // posição do cadeado dentro da tela do painel
const LOCK_Y = 6

//estado do jogo
const keys = { left: false, right: false, jump: false }
let jumpBuffer = 0
let jumpReleased = false

const game = {
    state: 'title', // title | select | playing | math | paused | celebrate | results | gameover
    levelIndex: 0,
    level: LEVELS[0],
    character: 'boy',
    camera: 0,
    camY: 0,
    time: 0,
    lives: MAX_LIVES,
    contas: 0,
    errors: 0,
    falls: 0,
    byOp: {},
    platforms: [],
    lasers: [],
    flags: [],
    banners: [],
    near: null,
    nearFlag: null,
    checkpoint: { x: 100 },
    particles: [],
    shake: 0,
    celebrateTimer: 0,
    tick: 0,
    player: null
}

function newPlayer() {
    return { x: 100, y: GROUND_Y - 80, vx: 0, vy: 0, w: 80, h: 80, grounded: true, facing: 'right', airTicks: 0, invuln: 0 }
}

//monta a fase: plataformas, bandeiras de checkpoint e banners
function loadLevel(index) {
    const level = LEVELS[index]
    game.levelIndex = index
    game.level = level
    game.camera = 0
    game.camY = 0
    game.time = 0
    game.lives = MAX_LIVES
    game.contas = 0
    game.errors = 0
    game.falls = 0
    game.byOp = {}
    game.near = null
    game.nearFlag = null
    game.particles = []
    game.shake = 0
    game.checkpoint = { x: 100 }
    game.player = newPlayer()

    game.platforms = []
    game.flags = []
    level.chunks.forEach(([x, n], i) => {
        const w = (n - 1) * GROUND_STEP + GROUND_TILE_W
        game.platforms.push({ kind: 'ground', x, y: GROUND_Y, w, n })
        if (i > 0) game.flags.push({ x: x + 60, active: false })
    })
    level.minis.forEach(([x, y, n]) => {
        game.platforms.push({ kind: 'mini', x, y, w: MINI_W + (n - 1) * MINI_STEP, n })
    })
    // plataformas móveis: vão e voltam entre a posição inicial e (x + dx, y + dy)
    level.movers.forEach(m => {
        game.platforms.push({ kind: 'mini', x: m.x, y: m.y, w: MINI_W + (m.n - 1) * MINI_STEP, n: m.n, mover: { ...m, dx: m.dx || 0, dy: m.dy || 0 }, mdx: 0, mdy: 0 })
    })
    game.banners = level.banners.map(([x, y]) => ({ x, y, solved: false, unlockT: -1 }))
    game.lasers = level.lasers.map(l => ({ x: l.x, panel: l.panel, open: false, off: 0 }))
    game.laserToast = 0
}

const clamp = (v, min, max) => Math.max(min, Math.min(max, v))

function updateCamera(snap) {
    const p = game.player
    let cam = snap ? p.x - 300 : clamp(game.camera, p.x - 600, p.x - 100)
    game.camera = clamp(cam, 0, game.level.end - W)

    // vertical: quando o jogador sobe, a câmera acompanha para mostrar as plataformas e banners de cima
    const target = clamp(p.y + p.h / 2 - 330, MIN_CAM_Y, 0)
    game.camY = snap ? target : game.camY + (target - game.camY) * 0.1
    if (Math.abs(target - game.camY) < 0.2) game.camY = target
}

/* ---------- partículas e efeitos ---------- */
function burst(x, y, n, colors, { spread = 4, up = 4, life = 40, size = 5 } = {}) {
    for (let i = 0; i < n; i++) {
        game.particles.push({
            x, y,
            vx: (Math.random() - 0.5) * spread * 2,
            vy: -Math.random() * up,
            life, max: life,
            size: size * (0.6 + Math.random() * 0.8),
            color: colors[i % colors.length],
            grav: 0.25
        })
    }
}

function dust(x, y, n = 3) {
    for (let i = 0; i < n; i++) {
        game.particles.push({
            x: x + (Math.random() - 0.5) * 20, y,
            vx: (Math.random() - 0.5) * 2, vy: -Math.random() * 1.4,
            life: 24, max: 24, size: 3 + Math.random() * 3,
            color: '255,255,255', grav: 0, round: true, fade: 0.7
        })
    }
}

function spawnSparks() {
    const { chunks } = game.level
    for (let i = 0; i < chunks.length - 1; i++) {
        const [x, n] = chunks[i]
        const gx0 = x + (n - 1) * GROUND_STEP + GROUND_TILE_W
        const gx1 = chunks[i + 1][0]
        if (gx1 < game.camera || gx0 > game.camera + W) continue
        if (Math.random() < 0.25) {
            game.particles.push({
                x: gx0 + Math.random() * (gx1 - gx0), y: H - 4,
                vx: 0, vy: -(1.5 + Math.random() * 2.5),
                life: 50, max: 50, size: 4, color: 'ffff8a', grav: 0, spark: true
            })
        }
    }
}

/* ---------- lógica ---------- */
function resetInput() {
    keys.left = keys.right = keys.jump = false
    jumpBuffer = 0
}

function step() {
    game.tick++
    spawnSparks()
    if (game.state === 'playing' || game.state === 'celebrate') game.banners.forEach(b => {
        if (b.unlockT < 0 || b.unlockT >= UNLOCK_TICKS) return
        b.unlockT++
        // momento em que o cadeado abre
        if (b.unlockT === LOCK_OPEN_AT) {
            openLasers(b)
            sfx.unlock()
            burst(b.x + BANNER_W / 2, b.y + 26, 28, ['255,255,138', '56,214,196', '120,255,170'], { spread: 6, up: 8, life: 60, size: 6 })
            game.shake = 6
        }
    })
    const p = game.player
    const alive = game.state === 'playing' || game.state === 'celebrate'

    if (alive) {
        if (game.state === 'playing') game.time += 1 / 60
        moveMovers()
        // em cima de uma plataforma móvel, o jogador vai junto
        if (p.grounded && p.on && p.on.mover) {
            p.x = blockLasers(p.x, p.x + p.on.mdx)
            p.y += p.on.mdy
        }
        const dir = game.state === 'playing' ? (keys.right ? 1 : 0) - (keys.left ? 1 : 0) : 0
        p.vx = dir * 8
        if (dir) p.facing = dir > 0 ? 'right' : 'left'
        p.x = blockLasers(p.x, clamp(p.x + p.vx, 0, game.level.end - p.w))

        if (jumpBuffer > 0) {
            jumpBuffer--
            if (p.grounded && game.state === 'playing') {
                p.vy = -24
                sfx.jump()
                p.grounded = false
                jumpBuffer = 0
                dust(p.x + p.w / 2, p.y + p.h, 5)
            }
        }
        if (jumpReleased) {
            if (p.vy < 0) p.vy = 0
            jumpReleased = false
        }

        const prevBottom = p.y + p.h
        const wasGrounded = p.grounded
        const impact = p.vy
        p.y += p.vy
        p.vy += gravity
        p.grounded = false
        p.on = null

        //colisão: só pelo topo das plataformas, e só se os pés estiverem sobre a parte visível
        for (const pl of game.platforms) {
            const edge = pl.kind === 'mini' ? MINI_EDGE : 0
            const onTop = p.x + FEET_R > pl.x + edge && p.x + FEET_L < pl.x + pl.w - edge
            // plataforma que sobe: compara com a altura dela no quadro anterior
            if (prevBottom <= pl.y - Math.min(0, pl.mdy || 0) + 0.01 && p.y + p.h >= pl.y && onTop) {
                p.y = pl.y - p.h
                p.vy = 0
                p.grounded = true
                p.on = pl
            }
        }
        if (p.grounded && !wasGrounded && impact > 8) {
            dust(p.x + p.w / 2, p.y + p.h, 6)
            sfx.land()
        }
        if (p.grounded && p.vx !== 0 && game.tick % 6 === 0) dust(p.x + p.w / 2 - Math.sign(p.vx) * 14, p.y + p.h, 1)
        p.airTicks = p.grounded ? 0 : p.airTicks + 1
        if (p.invuln > 0) p.invuln--

        if (p.y > 470) fall()
        updateCamera(false)
        findNear()
    }

    game.lasers.forEach(l => { if (l.open && l.off < 1) l.off = Math.min(1, l.off + 0.05) })
    if (game.laserToast > 0) game.laserToast--
    if (game.state === 'celebrate' && --game.celebrateTimer <= 0) complete()
    if (game.shake > 0) game.shake--

    game.particles.forEach(q => {
        q.x += q.vx
        q.y += q.vy
        q.vy += q.grav
        q.life--
    })
    game.particles = game.particles.filter(q => q.life > 0)
}

// plataformas móveis: posição suave de ida e volta; guarda o deslocamento do quadro
function moveMovers() {
    const t = game.tick
    game.platforms.forEach(pl => {
        const m = pl.mover
        if (!m) return
        const f = 0.5 - 0.5 * Math.cos((t / m.period) * Math.PI * 2)
        const nx = m.x + m.dx * f
        const ny = m.y + m.dy * f
        pl.mdx = nx - pl.x
        pl.mdy = ny - pl.y
        pl.x = nx
        pl.y = ny
    })
}

// laser ligado funciona como parede: o jogador não passa (nem pulando)
function blockLasers(oldX, newX) {
    for (const l of game.lasers) {
        if (l.open) continue
        const c0 = oldX + 40
        let hit = false
        if (c0 < l.x && newX + FEET_R > l.x - 2) { newX = l.x - 2 - FEET_R; hit = true }
        if (c0 > l.x && newX + FEET_L < l.x + 2) { newX = l.x + 2 - FEET_L; hit = true }
        if (hit && game.laserToast === 0 && game.state === 'playing') {
            game.laserToast = 150
            ui.toast('Laser ligado! Hackeie o painel antes dele.', 2200, 'lock')
            sfx.denied()
        }
    }
    return newX
}

// painel hackeado desliga o(s) laser(s) ligado(s) a ele
function openLasers(banner) {
    const bi = game.banners.indexOf(banner)
    game.lasers.forEach(l => {
        if (l.open || l.panel !== bi) return
        l.open = true
        sfx.laserOff()
        burst(l.x, GROUND_Y - 120, 24, ['255,93,115', '255,255,138', '56,214,196'], { spread: 4, up: 6, life: 50, size: 5 })
        ui.toast('Laser desligado! Caminho livre.', 1800, 'check')
    })
}

// contas da bandeira para trás que ainda faltam resolver
// (banners em cima da bandeira ou depois dela ficam para o próximo checkpoint)
function pendingBefore(flag) {
    return game.banners.filter(b => !b.solved && b.x + BANNER_W <= flag.x).length
}

function saveCheckpoint(flag) {
    const pending = pendingBefore(flag)
    if (pending > 0) {
        ui.toast(`Hackeie ${pending === 1 ? 'o painel que falta' : `os ${pending} painéis que faltam`} antes de salvar!`, 2200, 'lock')
        sfx.denied()
        return
    }
    flag.active = true
    game.checkpoint = flag
    burst(flag.x, GROUND_Y - 50, 10, ['255,255,138', '56,214,196'], { spread: 3, up: 5 })
    ui.toast('Checkpoint salvo!', 1200, 'flag')
    sfx.checkpoint()
}

function fall() {
    game.falls++
    game.lives--
    game.shake = 14
    ui.flash()
    ui.resetHudCache()
    if (game.lives <= 0) {
        game.state = 'gameover'
        sfx.gameOver()
        resetInput()
        ui.showPause({
            title: 'Fim de jogo',
            text: 'Suas vidas acabaram. Tente de novo!',
            mainLabel: 'Tentar de novo',
            mainIcon: 'retry',
            titleIcon: 'heart',
            onMain: () => startLevel(game.levelIndex),
            onMenu: goSelect,
            onExit: quitGame
        })
        return
    }
    const p = game.player
    p.x = game.checkpoint.x - (game.checkpoint.x === 100 ? 0 : 20)
    p.y = GROUND_Y - p.h
    p.vx = p.vy = 0
    p.grounded = true
    p.on = null
    p.invuln = 90
    updateCamera(true)
    ui.toast('Ops! -1 vida. Voltou ao checkpoint.', 2200, 'fall')
    sfx.fall()
}

// banner [E] mais próximo que ainda não foi resolvido
function findNear() {
    const p = game.player
    const cx = p.x + p.w / 2
    game.near = null
    for (const b of game.banners) {
        if (b.solved) continue
        const bottom = b.y + BANNER_H
        if (Math.abs(cx - (b.x + BANNER_W / 2)) < 75 && Math.abs(p.y + p.h - bottom) < 40) {
            game.near = b
            break
        }
    }
    // bandeira ainda não salva, com o jogador de pé no chão ao lado dela
    game.nearFlag = null
    if (game.near || !p.grounded || p.y + p.h !== GROUND_Y) return
    game.nearFlag = game.flags.find(f => !f.active && Math.abs(cx - f.x) < 60) || null
}

function tryInteract() {
    if (game.state !== 'playing' || !game.player.grounded) return
    if (!game.near) {
        if (game.nearFlag) saveCheckpoint(game.nearFlag)
        return
    }
    const banner = game.near
    const level = game.level
    // a conta fica mais difícil ao longo da fase
    const question = createQuestion(level.math, game.contas / Math.max(1, game.banners.length - 1))
    const stats = game.byOp[question.kind] || (game.byOp[question.kind] = { ok: 0, n: 0 })
    resetInput()
    game.state = 'math'
    sfx.hackStart()
    ui.openMath({
        title: `Hackeando painel ${game.contas + 1}/${game.banners.length}`,
        question,
        onSubmit: value => {
            stats.n++
            if (value === question.result) {
                stats.ok++
                return true
            }
            game.errors++
            return false
        },
        onClose: correct => {
            if (correct) {
                banner.solved = true
                banner.unlockT = 0
                sfx.hacking()
                game.contas++
                if (game.contas === game.banners.length) {
                    // deixa o cadeado abrir antes da tela de resultados
                    game.state = 'celebrate'
                    game.celebrateTimer = UNLOCK_TICKS + 20
                    return
                }
            }
            game.state = 'playing'
        }
    })
}

function complete() {
    const level = game.level
    const stars = game.errors === 0 && game.time <= level.goal ? 3 : game.errors <= 2 ? 2 : 1
    const bestInfo = saveResult(level.id, { stars, time: Math.round(game.time) })
    game.state = 'results'
    sfx.levelComplete()
    ui.setHudVisible(false)
    ui.renderResults({
        level,
        levels: LEVELS.length,
        stars,
        time: game.time,
        goal: level.goal,
        correct: game.contas,
        total: game.banners.length,
        errors: game.errors,
        falls: game.falls,
        bestInfo,
        byOp: game.byOp,
        onNext: () => startLevel(game.levelIndex + 1),
        onRetry: () => startLevel(game.levelIndex),
        onMenu: goSelect
    })
}

/* ---------- fluxo de telas ---------- */
function goTitle() {
    const profile = getProfile()
    game.character = profile.character
    ui.setGroupName(profile.group)
    loadLevel(0)
    game.state = 'title'
    ui.setHudVisible(false)
    ui.showScreen('title')
    ui.focusGroupName()
}

let selectedLevel = 1
function goSelect() {
    loadLevel(0)
    game.state = 'select'
    ui.setHudVisible(false)
    const progress = getProgress()
    const unlocked = LEVELS.filter(l => l.id === 1 || (progress[l.id - 1] && progress[l.id - 1].stars > 0))
    if (!unlocked.some(l => l.id === selectedLevel)) selectedLevel = unlocked[unlocked.length - 1].id
    drawSelect()
}

function drawSelect() {
    ui.renderSelect({
        levels: LEVELS,
        progress: getProgress(),
        selected: selectedLevel,
        character: game.character,
        group: getProfile().group,
        onSelect: id => { selectedLevel = id; drawSelect() },
        onCharacter: ch => {
            game.character = ch
            saveProfile({ ...getProfile(), character: ch })
            drawSelect()
        },
        onPlay: () => startLevel(selectedLevel - 1)
    })
    ui.showScreen('select')
}

function startLevel(index) {
    loadLevel(index)
    selectedLevel = index + 1
    resetInput()
    game.state = 'playing'
    ui.resetHudCache()
    ui.setHudVisible(true)
    ui.showScreen(null)
    if (document.activeElement) document.activeElement.blur()
}

function toggleMusic() {
    setMusicOn(!isMusicOn())
    return isMusicOn()
}

function toggleSound() {
    setMuted(!isMuted())
    ui.setSoundIcon(isMuted())
    if (!isMuted()) sfx.click()
    return isMuted()
}

// Sair: deixa a tela cheia e volta para a tela inicial (para outro grupo jogar).
// Instalado como app, também tenta fechar o app.
function quitGame() {
    resetInput()
    ui.leaveFullscreen()
    const installed = matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches || navigator.standalone
    if (installed) window.close()
    goTitle()
}

function togglePause() {
    if (game.state === 'playing') {
        game.state = 'paused'
        resetInput()
        ui.showPause({
            title: 'Pausado',
            text: 'O tempo está parado.',
            mainLabel: 'Continuar',
            controls: true,
            onMain: togglePause,
            onMenu: goSelect,
            onExit: quitGame
        })
    } else if (game.state === 'paused') {
        game.state = 'playing'
        ui.showScreen(null)
    }
}

/* ---------- desenho ---------- */
function roundRect(x, y, w, h, r) {
    c.beginPath()
    c.moveTo(x + r, y)
    c.arcTo(x + w, y, x + w, y + h, r)
    c.arcTo(x + w, y + h, x, y + h, r)
    c.arcTo(x, y + h, x, y, r)
    c.arcTo(x, y, x + w, y, r)
    c.closePath()
}

// trechos de vazio entre os chãos, em coordenadas da tela
function voidGaps() {
    const { chunks } = game.level
    const gaps = []
    for (let i = 0; i < chunks.length - 1; i++) {
        const [x, n] = chunks[i]
        const x0 = x + (n - 1) * GROUND_STEP + GROUND_TILE_W - game.camera
        const x1 = chunks[i + 1][0] - game.camera
        if (x1 > 0 && x0 < W) gaps.push([x0, x1])
    }
    return gaps
}

function drawNeon(gaps, alpha, topY) {
    gaps.forEach(([x0, x1]) => {
        c.save()
        c.beginPath()
        c.rect(x0, topY, x1 - x0, H - topY)
        c.clip()
        c.globalAlpha = alpha
        const g = c.createLinearGradient(0, GROUND_Y, 0, H)
        g.addColorStop(0, '#ff7a2a')
        g.addColorStop(0.55, '#d11a7a')
        g.addColorStop(1, '#5c0a45')
        c.fillStyle = g
        c.fillRect(x0, GROUND_Y, x1 - x0, H - GROUND_Y)
        c.fillStyle = '#ffd58a'
        const wave = (game.tick * 0.6) % 24
        for (let x = x0 - 24 + wave; x < x1 + 24; x += 24) {
            c.beginPath()
            c.arc(x, GROUND_Y + 2 + Math.sin(x * 0.2 + game.tick * 0.1) * 2, 9, Math.PI, 0)
            c.fill()
        }
        c.restore()
    })
}

function drawGlow(gaps) {
    gaps.forEach(([x0, x1]) => {
        const g = c.createLinearGradient(0, GROUND_Y - 90, 0, GROUND_Y)
        g.addColorStop(0, 'rgba(209,26,122,0)')
        g.addColorStop(1, 'rgba(209,26,122,0.45)')
        c.fillStyle = g
        c.fillRect(x0, GROUND_Y - 90, x1 - x0, 90)
    })
}

function drawFlag(f) {
    const x = f.x - game.camera
    if (x < -60 || x > W + 60) return
    const top = GROUND_Y - 62
    c.save()
    if (f.active) {
        c.shadowColor = '#38d6c4'
        c.shadowBlur = 14
    }
    c.fillStyle = f.active ? '#ffff8a' : '#bdbdd0'
    c.fillRect(x, top, 5, 62)
    c.shadowBlur = 0
    c.fillStyle = f.active ? '#970000' : '#6a6a80'
    c.strokeStyle = f.active ? '#ffff8a' : '#bdbdd0'
    c.lineWidth = 1.5
    const wag = Math.sin(game.tick * 0.1) * 3
    c.beginPath()
    c.moveTo(x + 5, top)
    c.lineTo(x + 35, top + 11 + wag)
    c.lineTo(x + 5, top + 22)
    c.closePath()
    c.fill()
    c.stroke()
    c.restore()
    if (game.nearFlag === f && game.state === 'playing') {
        const pending = pendingBefore(f)
        if (pending > 0) drawPrompt(x + 3, top - 40, `Faltam ${pending} ${pending === 1 ? 'painel' : 'painéis'}`, true)
        else drawPrompt(x + 3, top - 40, 'Salvar checkpoint')
    }
}

// trilho pontilhado mostrando por onde a plataforma móvel anda
function drawTrack(pl) {
    const m = pl.mover
    const cx = m.x + pl.w / 2 - game.camera
    const y0 = m.y + 8
    c.save()
    c.strokeStyle = 'rgba(56,214,196,0.45)'
    c.lineWidth = 3
    c.setLineDash([6, 8])
    c.beginPath()
    c.moveTo(cx, y0)
    c.lineTo(cx + m.dx, y0 + m.dy)
    c.stroke()
    c.setLineDash([])
    c.fillStyle = 'rgba(56,214,196,0.7)'
    ;[[cx, y0], [cx + m.dx, y0 + m.dy]].forEach(([x, y]) => {
        c.beginPath()
        c.arc(x, y, 5, 0, Math.PI * 2)
        c.fill()
    })
    c.restore()
}

// barreira de laser: emissores no chão e lá em cima, feixe piscando enquanto ligado
function drawLaser(l) {
    const x = l.x - game.camera
    if (x < -40 || x > W + 40) return
    const top = MIN_CAM_Y - 20
    c.save()
    const a = 1 - l.off
    if (a > 0) {
        const flick = 0.75 + Math.sin(game.tick * 0.9) * 0.15 + Math.random() * 0.1
        c.globalAlpha = a * flick
        c.shadowColor = '#ff2e63'
        c.shadowBlur = 18
        c.fillStyle = 'rgba(255,46,99,0.35)'
        c.fillRect(x - 7, top, 14, GROUND_Y - 14 - top)
        c.fillStyle = '#ff5d73'
        c.fillRect(x - 3, top, 6, GROUND_Y - 14 - top)
        c.fillStyle = '#fff0f3'
        c.fillRect(x - 1, top, 2, GROUND_Y - 14 - top)
        c.shadowBlur = 0
        c.globalAlpha = 1
    }
    // emissor do chão
    c.fillStyle = '#1a0521'
    c.strokeStyle = '#000'
    c.lineWidth = 2
    roundRect(x - 14, GROUND_Y - 18, 28, 18, 4)
    c.fill()
    c.stroke()
    c.fillStyle = l.open ? '#38d6c4' : '#ff2e63'
    c.fillRect(x - 6, GROUND_Y - 14, 12, 5)
    c.restore()
}

function drawBanner(b) {
    const x = b.x - game.camera
    if (x < -BANNER_W || x > W) return
    const y = b.y
    const near = game.near === b
    // t: passo da animação de desbloqueio (-1 = ainda trancado)
    const t = b.solved ? (b.unlockT < 0 ? UNLOCK_TICKS : b.unlockT) : -1
    const opened = t >= LOCK_OPEN_AT
    const hacking = t >= 0 && !opened
    // o painel fica parado; só o cadeado da tela se mexe
    c.save()
    if (opened) c.filter = 'hue-rotate(115deg) saturate(1.1)'
    c.drawImage(bannerBaseImage, x, y)
    c.beginPath()
    c.rect(x + 12, y + 4, 66, 40)
    c.clip()
    let lx = 0
    let ly = 0
    if (near && !b.solved) {
        ly = Math.round(Math.sin(game.tick * 0.12) * 2)
        c.shadowColor = '#ffff8a'
        c.shadowBlur = 10
    }
    if (hacking) lx = Math.round(Math.sin(t * 2.2) * 2)
    c.drawImage(opened ? lockOpenImage : lockClosedImage, x + LOCK_X + lx, y + LOCK_Y + ly)
    c.restore()
    // clarão na tela quando o cadeado abre
    const flash = opened ? 1 - (t - LOCK_OPEN_AT) / 10 : 0
    if (flash > 0) {
        c.fillStyle = `rgba(255,255,255,${flash * 0.8})`
        c.fillRect(x + 12, y + 3, 66, 42)
    }
    if (near && game.state === 'playing') drawPrompt(x + BANNER_W / 2, y - 40, 'Hackear o painel')
}

// depois que o cadeado da tela abre: anel de luz e "ACESSO LIBERADO"
function drawUnlock(b, x, t) {
    const cx = x + BANNER_W / 2
    const out = clamp((t - 55) / (UNLOCK_TICKS - 55), 0, 1)
    if (t >= LOCK_OPEN_AT) {
        // anel de luz quando abre
        const r = (t - LOCK_OPEN_AT) * 3
        c.save()
        c.globalAlpha = Math.max(0, 1 - r / 70)
        c.strokeStyle = '#38d6c4'
        c.lineWidth = 4
        c.beginPath()
        c.arc(cx, b.y + 28, r, 0, Math.PI * 2)
        c.stroke()
        // texto de acesso liberado
        c.globalAlpha = 1 - out
        c.font = `22px ${FONT}`
        c.textAlign = 'center'
        c.lineWidth = 4
        c.strokeStyle = '#000'
        c.fillStyle = '#38d6c4'
        const ty = b.y - 14 - Math.min(10, (t - LOCK_OPEN_AT) * 0.6)
        c.strokeText('ACESSO LIBERADO', cx, ty)
        c.fillText('ACESSO LIBERADO', cx, ty)
        c.restore()
    }
}

// balão "[E] texto" acima de um objeto; sem tecla quando a ação está bloqueada
function drawPrompt(cx, top, label, locked = false) {
    c.font = `20px ${FONT}`
    const tw = c.measureText(label).width + (locked ? 20 : 44)
    const px = cx - tw / 2
    const py = top + Math.sin(game.tick * 0.12) * 3
    c.fillStyle = locked ? '#bdbdd0' : '#ffff8a'
    c.strokeStyle = '#000'
    c.lineWidth = 2
    roundRect(px, py, tw, 28, 14)
    c.fill()
    c.stroke()
    if (!locked) {
        c.fillStyle = '#970000'
        roundRect(px + 6, py + 4, 22, 20, 5)
        c.fill()
        c.fillStyle = '#ffff8a'
        c.textAlign = 'center'
        c.fillText('E', px + 17, py + 20)
    }
    c.fillStyle = '#000'
    c.textAlign = 'left'
    c.fillText(label, px + (locked ? 10 : 34), py + 20)
}

function drawPlayer() {
    const p = game.player
    const set = SPRITES[game.character]
    let frames, frame
    if (!p.grounded) {
        frames = set.jump
        frame = Math.min(frames.length - 1, Math.floor(p.airTicks / 4))
    } else if (p.vx !== 0) {
        frames = set.run
        frame = Math.floor(game.tick / 5) % frames.length
    } else {
        frames = set.idle
        frame = Math.floor(game.tick / 12) % frames.length
    }
    const img = frames[frame]
    if (!img.complete || !img.naturalWidth) return
    if (p.invuln > 0 && Math.floor(p.invuln / 5) % 2 === 0) return
    const x = p.x - game.camera + (p.w - img.naturalWidth) / 2
    const y = p.y + p.h - img.naturalHeight
    c.save()
    if (p.facing === 'left') {
        c.translate(p.x - game.camera + p.w / 2, 0)
        c.scale(-1, 1)
        c.translate(-(p.x - game.camera + p.w / 2), 0)
    }
    c.drawImage(img, x, y)
    c.restore()
}

function drawParticles() {
    game.particles.forEach(q => {
        const a = Math.max(0, q.life / q.max) * (q.fade || 1)
        const color = q.color.includes(',') ? `rgba(${q.color},${a})` : `#${q.color}`
        c.globalAlpha = q.color.includes(',') ? 1 : a
        c.fillStyle = color
        const x = q.x - (q.spark ? game.camera : game.camera)
        if (q.round) {
            c.beginPath()
            c.arc(x, q.y, q.size, 0, Math.PI * 2)
            c.fill()
        } else {
            c.fillRect(x, q.y, q.size, q.size)
        }
        c.globalAlpha = 1
    })
}

function render() {
    c.fillStyle = '#00003c' // mesma cor do topo do fundo, para o céu continuar quando a câmera sobe
    c.fillRect(0, 0, W, H)

    c.save()
    if (game.shake > 0) c.translate((Math.random() - 0.5) * game.shake, (Math.random() - 0.5) * game.shake)

    //fundo com parallax
    const bgX = -game.camera * 0.4
    const bgY = -game.camY * 0.5
    if (backgroundImage.complete) {
        c.drawImage(backgroundImage, bgX, bgY)
        if (bgX + backgroundImage.width < W) c.drawImage(backgroundImage, bgX + backgroundImage.width, bgY)
        if (bgY > 0) {
            const fade = c.createLinearGradient(0, bgY, 0, bgY + 50)
            fade.addColorStop(0, '#00003c')
            fade.addColorStop(1, 'rgba(0,0,60,0)')
            c.fillStyle = fade
            c.fillRect(0, bgY, W, 50)
        }
    }

    //mundo (acompanha a câmera vertical)
    c.translate(0, -game.camY)
    const gaps = voidGaps()
    drawGlow(gaps)
    drawNeon(gaps, 1, GROUND_Y)

    game.platforms.forEach(pl => { if (pl.mover) drawTrack(pl) })
    game.platforms.forEach(pl => {
        const x0 = pl.x - game.camera
        if (x0 > W || x0 + pl.w < 0) return
        if (pl.kind === 'ground') {
            for (let i = 0; i < pl.n; i++) c.drawImage(platformImage, x0 + i * GROUND_STEP, pl.y)
        } else {
            for (let i = 0; i < pl.n; i++) c.drawImage(miniPlatformImage, x0 + i * MINI_STEP, pl.y)
        }
    })
    game.flags.forEach(drawFlag)
    game.banners.forEach(drawBanner)
    drawPlayer()
    game.lasers.forEach(drawLaser)
    //efeitos de desbloqueio ficam na frente do jogador
    game.banners.forEach(b => {
        const x = b.x - game.camera
        if (b.unlockT >= 0 && b.unlockT < UNLOCK_TICKS && x > -BANNER_W * 2 && x < W + BANNER_W) drawUnlock(b, x, b.unlockT)
    })
    //o jogador afunda no néon ao cair
    drawNeon(gaps, 0.6, GROUND_Y + 14)
    drawParticles()
    c.restore()

    ui.setActionReady(game.state === 'playing' && game.player.grounded && (!!game.near || (!!game.nearFlag && pendingBefore(game.nearFlag) === 0)))
    if (game.state === 'playing' || game.state === 'celebrate' || game.state === 'math' || game.state === 'paused') {
        ui.setHud({
            level: game.level.id,
            levels: LEVELS.length,
            time: game.time,
            lives: game.lives,
            maxLives: MAX_LIVES,
            contas: game.contas,
            totalContas: game.banners.length
        })
    }
}

/* ---------- laço principal (passo fixo de 60 quadros por segundo) ---------- */
let last = performance.now()
let acc = 0
function loop(now) {
    requestAnimationFrame(loop)
    acc += Math.min(now - last, 250)
    last = now
    let steps = 0
    while (acc >= STEP && steps < 5) {
        step()
        acc -= STEP
        steps++
    }
    if (steps === 5) acc = 0
    render()
    syncMusic()
}

// batida só durante a fase; na conta e nos menus fica só o ambiente, na pausa mais baixo
let musicMode = null
function syncMusic() {
    const s = game.state
    const m = s === 'playing' || s === 'celebrate' ? 'play' : s === 'paused' ? 'pause' : 'menu'
    if (m !== musicMode) setMusicMode((musicMode = m))
}

// o navegador só toca som depois de um gesto: a música começa no primeiro toque ou tecla
const beginMusic = () => {
    startMusic()
    removeEventListener('pointerdown', beginMusic, true)
    removeEventListener('keydown', beginMusic, true)
}
addEventListener('pointerdown', beginMusic, true)
addEventListener('keydown', beginMusic, true)

/* ---------- entrada: teclado e toque usam as mesmas ações ---------- */
function action(name, down) {
    switch (name) {
        case 'left':
            keys.left = down
            break
        case 'right':
            keys.right = down
            break
        case 'jump':
            if (down) {
                if (!keys.jump) jumpBuffer = 6
                keys.jump = true
            } else if (keys.jump) {
                keys.jump = false
                jumpReleased = true
            }
            break
        case 'act':
            if (down) tryInteract()
            break
    }
}

const KEY_ACTIONS = {
    KeyA: 'left', ArrowLeft: 'left',
    KeyD: 'right', ArrowRight: 'right',
    KeyW: 'jump', ArrowUp: 'jump', Space: 'jump',
    KeyE: 'act'
}

addEventListener('keydown', e => {
    if (ui.mathKeydown(e)) return
    if (e.target && e.target.tagName === 'INPUT') return
    if (e.code === 'KeyM' && !e.repeat) {
        toggleSound()
    } else if (e.code === 'KeyN' && !e.repeat) {
        ui.setMusicIcons(toggleMusic())
    } else if (e.code === 'KeyP' || e.code === 'Escape') {
        if (!e.repeat) togglePause()
    } else if (KEY_ACTIONS[e.code] && !e.repeat) {
        action(KEY_ACTIONS[e.code], true)
    }
    if (e.code.startsWith('Arrow') || (e.code === 'Space' && game.state === 'playing')) e.preventDefault()
})

addEventListener('keyup', e => {
    // sem isso o espaço também "clicaria" o último botão focado
    if (e.code === 'Space' && game.state === 'playing') e.preventDefault()
    const name = KEY_ACTIONS[e.code]
    if (name && name !== 'act') action(name, false)
})

addEventListener('blur', () => {
    resetInput()
    if (game.state === 'playing') togglePause()
})

// saiu para outro app ou bloqueou o celular: pausa o jogo também
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) return
    resetInput()
    if (game.state === 'playing') togglePause()
})

/* ---------- ajuste de tamanho, celular e início ---------- */
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
document.body.classList.toggle('touch', isTouch)

const gameEl = document.getElementById('game')
function fit() {
    const vv = window.visualViewport
    const vw = vv ? vv.width : innerWidth
    const vh = vv ? vv.height : innerHeight
    gameEl.style.transform = `scale(${Math.min(vw / W, vh / H)})`
    // em pé o celular fica pequeno demais: pausa e pede para girar
    if (isTouch && vh > vw && game.state === 'playing') togglePause()
}
addEventListener('resize', fit)
if (window.visualViewport) window.visualViewport.addEventListener('resize', fit)
fit()

ui.init()
ui.buildPad()
ui.buildNamePad()
ui.bindTouch(action)
ui.bindPauseButton(togglePause)
ui.bindExitButtons(quitGame)
ui.bindSoundButton(toggleSound)
ui.setSoundIcon(isMuted())
ui.bindMusicButtons(toggleMusic)
ui.setMusicIcons(isMusicOn())
// clique de interface em qualquer botão (menus, resultados, pausa)
document.addEventListener('click', e => {
    if (e.target.closest('button') && !e.target.closest('#math-pad, #touch, #btn-sound, #name-pad')) sfx.click()
})
ui.bindFullscreen()
ui.setCharImages({ boy: SPRITES.boy.idle[0].src, girl: SPRITES.girl.idle[0].src })
ui.bindTitle({
    onStart: name => {
        saveProfile({ group: name || 'Equipe', character: game.character })
        goSelect()
    }
})
goTitle()
requestAnimationFrame(loop)

