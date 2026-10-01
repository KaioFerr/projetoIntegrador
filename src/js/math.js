const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Gera uma conta de acordo com a fase: { text, result, op }
export function createQuestion({ ops, max }) {
    const op = ops[rand(0, ops.length - 1)]
    let a, b
    if (op === '+') {
        a = rand(1, max)
        b = rand(1, max)
    } else {
        a = rand(2, max)
        b = rand(1, Math.min(a, max))
    }
    const result = op === '+' ? a + b : a - b
    return { a, b, op, result, text: `${a} ${op === '-' ? '−' : '+'} ${b}` }
}

export function hintFor({ a, b, op }) {
    return `Dica: comece por ${a} e ${op === '+' ? 'some' : 'tire'} ${b} aos poucos.`
}
