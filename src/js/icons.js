// Ícones em SVG (traço arredondado, herdam a cor do texto). Uso: icon('clock') ou <span data-icon="clock">
const S = 'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"'
const F = 'fill="currentColor" stroke="none"'

const PATHS = {
    clock: [S, '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'],
    heart: [F, '<path d="M12 20.8C5 15.6 3 12.2 3 8.9 3 6.3 5 4.5 7.4 4.5c1.8 0 3.2 1 4.6 2.8 1.4-1.8 2.8-2.8 4.6-2.8C19 4.5 21 6.3 21 8.9c0 3.3-2 6.7-9 11.9z"/>'],
    flag: [S, '<path d="M6 21V4"/><path d="M6 5h12l-3 4 3 4H6"/>'],
    calc: [S, '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8"/><circle cx="9" cy="13" r=".8" fill="currentColor"/><circle cx="15" cy="13" r=".8" fill="currentColor"/><circle cx="9" cy="17" r=".8" fill="currentColor"/><circle cx="15" cy="17" r=".8" fill="currentColor"/>'],
    check: [S, '<path d="M5 12.5l4.5 4.5L19 7.5"/>'],
    cross: [S, '<path d="M6 6l12 12M18 6L6 18"/>'],
    fall: [S, '<path d="M12 3v11"/><path d="M7.5 10L12 14.5 16.5 10"/><path d="M4 20h16"/>'],
    target: [S, '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>'],
    trophy: [S, '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5v2a3 3 0 0 0 3 3"/><path d="M16 6h3v2a3 3 0 0 1-3 3"/><path d="M12 13v4"/><path d="M8.5 20h7"/>'],
    star: [F, '<path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.4 6.6L12 17.2 6 20.6l1.4-6.6L2.5 9.4l6.6-.7z"/>'],
    play: [F, '<path d="M8 4.8l11.5 7.2L8 19.2z"/>'],
    retry: [S, '<path d="M20 11.5a8 8 0 1 0-2.4 5.9"/><path d="M20.5 4v7.5H13"/>'],
    exit: [S, '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><path d="M10 8l-4 4 4 4"/><path d="M6 12h10"/>'],
    home: [S, '<path d="M4 11.5L12 4l8 7.5"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>'],
    next: [S, '<path d="M5 12h13"/><path d="M13 6l6 6-6 6"/>'],
    pause: [F, '<rect x="6" y="4.5" width="4.2" height="15" rx="1.2"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1.2"/>'],
    plus: [S, '<path d="M12 5v14M5 12h14"/>'],
    minus: [S, '<path d="M5 12h14"/>'],
    plusminus: [S, '<path d="M8 3.5v9M3.5 8h9"/><path d="M13 19h8"/><path d="M19 5L6 19"/>'],
    lock: [S, '<rect x="5" y="11" width="14" height="9.5" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'],
    left: [S, '<path d="M15 5l-7 7 7 7"/>'],
    right: [S, '<path d="M9 5l7 7-7 7"/>'],
    up: [S, '<path d="M5 15l7-7 7 7"/>'],
    backspace: [S, '<path d="M21 5H9l-6 7 6 7h12z"/><path d="M12.5 9.5l5 5M17.5 9.5l-5 5"/>'],
    users: [S, '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2c2.7.2 4.5 2.3 4.5 5.3"/>'],
    fullscreen: [S, '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'],
    rotate: [S, '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>'],
    runner: [S, '<circle cx="14" cy="4.5" r="2"/><path d="M8 21l3.5-6 3 .5L16 21"/><path d="M11.5 15l-1-5 4.5-1 2 3.5 3 .5"/><path d="M10.5 10L7 11.5"/>'],
    sound: [S, '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>'],
    mute: [S, '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>'],
    music: [S, '<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>'],
    'music-off': [S, '<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/><path d="M3 3l18 18"/>'],
    sparkle: [F, '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z"/>']
}

export function icon(name, size) {
    const p = PATHS[name]
    if (!p) return ''
    const dim = size ? ` width="${size}" height="${size}"` : ''
    return `<svg class="ico" viewBox="0 0 24 24"${dim} ${p[0]} aria-hidden="true">${p[1]}</svg>`
}

// troca <span data-icon="nome"> pelo SVG correspondente
export function hydrateIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach(el => {
        el.innerHTML = icon(el.dataset.icon)
        el.removeAttribute('data-icon')
        el.classList.add('icon-slot')
    })
}
