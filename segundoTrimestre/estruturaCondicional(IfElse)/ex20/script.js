let cargo = parseInt(prompt("cargo"));
let horas = +prompt("horas trabalhadas");

let valor;

switch (cargo) {
  case 1:
    valor = 35;
  case 2:
    valor = 55;
  case 3:
    valor = 80;
  case 4:
    valor = 95;
  case 5:
    valor = 130;
    break;
  default:
    alert("código inválido");
}

alert(`salario: R$${(valor * horas).toFixed(2)}`);
