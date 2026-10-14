let fidelidade = prompt("Insira o nivel de fidelidade").toLowerCase();
let valor = +prompt("Insira o valor bruto da compra");
let valorFinal;

switch (fidelidade) {
  case "a":
    valorFinal = valor * 0.95;
    break;
  case "b":
    valorFinal = valor * 0.9;
    break;
  case "c":
    valorFinal = valor * 0.85;
    break;
  default:
    valorFinal = `inválido, coloque um código correto`;
}

alert(`Seu valor final é ${valorFinal}`);
