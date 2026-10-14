let salario;
let financiamento;

do {
  salario = +prompt(`Insira seu salario`);
  financiamento = +prompt(`Insira seu financiamento desejado`);
  if (0 > financiamento >= 1000000 || 0 > salario >= 20000) {
    alert(
      `insira um valor válido\n\nsalário: deverá ser positivo e menor ou igual a R$ 20 mil.\nfinanciamento: deverá ser positivo e menor ou igual a R$ 1 milhão.`,
    );
  }
} while (0 > financiamento >= 1000000 || 0 > salario >= 20000);

if (financiamento >= (salario * 5)) {
  alert(`Financiamento negado`);
} else {
  alert(`Financiamento aprovado`);
}

alert(`Obrigado por nos consultar!`);
