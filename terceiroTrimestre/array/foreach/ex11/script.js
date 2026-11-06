let notas = [6, 8, 5, 9, 7, 4, 10, 6];
let passados = []

notas.forEach((pass) => {
    if (pass >= 7) {
        passados.push(pass)
    }
})

console.log(`${passados.length} alunos aprovados`)