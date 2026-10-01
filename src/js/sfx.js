// Efeitos sonoros sintetizados na hora (Web Audio), no estilo dos videogames 8-bit.
// Não usa arquivos de áudio. O navegador só libera o som depois do primeiro toque ou tecla.
import { getSound, saveSound } from './storage'

let ctx = null
let master = null
let muted = !getSound()

function audio() {
    if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext
        if (!AC) return null
        ctx = new AC()
        master = ctx.createGain()
        master.gain.value = muted ? 0 : 0.35
        master.connect(ctx.destination)
    }
    if (ctx.state === 'suspended') ctx.resume()
    return ctx
}

// libera o áudio no primeiro gesto da pessoa
const unlock = () => audio()
addEventListener('pointerdown', unlock, { capture: true, passive: true })
addEventListener('keydown', unlock, { capture: true })

// contexto de áudio compartilhado com a música; create=false só devolve se já existir
export function getAudio(create = true) {
    if (!ctx && !create) return null
    if (create && !audio()) return null
    return { ctx, master }
}

export function isMuted() { return muted }

export function setMuted(value) {
    muted = value
    saveSound(!muted)
    if (master) master.gain.setTargetAtTime(muted ? 0 : 0.35, ctx.currentTime, 0.02)
}

// nota simples: frequência inicial, final (deslize), duração, forma de onda, volume e atraso
function tone(freq, { to = freq, dur = 0.1, type = 'square', vol = 0.5, delay = 0 } = {}) {
    const ac = audio()
    if (!ac || muted) return
    const t = ac.currentTime + delay
    const osc = ac.createOscillator()
    const g = ac.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    if (to !== freq) osc.frequency.exponentialRampToValueAtTime(to, t + dur)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(vol, t + 0.005)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(g)
    g.connect(master)
    osc.start(t)
    osc.stop(t + dur + 0.02)
}

// ruído curto (estalo, batida, chiado)
function noise({ dur = 0.08, vol = 0.4, freq = 1000, type = 'bandpass', delay = 0 } = {}) {
    const ac = audio()
    if (!ac || muted) return
    const t = ac.currentTime + delay
    const len = Math.ceil(ac.sampleRate * dur)
    const buf = ac.createBuffer(1, len, ac.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const src = ac.createBufferSource()
    src.buffer = buf
    const f = ac.createBiquadFilter()
    f.type = type
    f.frequency.value = freq
    const g = ac.createGain()
    g.gain.value = vol
    src.connect(f)
    f.connect(g)
    g.connect(master)
    src.start(t)
}

const arp = (notes, { step = 0.07, dur = 0.12, type = 'square', vol = 0.35, delay = 0 } = {}) =>
    notes.forEach((n, i) => tone(n, { dur, type, vol, delay: delay + i * step }))

export const sfx = {
    jump: () => tone(280, { to: 620, dur: 0.14, vol: 0.25 }),
    land: () => noise({ dur: 0.06, vol: 0.35, freq: 220, type: 'lowpass' }),
    click: () => tone(660, { dur: 0.04, vol: 0.18 }),
    key: () => tone(990, { dur: 0.035, vol: 0.18, type: 'triangle' }),
    // abrir a conta: o computador do painel "conectando"
    hackStart: () => arp([440, 660, 880], { step: 0.05, dur: 0.06, vol: 0.22 }),
    correct: () => arp([880, 1320], { step: 0.08, dur: 0.1, type: 'triangle', vol: 0.4 }),
    wrong: () => {
        tone(220, { to: 140, dur: 0.18, type: 'sawtooth', vol: 0.3 })
        tone(220, { to: 120, dur: 0.22, type: 'sawtooth', vol: 0.3, delay: 0.2 })
    },
    // cadeado tremendo: bipes rápidos de "processando"
    hacking: () => {
        for (let i = 0; i < 7; i++) tone(700 + Math.random() * 900, { dur: 0.04, vol: 0.15, delay: i * 0.06 })
    },
    // cadeado abre: estalo metálico + acorde subindo
    unlock: () => {
        noise({ dur: 0.05, vol: 0.5, freq: 3200, type: 'highpass' })
        tone(1400, { to: 900, dur: 0.06, type: 'square', vol: 0.2 })
        arp([523, 659, 784, 1047], { step: 0.07, delay: 0.06, vol: 0.3 })
    },
    checkpoint: () => arp([392, 523, 659, 784], { step: 0.08, dur: 0.16, type: 'triangle', vol: 0.45 }),
    denied: () => {
        tone(180, { dur: 0.1, vol: 0.28 })
        tone(150, { dur: 0.16, vol: 0.28, delay: 0.12 })
    },
    fall: () => tone(700, { to: 90, dur: 0.55, type: 'triangle', vol: 0.5 }),
    gameOver: () => arp([392, 330, 262, 196], { step: 0.22, dur: 0.3, type: 'triangle', vol: 0.5 }),
    levelComplete: () => {
        arp([523, 659, 784, 1047], { step: 0.1, dur: 0.14, vol: 0.3 })
        arp([784, 1047], { step: 0.16, dur: 0.4, vol: 0.3, delay: 0.45 })
    }
}
