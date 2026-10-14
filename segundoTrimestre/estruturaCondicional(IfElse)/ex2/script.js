let numero1 = +prompt("Insira o primeiro numero");
let operacao = prompt("Insira a operação");
let numero2 = +prompt("Insira o segundo numero");

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  default:
    resultado = "Invalido";
}

alert(`Resultado: ${resultado}`);
