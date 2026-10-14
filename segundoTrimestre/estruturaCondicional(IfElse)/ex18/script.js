let setor = prompt("Insira o setor").toLowerCase();
let qtdIngresso = +prompt("qtd de ingressos");
let valor;

switch (setor) {
  case "a":
    valor = 90;
    break;
  case "b":
    valor = 150;
    break;
  case "c":
    valor = 250;
    break;
  case "d":
    valor = 400;
    break;
  default:
    tarifa = "inválida";
}

alert(`valor total: R$${(valor * qtdIngresso).toFixed(2)} `);
