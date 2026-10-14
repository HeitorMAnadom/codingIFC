let operacao = prompt(`Insira a operação`);
let resultado;

do {
  if (operacao != `+` && operacao != `-` && operacao != `/` && operacao != `*`) {
    alert(`Insira uma operacao valida`)
  }
} while (operacao != `+` && operacao != `-` && operacao != `/` && operacao != `*`)

let valor1 = +prompt(`valor1`);
let valor2 = +prompt(`valor2`);

switch (operacao) {
  case `+`:
    resultado = valor1 + valor2
    break
  case `-`:
    resultado = valor1 - valor2
    break
  case `/`:
    resultado = valor1 / valor2
    break
  case `*`:
    resultado = valor1 * valor2
    break
  default:
    operacao
    break
}

alert(`${valor1} ${operacao} ${valor2} = ${resultado}`);