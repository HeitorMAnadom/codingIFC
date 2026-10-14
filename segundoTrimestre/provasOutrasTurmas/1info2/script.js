let qtdClientes = 0;
let continuar;
let nome;
let desperdicio;
let onus;
let countEficiente = 0;
let bonus;
let bonusTotal;

do {
  nome = prompt(`insira o nome`);

  do {
    desperdicio = +prompt(`insira o disperdicio em kg`);
    if (desperdicio < 0 || desperdicio > 60) {
      alert(`insira desperdicio valido`);
    }
  } while (desperdicio < 0 || desperdicio > 60);

  if (desperdicio <= 10) {
    onus = 15 * desperdicio;
    countEficiente++;
  } else if (desperdicio <= 25) {
    onus = 25 * desperdicio;
  } else {
    onus = desperdicio * 40 + 200;
  }

  qtdClientes++;
  bonus = 1200 - onus;
  bonusTotal = bonusTotal + bonus;

  alert(`---${nome}---\nBonus liquido:R$${(1200 - onus).toFixed(2)}`);

  do {
    continuar = prompt(`continuar?`);
    if (continuar != `s` && continuar != `n`) {
      alert(`s ou n`);
    }
  } while (continuar != `s` && continuar != `n`);
} while ((continuar = `s`));

let p100Eficiente = (countEficiente / qtdClientes) * 100;

alert(
  `bonus médio:R$${(bonusTotalTotal / qtdClientes).toFixed(2)}\nValor mais recente:R$${bonus.toFixed(2)}\nporcentagem de pessoas na terceira faixa:${p100Eficiente.toFixed(1)}%`,
);
