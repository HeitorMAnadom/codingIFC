let saldo = 0;
let movimentacoes = [250, -80, -35, 120, -60, 90];
let negativos = 0;
let positivos = 0;

movimentacoes.forEach((withdraws) => {
    saldo = saldo + withdraws
    if (withdraws > 0) {
        positivos++
    } else {
        negativos++
    }
});

console.log(`${negativos} retiradas, ${positivos} depositos\nsaldo: ${saldo}`);