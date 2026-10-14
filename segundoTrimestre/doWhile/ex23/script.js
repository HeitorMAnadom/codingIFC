let horas;
let nome = prompt(`nome do funcionario`);
let salario;
let extras;
let valorExtra

do {
  horas = +prompt(`insira as horas trabalhadas`);
  if (horas <= 0 || horas >= 400) {
    alert(`Entrada inválida, insira um numero positivo menor que 400`);
  }
} while (horas < 0 || horas >= 50000)

if (horas > 160) {
  extras = (horas - 160)
  valorExtra = (horas - 160) * 15
} else {
  extras = 0
  valorExtra = 0
}

salario = (horas - extras) * 10

alert(`----${nome}----\n\nHoras extras:${extras}\nValor Total:R$${salario + valorExtra}`);