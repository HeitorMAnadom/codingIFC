let temperaturas = [18, 22, 16, 25, 19, 27, 21];
let maior = 0
let menor = 9999
temperaturas.forEach((temps) => {
    if (temps > maior) {
        maior = temps;
    }
    if (temps < menor) {
        menor = temps
    } 
})

console.log (`minima: ${menor}\nmaxima: ${maior}`)

/*vicenzo's*/

console.log(`Maior: ${Math.max(...temperaturas)}\n
menor ${Math.min(...temperaturas)}`)