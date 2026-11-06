let precos = [29.90, 45.50, 119.90, 79.90, 25.00];
let soma = 0

precos.forEach ((preco) => {
    soma = soma + preco
})

let media = soma / (precos.length)

console.log(media.toFixed(2))