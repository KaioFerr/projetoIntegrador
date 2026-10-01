// Progresso salvo no navegador (nome do grupo, personagem e resultado de cada fase)
const KEY = 'mclovers.game'

function read() {
    try {
        return JSON.parse(localStorage.getItem(KEY)) || {}
    } catch (e) {
        return {}
    }
}

function write(data) {
    try {
        localStorage.setItem(KEY, JSON.stringify(data))
    } catch (e) { /* sem armazenamento: o jogo continua funcionando */ }
}

export function getProfile() {
    const data = read()
    return { group: data.group || '', character: data.character || 'boy' }
}

export function saveProfile({ group, character }) {
    write({ ...read(), group, character })
}

// som ligado (padrão) ou desligado
export function getSound() {
    return read().sound !== false
}

export function saveSound(on) {
    write({ ...read(), sound: on })
}

// música de fundo ligada (padrão) ou desligada, separada dos efeitos
export function getMusicOn() {
    return read().music !== false
}

export function saveMusicOn(on) {
    write({ ...read(), music: on })
}

// { [fase]: { stars, best } }
export function getProgress() {
    const data = read()
    return (data.groups && data.groups[data.group || '']) || {}
}

export function saveResult(level, { stars, time }) {
    const data = read()
    const group = data.group || ''
    const groups = data.groups || {}
    const progress = groups[group] || {}
    const old = progress[level] || { stars: 0, best: null }
    const isBest = old.best === null || time < old.best
    progress[level] = { stars: Math.max(old.stars, stars), best: isBest ? time : old.best }
    groups[group] = progress
    write({ ...data, groups })
    return { isBest, previousBest: old.best }
}
