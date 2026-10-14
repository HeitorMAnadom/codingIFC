let regiao = prompt("regiao").toLowerCase();
let valor;

switch (regiao) {
  case "s":
    valor = 20;
    break;
  case "n":
    valor = 45;
    break;
  case "se":
    valor = 25;
    break;
  case "co":
    valor = 35;
    break;
  case "ne":
    valor = 40;
    break;
  default:
    alert(`codigo invalido`);
}

alert(`frete: R$${valor.toFixed(2)}`);
