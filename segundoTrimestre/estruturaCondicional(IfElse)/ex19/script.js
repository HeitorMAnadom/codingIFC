let moeda = prompt("Insira a moeda").toLowerCase();
let real = +prompt("valor em real a ser convertido");
let valor;

switch (moeda) {
  case "d":
    valor = 5.6;
    break;
  case "e":
    valor = 6.45;
    break;
  case "l":
    valor = 7.55;
    break;
  case "p":
    valor = 0.005;
    break;
  default:
    tarifa = "inválida";
}

alert(`valor na sua moeda escolhida: $${(real / valor).toFixed(2)} `);
