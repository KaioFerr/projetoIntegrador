// Música de fundo gerada na hora (Web Audio), no clima synthwave / Blade Runner:
// pads largos com reverb, baixo pulsando, arpejo com eco e uma melodia de sinos esparsa.
// Nos menus toca só o ambiente; durante a fase entram a batida e o chimbal.
import { getAudio } from './sfx'

const BPM = 84
const EIGHTH = 60 / BPM / 2
const STEPS_PER_CHORD = 16 // 2 compassos de colcheias

// progressão em ré menor: Dm9 – B♭maj7 – Gm7 – A(sus4)
const CHORDS = [
    { pad: [50, 53, 57, 60, 64], bass: 38, arp: [62, 65, 69, 72] },
    { pad: [46, 50, 53, 57], bass: 34, arp: [58, 62, 65, 69] },
    { pad: [43, 50, 53, 58], bass: 31, arp: [55, 58, 62, 65] },
    { pad: [45, 52, 57, 62, 64], bass: 33, arp: [57, 62, 64, 69] }
]
// melodia: [passo dentro do acorde, nota] — poucas notas, bem espaçadas
const MELODY = [
    [[0, 69], [6, 72], [10, 69]],
    [[0, 70], [8, 65]],
    [[0, 67], [6, 70], [10, 74]],
    [[0, 73], [8, 69]]
]
const ARP_ORDER = [0, 1, 2, 3, 2, 1, 0, 2]

const hz = n => 440 * Math.pow(2, (n - 69) / 12)

let bus = null // { out, dry, wet, padFilter, delay }
let step = 0
let nextTime = 0
let timer = null
let mode = 'menu' // menu | play | pause

function build(ctx, master) {
    const out = ctx.createGain()
    out.gain.value = 0
    out.connect(master)

    // reverb: resposta ao impulso feita de ruído que decai (≈3,5 s)
    const len = ctx.sampleRate * 3.5
    const ir = ctx.createBuffer(2, len, ctx.sampleRate)
    for (let ch = 0; ch < 2; ch++) {
        const d = ir.getChannelData(ch)
        for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3)
    }
    const reverb = ctx.createConvolver()
    reverb.buffer = ir
    const wet = ctx.createGain()
    wet.gain.value = 0.55
    reverb.connect(wet)
    wet.connect(out)
    const dry = ctx.createGain()
    dry.gain.value = 0.7
    dry.connect(out)

    // filtro dos pads abrindo e fechando devagar
    const padFilter = ctx.createBiquadFilter()
    padFilter.type = 'lowpass'
    padFilter.frequency.value = 1100
    padFilter.Q.value = 2
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.frequency.value = 0.07
    lfoGain.gain.value = 600
    lfo.connect(lfoGain)
    lfoGain.connect(padFilter.frequency)
    lfo.start()
    padFilter.connect(dry)
    padFilter.connect(reverb)

    // eco em colcheia pontuada para o arpejo e os sinos
    const delay = ctx.createDelay(2)
    delay.delayTime.value = EIGHTH * 1.5
    const fb = ctx.createGain()
    fb.gain.value = 0.38
    const delayTone = ctx.createBiquadFilter()
    delayTone.type = 'lowpass'
    delayTone.frequency.value = 2500
    delay.connect(delayTone)
    delayTone.connect(fb)
    fb.connect(delay)
    delayTone.connect(reverb)
    delayTone.connect(dry)

    return { out, dry, reverb, padFilter, delay }
}

function env(ctx, g, t, a, peak, hold, r) {
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(peak, t + a)
    g.gain.setValueAtTime(peak, t + a + hold)
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + r)
}

function pad(ctx, notes, t, dur) {
    notes.forEach(n => {
        ;[-7, 7].forEach(detune => {
            const o = ctx.createOscillator()
            const g = ctx.createGain()
            o.type = 'sawtooth'
            o.frequency.value = hz(n)
            o.detune.value = detune
            env(ctx, g, t, 1.6, 0.035, dur - 1.6, 2.2)
            o.connect(g)
            g.connect(bus.padFilter)
            o.start(t)
            o.stop(t + dur + 2.4)
        })
    })
}

function bass(ctx, n, t) {
    const o = ctx.createOscillator()
    const f = ctx.createBiquadFilter()
    const g = ctx.createGain()
    o.type = 'sawtooth'
    o.frequency.value = hz(n)
    f.type = 'lowpass'
    f.frequency.setValueAtTime(700, t)
    f.frequency.exponentialRampToValueAtTime(160, t + EIGHTH * 0.9)
    env(ctx, g, t, 0.01, 0.22, 0.05, EIGHTH * 0.8)
    o.connect(f)
    f.connect(g)
    g.connect(bus.dry)
    o.start(t)
    o.stop(t + EIGHTH + 0.1)
}

function pluck(ctx, n, t, vol) {
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = 'triangle'
    o.frequency.value = hz(n)
    env(ctx, g, t, 0.005, vol, 0, 0.35)
    o.connect(g)
    g.connect(bus.dry)
    g.connect(bus.delay)
    o.start(t)
    o.stop(t + 0.4)
}

// sino: seno com um parcial inarmônico, decaimento longo
function bell(ctx, n, t) {
    ;[[1, 0.09], [2.76, 0.03]].forEach(([ratio, vol]) => {
        const o = ctx.createOscillator()
        const g = ctx.createGain()
        o.type = 'sine'
        o.frequency.value = hz(n) * ratio
        env(ctx, g, t, 0.01, vol, 0, ratio === 1 ? 2.6 : 1)
        o.connect(g)
        g.connect(bus.reverb)
        g.connect(bus.delay)
        o.start(t)
        o.stop(t + 2.8)
    })
}

function kick(ctx, t) {
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.frequency.setValueAtTime(110, t)
    o.frequency.exponentialRampToValueAtTime(40, t + 0.18)
    env(ctx, g, t, 0.003, 0.35, 0, 0.25)
    o.connect(g)
    g.connect(bus.dry)
    o.start(t)
    o.stop(t + 0.3)
}

function hat(ctx, t) {
    const len = Math.ceil(ctx.sampleRate * 0.05)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const s = ctx.createBufferSource()
    const f = ctx.createBiquadFilter()
    const g = ctx.createGain()
    s.buffer = buf
    f.type = 'highpass'
    f.frequency.value = 7000
    g.gain.value = 0.05
    s.connect(f)
    f.connect(g)
    g.connect(bus.dry)
    s.start(t)
}

function scheduleStep(ctx, t) {
    const ci = Math.floor(step / STEPS_PER_CHORD) % CHORDS.length
    const s = step % STEPS_PER_CHORD
    const chord = CHORDS[ci]
    const drums = mode === 'play'

    if (s === 0) pad(ctx, chord.pad, t, EIGHTH * STEPS_PER_CHORD)
    bass(ctx, chord.bass + (s % 2 ? 12 : 0), t)
    pluck(ctx, chord.arp[ARP_ORDER[s % ARP_ORDER.length]], t, s % 4 === 0 ? 0.07 : 0.045)
    MELODY[ci].forEach(([at, n]) => { if (at === s) bell(ctx, n, t) })
    if (drums) {
        if (s % 4 === 0) kick(ctx, t)
        if (s % 2 === 1) hat(ctx, t)
    }
    step++
}

function tick() {
    const a = getAudio()
    if (!a) return
    const { ctx } = a
    if (ctx.state !== 'running') return
    if (nextTime < ctx.currentTime) nextTime = ctx.currentTime + 0.05
    while (nextTime < ctx.currentTime + 0.25) {
        scheduleStep(ctx, nextTime)
        nextTime += EIGHTH
    }
}

const LEVELS = { menu: 1.1, play: 0.9, pause: 0.4 }

// começa a música (chamar depois de um gesto da pessoa)
export function startMusic() {
    const a = getAudio()
    if (!a) return
    if (!bus) bus = build(a.ctx, a.master)
    if (!timer) {
        bus.out.gain.setTargetAtTime(LEVELS[mode], a.ctx.currentTime, 1.5)
        timer = setInterval(tick, 60)
        tick()
    }
}

// menu: só ambiente; play: com batida; pause: mais baixo e sem batida
export function setMusicMode(next) {
    mode = next
    const a = getAudio()
    if (bus && a) bus.out.gain.setTargetAtTime(LEVELS[mode], a.ctx.currentTime, 0.4)
}

// aba escondida ou app em segundo plano: para tudo para não gastar bateria
document.addEventListener('visibilitychange', () => {
    const a = getAudio(false)
    if (!a) return
    if (document.hidden) a.ctx.suspend()
    else a.ctx.resume()
})
