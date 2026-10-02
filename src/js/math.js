const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Tipos de conta usados nas fases:
//   add (soma), sub (subtração), missing (número que falta), tens (dezenas), three (três números)
// t vai de 0 (primeira conta da fase) a 1 (última): os números crescem ao longo da fase.
// lo evita contas fáceis demais nas fases com números grandes (até 10 continua começando do 1).
const lo = cap => Math.max(1, Math.floor(cap / 4))
const GEN = {
    add({ max }, t) {
        const cap = Math.max(4, Math.round(max * (0.5 + 0.5 * t)))
        const a = rand(lo(cap), cap - 1)
        const b = rand(Math.min(lo(cap), cap - a), cap - a)
        return { a, b, result: a + b, display: `${a} + ${b} = ?` }
    },
    sub({ max }, t) {
        const cap = Math.max(4, Math.round(max * (0.5 + 0.5 * t)))
        const a = rand(Math.max(2, lo(cap) * 2), cap)
        const b = rand(Math.min(lo(cap), a), a)
        return { a, b, result: a - b, display: `${a} − ${b} = ?` }
    },
    // 7 + ? = 12  ou  15 − ? = 9
    missing({ max }, t) {
        const cap = Math.max(5, Math.round(max * (0.5 + 0.5 * t)))
        if (Math.random() < 0.5) {
            const c = rand(Math.max(3, lo(cap) * 2), cap)
            const a = rand(1, c - 1)
            return { a, b: c, sign: '+', result: c - a, display: `${a} + ? = ${c}` }
        }
        const a = rand(Math.max(3, lo(cap) * 2), cap)
        const x = rand(1, a - 1)
        return { a, b: a - x, sign: '-', result: x, display: `${a} − ? = ${a - x}` }
    },
    // dezenas inteiras: 30 + 40, 80 − 50
    tens(_, t) {
        const top = 5 + Math.round(4 * t)
        if (Math.random() < 0.5) {
            const a = rand(1, top - 1) * 10
            const b = rand(1, top - a / 10) * 10
            return { a, b, sign: '+', result: a + b, display: `${a} + ${b} = ?` }
        }
        const a = rand(2, top) * 10
        const b = rand(1, a / 10 - 1) * 10
        return { a, b, sign: '-', result: a - b, display: `${a} − ${b} = ?` }
    },
    // 3 + 4 + 2
    three(_, t) {
        const top = 3 + Math.round(6 * t)
        const [a, b, c] = [rand(1, top), rand(1, top), rand(1, top)]
        return { a, b, c, result: a + b + c, display: `${a} + ${b} + ${c} = ?` }
    }
}

// Gera uma conta para a fase: { kind, display, result, ... }
export function createQuestion(kinds, t = 0) {
    const spec = kinds[rand(0, kinds.length - 1)]
    return { kind: spec.k, ...GEN[spec.k](spec, t) }
}

export function hintFor(q) {
    switch (q.kind) {
        case 'add': return `Dica: comece no ${q.a} e conte mais ${q.b}.`
        case 'sub': return `Dica: comece no ${q.a} e volte ${q.b}.`
        case 'missing':
            return q.sign === '+'
                ? `Dica: quanto falta do ${q.a} até chegar no ${q.b}?`
                : `Dica: do ${q.a}, quanto tirar para sobrar ${q.b}?`
        case 'tens': return `Dica: conte as dezenas: ${q.a / 10} ${q.sign === '+' ? '+' : '−'} ${q.b / 10} e ponha um zero no fim.`
        case 'three': return `Dica: some ${q.a} + ${q.b} primeiro e depois mais ${q.c}.`
    }
    return ''
}

// nomes e ícones de cada tipo, para a tela de resultados e a escolha de fase
export const KIND_INFO = {
    add: { name: 'Soma', icon: 'plus' },
    sub: { name: 'Subtração', icon: 'minus' },
    missing: { name: 'Número que falta', icon: 'target' },
    tens: { name: 'Dezenas', icon: 'calc' },
    three: { name: 'Três números', icon: 'sparkle' }
}
