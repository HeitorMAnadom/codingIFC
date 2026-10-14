let qtdClientes = 0;
let nome;
let consumo;
let valor;
let countCamelo = 0;
let valorTotal = 0;
let continuar;

do {
  nome = prompt(`insira seu nome`);
  do {
    consumo = +prompt(`insira o consumo de agua em m*m*m`);
    if (consumo < 0 || consumo > 200) {
      alert(`o consumo deve ser positivo e menor q 200`);
    }
  } while (consumo < 0 || consumo > 200);

  if (consumo <= 20) {
    valor = consumo * 5;
  } else if (consumo <= 50) {
    if (consumo >= 20) {
      valor = (consumo - 20) * 9 + 100;
    } else {
      valor = consumo * 5;
    }
  } else {
    valor = (consumo - 50) * 15 + 370;
    countCamelo++;
  }

  qtdClientes++;
  valorTotal = valorTotal + valor;

  alert(`---${nome}---\nConsumo:${consumo}\nValor:R$${valor.toFixed(2)}`);

  do {
    continuar = prompt(`continuar?`).toLowerCase();
    if (continuar != `s` && continuar != `n`) {
      alert(`insira s ou n`);
    }
  } while (continuar !== `s` && continuar !== `n`);
} while (continuar == `s`);

let p100Camelo = (countCamelo / qtdClientes) * 100;

alert(
  `Valor médio:R$${(valorTotal / qtdClientes).toFixed(2)}\nValor mais recente:R$${valor.toFixed(2)}\nporcentagem de pessoas na terceira faixa:${p100Camelo.toFixed(1)}%`,
);
