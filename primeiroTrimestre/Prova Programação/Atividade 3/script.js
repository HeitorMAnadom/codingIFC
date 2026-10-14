let entregas = +prompt("Insira a quantidade de entregas");
let tempo = +prompt("insira o tempo médio por entrega em minutos");
let consumo = +prompt("consumo médio por entrega em litros");
let combustivel = +prompt("preço do combustivel");

let tempoTotal = (tempo * entregas) / 60;
let consumoTotal = consumo * entregas;
let custoTotal = consumoTotal * combustivel;
let custoEntrega = custoTotal / entregas;

alert(`Tempo total=${tempoTotal.toFixed(1)}\nConsumo Total das entregas=${consumoTotal.toFixed(3)}\nCusto total=R$${custoTotal.toFixed(2)}\nCusto por entrega=R$${custoEntrega.toFixed(2)}`);
