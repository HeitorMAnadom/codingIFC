let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
let pares = []
let impares = []

numeros.forEach((analise) => {
    if (analise %2 === 0) {
        pares.push(analise)
    } else {
        impares.push(analise)
    }
});

console.log(`pares: ${pares}\nImpares: ${impares}`)