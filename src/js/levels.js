// Definição das 4 fases. Todas reaproveitam o mapa original, cortado em tamanhos diferentes.

export const GROUND_Y = 452
export const GROUND_STEP = 589 // largura da textura do chão (592) menos a sobreposição
export const GROUND_TILE_W = 592
export const MINI_STEP = 48
export const MINI_W = 64
export const MINI_H = 16
export const BANNER_W = 90
export const BANNER_H = 60

// [x inicial, quantidade de blocos]
const GROUND = [
    [-1, 3],
    [2000, 2],
    [3800, 2],
    [5600, 2],
    [7700, 2],
    [10230, 2]
]

// [x, y, quantidade de blocos]
const MINIS = [
    [500, 300, 4], [800, 400, 4], [1000, 300, 4], [1300, 200, 4],
    [2000, 100, 4], [2300, 160, 4], [2300, 400, 4], [2600, 300, 4],
    [3300, 350, 2], [3500, 300, 4], [4200, 300, 4], [4200, 100, 4],
    [5050, 400, 2], [5200, 300, 2], [5350, 200, 2], [5800, 350, 4],
    [5550, 100, 3], [5800, 200, 1], [6000, 200, 1], [6200, 200, 3],
    [6400, 200, 4], [6800, 350, 4], [7100, 200, 2], [7300, 200, 2],
    [7500, 200, 2], [7800, 350, 4], [8600, 400, 2], [8800, 300, 2],
    [9000, 200, 2], [8800, 100, 2], [8600, 80, 3], [9300, 200, 2],
    [9600, 200, 2], [9900, 200, 2], [10150, 200, 4]
]

// [x, y] dos banners [E], sempre em cima de uma miniplataforma
const BANNERS = [
    [580, 240], [1060, 242], [1380, 144], [2024, 44], [2380, 102],
    [2680, 242], [3560, 242], [4280, 42], [5210, 242], [5580, 44],
    [5860, 292], [6480, 146], [6860, 292], [7120, 142], [7860, 292],
    [8640, 20], [8840, 242], [9020, 142], [10230, 144]
]

const CONTAS_POR_FASE = 8

const groundEnd = ([x, n]) => x + (n - 1) * GROUND_STEP + GROUND_TILE_W

// escolhe n itens bem espalhados de uma lista ordenada
function spread(list, n) {
    if (list.length <= n) return list
    const out = []
    for (let i = 0; i < n; i++) out.push(list[Math.round(i * (list.length - 1) / (n - 1))])
    return out
}

// Tipos de conta: { ops, min, max } e regras específicas em math.js
export const LEVELS = [
    { id: 1, name: 'Soma', chunks: 3, goal: 120, math: { ops: ['+'], max: 9 } },
    { id: 2, name: 'Subtração', chunks: 4, goal: 150, math: { ops: ['-'], max: 18 } },
    { id: 3, name: 'Mistas', chunks: 5, goal: 180, math: { ops: ['+', '-'], max: 20 } },
    { id: 4, name: 'Desafio', chunks: 6, goal: 240, math: { ops: ['+', '-'], max: 50 } }
].map(buildLevel)

function buildLevel(def) {
    const chunks = GROUND.slice(0, def.chunks)
    const end = groundEnd(chunks[chunks.length - 1])
    const minis = MINIS.filter(([x]) => x + MINI_W < end)
    const banners = spread(BANNERS.filter(([x]) => x + BANNER_W < end), CONTAS_POR_FASE)
    return { ...def, end, chunks, minis, banners }
}
