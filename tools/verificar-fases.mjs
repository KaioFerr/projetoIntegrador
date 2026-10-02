// Uso: npm run verificar-fases
// Simula a física do jogo (pulo, gravidade, pés, lasers e plataformas móveis) e confere se todos
// os painéis de cada fase podem ser alcançados. Rode depois de mudar src/js/levels.js.
import { LEVELS, GROUND_Y, miniWidth, groundEnd } from '../src/js/levels.js'
const FEET_L = 28, FEET_R = 52, EDGE = 9, H = 80, GRAV = 1.4, JUMP = -24, SPEED = 8
const SAMPLES = 9

function platformsOf(L) {
  const P = []
  L.chunks.forEach(c => P.push({ x: c[0], y: GROUND_Y, w: groundEnd(c) - c[0], edge: 0, kind: 'g' }))
  L.minis.forEach(([x, y, n]) => P.push({ x, y, w: miniWidth(n), edge: EDGE, kind: 'm' }))
  L.movers.forEach((m, mi) => {
    for (let k = 0; k < SAMPLES; k++) {
      const f = k / (SAMPLES - 1)
      P.push({ x: m.x + (m.dx || 0) * f, y: m.y + (m.dy || 0) * f, w: miniWidth(m.n), edge: EDGE, kind: 'v', mover: mi })
    }
  })
  return P
}

function check(L) {
  const P = platformsOf(L)
  const end = L.end
  const open = L.lasers.map(() => false)
  const solved = L.banners.map(() => false)
  const blocked = (oldX, newX) => {
    for (let i = 0; i < L.lasers.length; i++) {
      if (open[i]) continue
      const g = L.lasers[i].x
      const c0 = oldX + 40
      if (c0 < g && newX + FEET_R > g - 2) newX = g - 2 - FEET_R
      if (c0 > g && newX + FEET_L < g + 2) newX = g + 2 - FEET_L
    }
    return newX
  }
  const onTop = (px, pl) => px + FEET_R > pl.x + pl.edge && px + FEET_L < pl.x + pl.w - pl.edge
  const key = (pi, x) => pi + ':' + Math.round(x / 4)
  let changed = true, rounds = 0
  while (changed && rounds++ < 20) {
    changed = false
    const seen = new Set()
    const q = [[0, 100]]
    seen.add(key(0, 100))
    const push = (pi, x) => { const k = key(pi, x); if (!seen.has(k)) { seen.add(k); q.push([pi, x]) } }
    while (q.length) {
      const [pi, x] = q.pop()
      const pl = P[pi]
      // painéis alcançáveis daqui
      L.banners.forEach(([bx, by], bi) => {
        if (!solved[bi] && Math.abs(pl.y - (by + 60)) < 40 && Math.abs(x + 40 - (bx + 45)) < 75) { solved[bi] = true; changed = true }
      })
      // andar sobre a plataforma
      for (const d of [-6, 6]) {
        const nx = blocked(x, Math.max(0, Math.min(end - 80, x + d)))
        if (nx !== x && onTop(nx, pl)) push(pi, nx)
      }
      // andar na mesma plataforma móvel em outra posição
      if (pl.kind === 'v') P.forEach((o, oi) => { if (o.mover === pl.mover && oi !== pi) push(oi, x - pl.x + o.x) })
      // pulos e quedas
      for (const dir of [-1, 0, 1]) for (const jump of [true, false]) {
        if (!jump && dir === 0) continue
        let px = x, py = pl.y - H, vy = jump ? JUMP : 0
        for (let f = 0; f < 200; f++) {
          px = blocked(px, Math.max(0, Math.min(end - 80, px + dir * SPEED)))
          const prevBottom = py + H
          py += vy; vy += GRAV
          if (!jump && f === 0) { if (onTop(px, pl)) { py = pl.y - H; vy = 0; continue } }
          let landed = -1
          P.forEach((o, oi) => { if (landed < 0 && prevBottom <= o.y && py + H >= o.y && onTop(px, o) && !(oi === pi && f < 2 && jump)) landed = oi })
          if (landed >= 0 && (landed !== pi || f > 1)) { push(landed, px); break }
          if (py > 470) break
        }
      }
    }
    L.lasers.forEach((g, i) => { if (!open[i] && solved[g.panel]) { open[i] = true; changed = true } })
  }
  return { solved, open }
}

let ok = true
for (const L of LEVELS) {
  const { solved, open } = check(L)
  const miss = solved.map((s, i) => (s ? null : i)).filter(i => i !== null)
  const closed = open.map((s, i) => (s ? null : i)).filter(i => i !== null)
  if (miss.length || closed.length) ok = false
  console.log(`Fase ${L.id} (${L.name}): ${solved.filter(Boolean).length}/${L.banners.length} painéis` + (miss.length ? `  FALTAM painéis ${miss}` : '') + (closed.length ? `  lasers fechados ${closed}` : '') + `  | fim x=${L.end}`)
}
process.exit(ok ? 0 : 1)
