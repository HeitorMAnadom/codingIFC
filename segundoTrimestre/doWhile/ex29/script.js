let ipi;
let codigo1;
let valor1;
let qtd1;
let codigo2;
let valor2;
let qtd2;
let valorTotal1;
let valorTotal2;
let erro = "n"bbb;

do {
  erro = "n";
  ipi = +prompt(`imposto`); ///100+1
  codigo1 = +prompt(`codigo1`);
  valor1 = +prompt(`valor1`);
  qtd1 = +prompt(`qtd1`);
  codigo2 = +prompt(`codigo2`);
  valor2 = +prompt(`valor2`);
  qtd2 = +prompt(`qtd2`);
  if (ipi > 100 || ipi < 0) {
    alert(`O ipi deve ser positivo e menor que 100%`);
    erro = "s";
  }
  if (valor1 < 1 || valor1 > 50.0 || valor2 > 50.0 || valor2 < 1) {
    alert(`valor deve ser maior que 1 e menor = a 500`);
    erro = "s";
  }
  if (valor1 < 1 || valor1 > 500 || valor1 < 1 || valor1 > 500) {
    alert(`qtd deve ser maior que zero e menor = a 500`);
    erro = "s";
  }
} while (erro == "s");

ipi = ipi / 100 + 1;

valor1 = valor1 * ipi;
valor2 = valor2 * ipi;

valorTotal1 = valor1 * qtd1;
valorTotal2 = valor2 * qtd2;

alert(
  `Peça n${codigo1}, ${qtd1}unidades = R$${valorTotal1}\nPeça n${codigo2}, ${qtd2}unidades = R$${valorTotal2}`,
);
