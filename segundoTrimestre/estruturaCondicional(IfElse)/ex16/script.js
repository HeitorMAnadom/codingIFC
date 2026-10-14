let plano = prompt("plano").toLowerCase();
let meses = +prompt("Meses de hospedagem");
let valor;

switch (plano) {
  case "b":
    plano = basico
    valor = 39.9;
    break;
  case "p":
    plano = premium
    valor = 69.9;
    break;
  case "e":
    plano = empresarial
    valor = 119.9;
    break;
  default:
    alert(`codigo invalido`);
}

let valorTotal = valor * meses;

alert(
  `valor total: R$${valorTotal.toFixed(2)}\nPlano: ${plano}\nValor mensal: ${valor}\nMses: ${meses}`,
);
