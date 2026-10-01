// Camadas HTML por cima do canvas: painel, conta, resultados, menus
import { hintFor } from './math'
import { sfx } from './sfx'
import { icon, hydrateIcons } from './icons'

const $ = id => document.getElementById(id)
const SCREENS = ['title', 'select', 'math', 'results', 'pause']
const OP_ICON = { '+': 'plus', '-': 'minus' }

export const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0')

export function init() {
    hydrateIcons()
}

export function showScreen(name) {
    SCREENS.forEach(s => { $('screen-' + s).hidden = s !== name })
    document.body.classList.toggle('overlay-open', !!name)
    document.querySelectorAll('.confetti').forEach(c => c.remove())
}

/* ---------- painel ---------- */
let ctrlTimer
export function setHudVisible(visible) {
    $('hud').hidden = !visible
    document.body.classList.toggle('in-level', visible)
    $('ctrl').hidden = !visible || document.body.classList.contains('touch')
    if (visible) {
        // a dica de teclas some sozinha para não cobrir o cenário
        $('ctrl').classList.remove('fade')
        clearTimeout(ctrlTimer)
        ctrlTimer = setTimeout(() => $('ctrl').classList.add('fade'), 7000)
    }
    if (!visible) setActionReady(false)
}

let lastHud = ''
export function setHud({ level, levels, time, lives, maxLives, contas, totalContas }) {
    const key = [level, Math.floor(time), lives, contas].join('|')
    if (key === lastHud) return
    lastHud = key
    $('hud-level').textContent = `${level}/${levels}`
    $('hud-time').textContent = fmt(time)
    $('hud-contas').textContent = `${contas}/${totalContas}`
    $('hud-pips').innerHTML = Array.from({ length: totalContas }, (_, i) => `<span class="pip ${i < contas ? 'on' : ''}"></span>`).join('')
    $('hud-hearts').innerHTML = Array.from({ length: maxLives }, (_, i) => `<span class="icon-slot ${i < lives ? '' : 'off'}">${icon('heart')}</span>`).join('')
}
export function resetHudCache() { lastHud = '' }

let actionReady = false
export function setActionReady(ready) {
    if (ready === actionReady) return
    actionReady = ready
    $('t-act').classList.toggle('ready', ready)
}

let toastTimer
export function toast(text, ms = 2200, iconName = 'flag') {
    const t = $('toast')
    t.innerHTML = `<span class="icon-slot">${icon(iconName)}</span><span></span>`
    t.lastChild.textContent = text
    t.classList.add('show')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => t.classList.remove('show'), ms)
}

export function flash() {
    const f = $('flash')
    f.classList.remove('go')
    void f.offsetWidth
    f.classList.add('go')
}

/* ---------- entrada por toque e tela cheia ---------- */
// ação: 'left' | 'right' | 'jump' | 'act' ; down(true) ao tocar e down(false) ao soltar
export function bindTouch(handler) {
    const map = { 't-left': 'left', 't-right': 'right', 't-jump': 'jump', 't-act': 'act' }
    Object.keys(map).forEach(id => {
        const b = $(id)
        const release = e => {
            b.classList.remove('on')
            handler(map[id], false)
        }
        b.addEventListener('pointerdown', e => {
            e.preventDefault()
            b.setPointerCapture(e.pointerId)
            b.classList.add('on')
            handler(map[id], true)
        })
        b.addEventListener('pointerup', release)
        b.addEventListener('pointercancel', release)
        b.addEventListener('lostpointercapture', release)
        b.addEventListener('contextmenu', e => e.preventDefault())
    })
}

// botão de som no painel; onToggle() troca e devolve se ficou mudo
export function bindSoundButton(onToggle) {
    $('btn-sound').addEventListener('click', () => setSoundIcon(onToggle()))
}

export function setSoundIcon(muted) {
    const b = $('btn-sound')
    b.innerHTML = `<span class="icon-slot">${icon(muted ? 'mute' : 'sound')}</span>`
    b.setAttribute('aria-label', muted ? 'Ligar o som' : 'Desligar o som')
}

// botões de música (painel, menus e pausa); onToggle() troca e devolve se ficou ligada
export function bindMusicButtons(onToggle) {
    document.querySelectorAll('[data-music]').forEach(b => b.addEventListener('click', () => setMusicIcons(onToggle())))
}

export function setMusicIcons(on) {
    document.querySelectorAll('[data-music]').forEach(b => {
        const label = 'label' in b.dataset ? (on ? 'Música' : 'Sem música') : ''
        b.innerHTML = `<span class="icon-slot">${icon(on ? 'music' : 'music-off')}</span>${label}`
        b.setAttribute('aria-label', on ? 'Desligar a música' : 'Ligar a música')
    })
}

export function bindPauseButton(onPause) {
    $('btn-pause').addEventListener('click', onPause)
}

export function bindFullscreen() {
    const el = document.documentElement
    const can = !!(el.requestFullscreen && document.fullscreenEnabled) && document.body.classList.contains('touch')
    let userExited = false // se a pessoa saiu da tela cheia pelo botão, não insiste
    const landscape = () => matchMedia('(orientation: landscape)').matches
    const enter = () => {
        if (!can || document.fullscreenElement || userExited || !landscape()) return
        el.requestFullscreen({ navigationUI: 'hide' })
            .then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {}))
            .catch(() => {})
    }
    document.querySelectorAll('[data-fs]').forEach(b => {
        b.hidden = !can
        b.onclick = () => {
            if (document.fullscreenElement) {
                userExited = true
                document.exitFullscreen()
            } else {
                userExited = false
                el.requestFullscreen().catch(() => {})
            }
        }
    })
    if (!can) return
    // ao girar para a horizontal tenta entrar em tela cheia; o navegador pode exigir um toque,
    // então o primeiro toque na tela (em qualquer lugar) também entra
    matchMedia('(orientation: landscape)').addEventListener('change', e => {
        if (e.matches) enter()
        else userExited = false
    })
    document.addEventListener('touchend', e => {
        if (!e.target.closest('[data-fs]')) enter()
    }, { capture: true, passive: true })
    document.addEventListener('pointerup', e => {
        if (e.pointerType !== 'mouse' && !e.target.closest('[data-fs]')) enter()
    }, { capture: true, passive: true })
}

/* ---------- tela inicial e seleção ---------- */
export function bindTitle({ onStart }) {
    const start = () => onStart($('group-name').value.trim())
    $('btn-start').onclick = start
    $('group-name').onkeydown = e => { if (e.key === 'Enter') start() }
}

export function setGroupName(name) { $('group-name').value = name }

// teclado próprio do jogo para o nome do grupo; no celular substitui o teclado do sistema
const NAME_ROWS = ['1234567890', 'QWERTYUIOP', 'ASDFGHJKLÇ', 'ZXCVBNM']
// com a tecla de acentos, as duas linhas de letras viram as letras acentuadas
const ACCENT_ROWS = ['1234567890', 'ÁÀÂÃÉÊÍ', 'ÓÔÕÚ', 'ZXCVBNM']
let accentMode = false

function renderNamePad() {
    const rows = accentMode ? ACCENT_ROWS : NAME_ROWS
    const row = (r, extra = '') => `<div class="row">${r.split('').map(ch => `<button class="key" data-ch="${ch}">${ch}</button>`).join('')}${extra}</div>`
    const tail = `<button class="key accent${accentMode ? ' on' : ''}" data-ch="accent" aria-label="${accentMode ? 'Letras sem acento' : 'Letras com acento'}">${accentMode ? 'ABC' : 'ÁÃ'}</button>` +
        '<button class="key space" data-ch=" ">espaço</button>' +
        `<button class="key del" data-ch="del" aria-label="Apagar">${icon('backspace')}</button>`
    $('name-pad').innerHTML = rows.slice(0, 3).map(r => row(r)).join('') + row(rows[3], tail)
}

export function buildNamePad() {
    const input = $('group-name')
    if (document.body.classList.contains('touch')) {
        input.readOnly = true
        input.setAttribute('inputmode', 'none')
    }
    renderNamePad()
    $('name-pad').onclick = e => {
        const k = e.target.closest('.key')
        if (!k) return
        sfx.key()
        const ch = k.dataset.ch
        if (ch === 'accent') {
            accentMode = !accentMode
            return renderNamePad()
        }
        let v = input.value
        if (ch === 'del') v = v.slice(0, -1)
        else if (ch === ' ') { if (v && !v.endsWith(' ')) v += ' ' }
        else if (v.length < input.maxLength) {
            // primeira letra de cada palavra maiúscula, o resto minúscula
            v += !v || v.endsWith(' ') ? ch : ch.toLowerCase()
        }
        input.value = v
        // depois de uma letra acentuada, volta para o teclado normal (como o Shift do celular)
        if (accentMode && /[ÁÀÂÃÉÊÍÓÔÕÚ]/.test(ch)) {
            accentMode = false
            renderNamePad()
        }
    }
}

export function focusGroupName() {
    // no celular o teclado virtual só abre quando a pessoa toca no campo
    if (!document.body.classList.contains('touch')) $('group-name').focus()
}

export function setCharImages({ boy, girl }) {
    $('img-boy').src = boy
    $('img-girl').src = girl
}

export function renderSelect({ levels, progress, selected, character, group, onSelect, onCharacter, onPlay }) {
    $('select-title').textContent = group ? `${group}: escolha a fase` : 'Escolha a fase'
    const unlocked = n => n === 1 || (progress[n - 1] && progress[n - 1].stars > 0)
    const kindIcon = l => (l.math.ops.length > 1 ? (l.id === levels.length ? 'trophy' : 'plusminus') : OP_ICON[l.math.ops[0]])
    $('lvls').innerHTML = levels.map(l => {
        const p = progress[l.id]
        const lock = !unlocked(l.id)
        const stars = lock ? '' : [0, 1, 2].map(i => `<span class="icon-slot ${p && i < p.stars ? '' : 'off'}">${icon('star')}</span>`).join('')
        const best = lock ? 'Bloqueada' : p && p.best !== null ? `<span class="icon-slot">${icon('clock')}</span>${fmt(p.best)}` : 'Nova'
        return `<button class="lvl ${lock ? 'lock' : ''} ${l.id === selected ? 'sel' : ''}" data-level="${l.id}" ${lock ? 'disabled' : ''}>
            <span class="n">${lock ? `<span class="icon-slot">${icon('lock')}</span>` : l.id}</span>
            <span class="op"><span class="icon-slot">${icon(kindIcon(l))}</span>${l.name}</span>
            <span class="mini">${stars}</span><span class="best">${best}</span></button>`
    }).join('')
    $('lvls').querySelectorAll('.lvl:not(.lock)').forEach(b => { b.onclick = () => onSelect(Number(b.dataset.level)) })
    $('who-boy').classList.toggle('sel', character === 'boy')
    $('who-girl').classList.toggle('sel', character === 'girl')
    $('who-boy').onclick = () => onCharacter('boy')
    $('who-girl').onclick = () => onCharacter('girl')
    $('btn-play-label').textContent = `Jogar fase ${selected}`
    $('btn-play').onclick = onPlay
}

/* ---------- conta ---------- */
const mathState = { open: false, answer: '', tries: 0, question: null, submit: null, close: null, locked: false }

export function buildPad() {
    const pad = $('math-pad')
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => `<button class="key" data-k="${n}">${n}</button>`)
    keys.push(`<button class="key del" data-k="del" aria-label="Apagar">${icon('backspace')}</button>`, `<button class="key ok" data-k="ok">${icon('check')}OK</button>`)
    pad.innerHTML = keys.join('')
    pad.onclick = e => {
        const k = e.target.closest('.key')
        if (k) pressKey(k.dataset.k)
    }
}

function renderAnswer(cls = '') {
    const a = $('math-ans')
    a.className = 'ans ' + cls
    a.textContent = mathState.answer || ' '
}

export function isMathOpen() { return mathState.open }

// onSubmit(valor) devolve true se acertou; onClose(acertou) fecha o cartão
export function openMath({ title, question, onSubmit, onClose }) {
    Object.assign(mathState, { open: true, answer: '', tries: 0, question, submit: onSubmit, close: onClose, locked: false })
    $('math-title').textContent = title
    $('math-q').textContent = `${question.text} = ?`
    $('math-hint').textContent = 'Resolva a conta para quebrar a senha.'
    renderAnswer()
    showScreen('math')
}

export function closeMath(correct) {
    if (!mathState.open) return
    mathState.open = false
    showScreen(null)
    if (mathState.close) mathState.close(correct)
}

function check() {
    if (!mathState.answer || mathState.locked) return
    const ok = mathState.submit(Number(mathState.answer))
    if (ok) {
        mathState.locked = true
        sfx.correct()
        renderAnswer('good')
        $('math-hint').textContent = 'Senha certa! Abrindo o painel...'
        setTimeout(() => closeMath(true), 900)
    } else {
        mathState.tries++
        sfx.wrong()
        renderAnswer('bad')
        $('math-hint').textContent = mathState.tries >= 2 ? hintFor(mathState.question) : 'Senha errada! Tente de novo.'
        mathState.answer = ''
        setTimeout(() => { if (!mathState.answer && !mathState.locked) renderAnswer() }, 600)
    }
}

function pressKey(k) {
    if (!mathState.open || mathState.locked) return
    if (k !== 'ok') sfx.key()
    if (k === 'del') mathState.answer = mathState.answer.slice(0, -1)
    else if (k === 'ok') return check()
    else if (mathState.answer.length < 3) mathState.answer += k
    renderAnswer()
}

// teclado físico enquanto a conta está aberta; devolve true se tratou a tecla
export function mathKeydown(e) {
    if (!mathState.open) return false
    if (/^\d$/.test(e.key)) pressKey(e.key)
    else if (e.key === 'Backspace') pressKey('del')
    else if (e.key === 'Enter') pressKey('ok')
    else if (e.key === 'Escape') closeMath(false)
    else return false
    e.preventDefault()
    return true
}

/* ---------- resultados ---------- */
export function renderResults({ level, levels, stars, time, goal, correct, total, errors, falls, bestInfo, byOp, onNext, onRetry, onMenu }) {
    const row = (ic, label, value, cls = '') => `<div class="${cls}"><span class="icon-slot">${icon(ic)}</span><span>${label}</span><b>${value}</b></div>`
    $('res-title').textContent = `Fase ${level.id} completa!`
    $('res-stars').innerHTML = [0, 1, 2].map(i => `<span class="icon-slot ${i < stars ? '' : 'off'}">${icon('star')}</span>`).join('')
    const best = bestInfo.isBest ? row('trophy', 'Melhor tempo', 'novo!', 'new') : row('trophy', 'Melhor tempo', fmt(bestInfo.previousBest))
    $('res-rows').innerHTML = row('clock', 'Tempo', fmt(time)) + row('target', 'Meta', fmt(goal)) +
        row('check', 'Acertos', `${correct} de ${total}`) + row('cross', 'Erros', errors) + row('fall', 'Quedas', falls) + best
    const names = { '+': 'Soma', '-': 'Subtração' }
    $('res-ops').innerHTML = Object.keys(byOp).map(op => {
        const { ok, n } = byOp[op]
        return `<span><span class="icon-slot">${icon(OP_ICON[op])}</span>${names[op]}</span><div class="bar"><i style="width:${n ? Math.round(ok / n * 100) : 0}%"></i></div><span>${ok} de ${n}</span>`
    }).join('')
    const hasNext = level.id < levels
    $('res-next').hidden = !hasNext
    $('res-next').onclick = onNext
    $('res-retry').onclick = onRetry
    $('res-menu').onclick = onMenu
    showScreen('results')
    if (stars === 3) confetti()
}

function confetti() {
    const colors = ['#FFFF8A', '#970000', '#38d6c4', '#ff7a2a']
    const frag = document.createDocumentFragment()
    for (let i = 0; i < 24; i++) {
        const c = document.createElement('i')
        c.className = 'confetti'
        c.style.cssText = `left:${(i * 4.3) % 100}%;background:${colors[i % 4]};animation-delay:${(i % 7) * 0.35}s;animation-duration:${2.4 + (i % 5) * 0.4}s`
        frag.appendChild(c)
    }
    $('screen-results').appendChild(frag)
}

/* ---------- pausa e fim de jogo ---------- */
export function showPause({ title, text, mainLabel, mainIcon = 'play', titleIcon = 'pause', controls = false, onMain, onMenu }) {
    $('pause-ctrls').hidden = !controls
    $('pause-icon').innerHTML = `<span class="icon-slot" style="font-size:52px">${icon(titleIcon)}</span>`
    $('pause-title-text').textContent = title
    $('pause-text').textContent = text
    $('pause-main-label').textContent = mainLabel
    $('pause-main').firstElementChild.innerHTML = icon(mainIcon)
    $('pause-main').onclick = onMain
    $('pause-menu').onclick = onMenu
    showScreen('pause')
}
