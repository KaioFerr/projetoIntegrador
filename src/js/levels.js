// Definição das 8 fases. Cada fase tem seu próprio mapa:
//   ground:  trechos de chão [x inicial, blocos]; entre eles fica o vazio de néon
//   minis:   plataformas pequenas [x, y, blocos]
//   movers:  plataformas que se movem { x, y, n, dx, dy, period } (vai e volta; period em quadros)
//   panels:  painéis [E] { m: índice da mini onde ficam } ou { g: x no chão }
//   lasers:  barreiras { x, panel: índice do painel que desliga o laser }
//   math:    tipos de conta (ver math.js)

export const GROUND_Y = 452
export const GROUND_STEP = 589 // largura da textura do chão (592) menos a sobreposição
export const GROUND_TILE_W = 592
export const MINI_STEP = 48
export const MINI_W = 64
export const MINI_H = 16
export const BANNER_W = 90
export const BANNER_H = 60

export const miniWidth = n => MINI_W + (n - 1) * MINI_STEP
export const groundEnd = ([x, n]) => x + (n - 1) * GROUND_STEP + GROUND_TILE_W

const DEFS = [
    {
        name: 'Soma até 10', icon: 'plus', goal: 100,
        math: [{ k: 'add', max: 10 }],
        ground: [[0, 2], [1400, 2], [2800, 2]],
        minis: [[850, 320, 4], [1150, 200, 3], [1950, 330, 3], [2200, 220, 3], [3050, 330, 4], [3350, 220, 3], [3650, 120, 3]],
        panels: [{ g: 500 }, { m: 0 }, { m: 1 }, { g: 1700 }, { m: 3 }, { m: 6 }]
    },
    {
        name: 'Subtração até 10', icon: 'minus', goal: 120,
        math: [{ k: 'sub', max: 10 }],
        ground: [[0, 2], [1450, 2], [2900, 2]],
        minis: [[700, 320, 4], [1150, 330, 3], [1650, 300, 4], [1950, 190, 3], [2700, 340, 2], [3300, 350, 3], [3500, 260, 3]],
        panels: [{ g: 450 }, { m: 0 }, { m: 2 }, { m: 3 }, { g: 3150 }, { m: 6 }],
        lasers: [{ x: 1000, panel: 1 }, { x: 2400, panel: 3 }]
    },
    {
        name: 'Soma até 20', icon: 'plus', goal: 160,
        math: [{ k: 'add', max: 20 }],
        ground: [[0, 2], [1700, 2], [3300, 2], [4800, 1]],
        minis: [[400, 320, 4], [750, 210, 3], [1950, 320, 3], [2250, 210, 3], [2550, 100, 3], [3950, 300, 3], [4560, 340, 3], [5000, 300, 4]],
        movers: [{ x: 1220, y: 400, n: 3, dx: 300, period: 240 }, { x: 2920, y: 380, n: 3, dx: 220, period: 220 }],
        panels: [{ m: 0 }, { m: 1 }, { g: 1000 }, { m: 2 }, { m: 3 }, { m: 4 }, { g: 3700 }, { m: 7 }]
    },
    {
        name: 'Subtração até 20', icon: 'minus', goal: 170,
        math: [{ k: 'sub', max: 20 }],
        ground: [[0, 3], [2000, 2], [3400, 3]],
        minis: [[800, 320, 3], [1300, 60, 4], [1600, 150, 3], [2200, 300, 4], [2550, 190, 3], [3950, 80, 3], [4300, 200, 3]],
        movers: [{ x: 1100, y: 380, n: 3, dy: -320, period: 300 }, { x: 3700, y: 380, n: 3, dy: -300, period: 280 }],
        panels: [{ g: 500 }, { m: 0 }, { m: 1 }, { m: 2 }, { m: 3 }, { m: 4 }, { m: 5 }, { g: 4700 }],
        lasers: [{ x: 2900, panel: 5 }]
    },
    {
        name: 'Mistas', icon: 'plusminus', goal: 190,
        math: [{ k: 'add', max: 20 }, { k: 'sub', max: 20 }],
        ground: [[0, 2], [1600, 2], [3100, 2], [4700, 2]],
        minis: [[350, 320, 3], [650, 210, 3], [2100, 300, 3], [2400, 190, 3], [2860, 330, 3], [3350, 320, 4], [3900, 100, 3], [5000, 300, 3]],
        movers: [
            { x: 1220, y: 360, n: 3, dx: 220, period: 200 },
            { x: 3700, y: 380, n: 3, dy: -280, period: 260 },
            { x: 4320, y: 380, n: 3, dx: 220, period: 200 }
        ],
        panels: [{ m: 0 }, { m: 1 }, { g: 1800 }, { m: 2 }, { m: 3 }, { m: 5 }, { m: 6 }, { m: 7 }],
        lasers: [{ x: 1000, panel: 1 }, { x: 2700, panel: 4 }]
    },
    {
        name: 'Número que falta', icon: 'target', goal: 190,
        math: [{ k: 'missing', max: 20 }],
        ground: [[0, 3], [2050, 3], [4100, 2]],
        minis: [[300, 350, 2], [470, 260, 2], [640, 170, 3], [900, 250, 3], [1850, 350, 2], [2300, 300, 3], [2600, 190, 3], [2900, 90, 3], [3250, 250, 3], [3900, 340, 2], [4350, 320, 3], [4650, 210, 3]],
        panels: [{ m: 2 }, { m: 3 }, { g: 1300 }, { m: 5 }, { m: 6 }, { m: 7 }, { m: 10 }, { m: 11 }],
        lasers: [{ x: 1600, panel: 2 }, { x: 3600, panel: 5 }]
    },
    {
        name: 'Dezenas e trios', icon: 'calc', goal: 200,
        math: [{ k: 'tens' }, { k: 'three' }],
        ground: [[0, 2], [1700, 2], [3400, 3]],
        minis: [[750, 300, 3], [1950, 320, 3], [2450, 60, 3], [2700, 180, 3], [4200, 300, 3], [4550, 190, 3]],
        movers: [
            { x: 1220, y: 380, n: 3, dx: 320, period: 260 },
            { x: 2250, y: 380, n: 3, dy: -320, period: 260 },
            { x: 2920, y: 380, n: 3, dx: 320, period: 260 }
        ],
        panels: [{ g: 450 }, { m: 0 }, { m: 1 }, { m: 2 }, { m: 3 }, { g: 3700 }, { m: 4 }, { m: 5 }],
        lasers: [{ x: 3950, panel: 5 }]
    },
    {
        name: 'Desafio final', icon: 'trophy', goal: 280,
        math: [{ k: 'add', max: 50 }, { k: 'sub', max: 50 }, { k: 'missing', max: 30 }, { k: 'tens' }],
        ground: [[0, 2], [1650, 2], [3250, 2], [4900, 2], [6500, 2]],
        minis: [[350, 320, 3], [650, 200, 3], [2300, 70, 3], [2600, 190, 3], [2900, 330, 2], [3100, 280, 2], [3500, 300, 3], [3800, 190, 3], [5600, 60, 3], [6900, 280, 3]],
        movers: [
            { x: 1220, y: 370, n: 3, dx: 270, period: 220 },
            { x: 2100, y: 380, n: 3, dy: -310, period: 260 },
            { x: 4470, y: 360, n: 3, dx: 270, period: 200 },
            { x: 5400, y: 380, n: 3, dy: -320, period: 260 },
            { x: 6120, y: 380, n: 3, dx: 220, period: 200 }
        ],
        panels: [{ m: 0 }, { m: 1 }, { g: 1850 }, { m: 2 }, { m: 3 }, { m: 6 }, { m: 7 }, { g: 5100 }, { m: 8 }, { m: 9 }],
        lasers: [{ x: 1050, panel: 1 }, { x: 2750, panel: 4 }, { x: 5950, panel: 8 }]
    }
]

function buildLevel(def, i) {
    const minis = def.minis
    // painel em cima da mini (centralizado) ou no chão
    const banners = def.panels.map(p => {
        if (p.g !== undefined) return [p.g, GROUND_Y - BANNER_H + 2]
        const [x, y, n] = minis[p.m]
        return [Math.round(x + (miniWidth(n) - BANNER_W) / 2), y - BANNER_H + 2]
    })
    return {
        id: i + 1,
        name: def.name,
        icon: def.icon,
        goal: def.goal,
        math: def.math,
        chunks: def.ground,
        minis,
        movers: def.movers || [],
        lasers: def.lasers || [],
        banners,
        end: groundEnd(def.ground[def.ground.length - 1])
    }
}

export const LEVELS = DEFS.map(buildLevel)
