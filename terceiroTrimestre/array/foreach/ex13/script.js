let precos = [50, 80, 120, 40, 200];
let valor = []

precos.forEach((desconto) => {
    desconto = desconto * 0.90
    valor.push(desconto)
})

console.log(`valores cm deconto de 10% ${valor.toFixed(2)}`)