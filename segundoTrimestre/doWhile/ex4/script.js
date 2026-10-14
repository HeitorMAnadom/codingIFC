let nVendas = parseInt(prompt("Insira o numero de vendas"));

let minimo = 1;
let vendas = 0;
let valorTotal = 0;
let valorIndiv = 0;

do {
  vendas++;
  minimo++;
  valorIndiv = +prompt(`Insira o valor da venda ${vendas}`);
  valorTotal += valorIndiv;
} while (minimo <= nVendas);

alert(
  `Media de valor: R$${valorTotal / nVendas}\nSoma das vendas: R$${valorTotal}`,
);