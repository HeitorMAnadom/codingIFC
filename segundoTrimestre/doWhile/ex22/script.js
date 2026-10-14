let salario;
let reajuste

do {
  salario = +prompt(`Insira seu salario`);
  if (salario <= 0 || salario >= 50000) {
    alert(`Entrada inválida, insira um salario positivo e menor ou igual a 50k`)
  }
} while (salario < 0 || salario >= 50000)

if (salario <= 2000) {
  reajuste = `15%`
  salario = salario * 1.15
} else if (salario > 2000 && salario <= 4000) {
  reajuste = `10%`
  salario = salario * 1.10
} else if (salario > 4000){
  reajuste = `5%`
  salario = salario * 1.05
}

alert(`Salario novo: R$${salario}\nReajuste:${reajuste}`);