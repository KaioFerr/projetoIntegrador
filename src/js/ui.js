// Camadas HTML por cima do canvas: painel, conta, resultados, menus
import { hintFor } from './math'

const $ = id => document.getElementById(id)
const SCREENS = ['title', 'select', 'math', 'results', 'pause']

export const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0')

export function showScreen(name) {
    SCREENS.forEach(s => { $('screen-' + s).hidden = s !== name })
    document.querySelectorAll('.confetti').forEach(c => c.remove())
}

/* ---------- painel ---------- */
export function setHudVisible(visible) {
    $('hud').hidden = !visible
    $('ctrl').hidden = !visible
}

let lastHud = ''
export function setHud({ level, levels, time, lives, maxLives, contas, totalContas }) {
    const key = [level, Math.floor(time), lives, contas].join('|')
    if (key === lastHud) return
    lastHud = key
    $('hud-level').textContent = `${level}/${levels}`
    $('hud-time').textContent = fmt(time)
    $('hud-contas-label').textContent = `Contas ${contas}/${totalContas}`
    $('hud-pips').innerHTML = Array.from({ length: totalContas }, (_, i) => `<span class="pip ${i < contas ? 'on' : ''}"></span>`).join('')
    $('hud-hearts').innerHTML = Array.from({ length: maxLives }, (_, i) => `<span class="heart ${i < lives ? '' : 'off'}"></span>`).join('')
}
export function resetHudCache() { lastHud = '' }

let toastTimer
export function toast(text, ms = 2200) {
    const t = $('toast')
    t.textContent = text
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

/* ---------- tela inicial e seleção ---------- */
export function bindTitle({ onStart }) {
    const start = () => onStart($('group-name').value.trim())
    $('btn-start').onclick = start
    $('group-name').onkeydown = e => { if (e.key === 'Enter') start() }
}

export function setGroupName(name) { $('group-name').value = name }
export function focusGroupName() { $('group-name').focus() }

export function setCharImages({ boy, girl }) {
    $('img-boy').src = boy
    $('img-girl').src = girl
}

export function renderSelect({ levels, progress, selected, character, group, onSelect, onCharacter, onPlay }) {
    $('select-title').textContent = group ? `${group}: escolha a fase` : 'Escolha a fase'
    const unlocked = n => n === 1 || (progress[n - 1] && progress[n - 1].stars > 0)
    $('lvls').innerHTML = levels.map(l => {
        const p = progress[l.id]
        const lock = !unlocked(l.id)
        const stars = lock ? '' : [0, 1, 2].map(i => `<span class="star ${p && i < p.stars ? '' : 'off'}"></span>`).join('')
        const best = lock ? 'Bloqueada' : p && p.best !== null ? `Melhor ${fmt(p.best)}` : 'Nova'
        return `<button class="lvl ${lock ? 'lock' : ''} ${l.id === selected ? 'sel' : ''}" data-level="${l.id}" ${lock ? 'disabled' : ''}>
            <span class="n">${lock ? '🔒' : l.id}</span><span>${l.name}</span><span class="mini">${stars}</span><span class="best">${best}</span></button>`
    }).join('')
    $('lvls').querySelectorAll('.lvl:not(.lock)').forEach(b => { b.onclick = () => onSelect(Number(b.dataset.level)) })
    $('who-boy').classList.toggle('sel', character === 'boy')
    $('who-girl').classList.toggle('sel', character === 'girl')
    $('who-boy').onclick = () => onCharacter('boy')
    $('who-girl').onclick = () => onCharacter('girl')
    $('btn-play').textContent = `Jogar fase ${selected}`
    $('btn-play').style.width = 'auto'
    $('btn-play').style.padding = '0 32px'
    $('btn-play').onclick = onPlay
}

/* ---------- conta ---------- */
const mathState = { open: false, answer: '', tries: 0, question: null, submit: null, close: null, locked: false }

export function buildPad() {
    const pad = $('math-pad')
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => `<button class="key" data-k="${n}">${n}</button>`)
    keys.push('<button class="key del" data-k="del">apagar</button>', '<button class="key ok" data-k="ok">OK</button>')
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
    $('math-hint').textContent = 'Digite o resultado e aperte OK.'
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
        renderAnswer('good')
        $('math-hint').textContent = 'Muito bem! Banner liberado.'
        setTimeout(() => closeMath(true), 900)
    } else {
        mathState.tries++
        renderAnswer('bad')
        $('math-hint').textContent = mathState.tries >= 2 ? hintFor(mathState.question) : 'Quase! Tente de novo.'
        mathState.answer = ''
        setTimeout(() => { if (!mathState.answer && !mathState.locked) renderAnswer() }, 600)
    }
}

function pressKey(k) {
    if (!mathState.open || mathState.locked) return
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
    $('res-title').textContent = `Fase ${level.id} completa!`
    $('res-stars').innerHTML = [0, 1, 2].map(i => `<span class="star ${i < stars ? '' : 'off'}"></span>`).join('')
    const best = bestInfo.isBest ? '<div class="new"><span>Melhor tempo</span><b>novo!</b></div>' : `<div><span>Melhor tempo</span><b>${fmt(bestInfo.previousBest)}</b></div>`
    $('res-rows').innerHTML = `<div><span>Tempo</span><b>${fmt(time)}</b></div><div><span>Meta</span><b>${fmt(goal)}</b></div>
        <div><span>Acertos</span><b>${correct} de ${total}</b></div><div><span>Erros</span><b>${errors}</b></div>
        <div><span>Quedas</span><b>${falls}</b></div>${best}`
    const names = { '+': 'Soma', '-': 'Subtração' }
    $('res-ops').innerHTML = Object.keys(byOp).map(op => {
        const { ok, n } = byOp[op]
        return `<span>${names[op]}</span><div class="bar"><i style="width:${n ? Math.round(ok / n * 100) : 0}%"></i></div><span>${ok} de ${n}</span>`
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
export function showPause({ title, text, mainLabel, onMain, onMenu }) {
    $('pause-title').textContent = title
    $('pause-text').textContent = text
    $('pause-main').textContent = mainLabel
    $('pause-main').onclick = onMain
    $('pause-menu').onclick = onMenu
    showScreen('pause')
}
