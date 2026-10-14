let salario;
let desconto;

do {
  salario = +prompt(`Insira seu salario`);
  if (salario <= 0 || salario > 10000) {
    alert(`Entrada inválida, insira um salario positivo e menor que 10k`);
  }
} while (salario < 0 || salario >= 10000)

if (salario <= 1500) {
  salario = salario * 0.92
  desconto = salario * 0.08
} else if (salario > 1500 && salario <= 3500) {
  salario = salario * 0.90
  desconto = salario * 0.1
} else {
  salario = salario * 0.88
  desconto = salario * 0.12
}

alert(`Salario liquido:${salario.toFixed(2)}\nAliquota:${desconto.toFixed(2)}`);