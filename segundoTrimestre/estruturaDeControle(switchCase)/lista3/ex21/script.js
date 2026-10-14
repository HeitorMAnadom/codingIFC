let salario = +prompt("insira seu salario");
let valorPrestacao = +prompt("insira o valor da prestação");
let anos = +prompt("tempo de emprego em anos");

let situacao;
let p100 = (valorPrestacao / salario) * 100;

if ((salario*0.3) > valorPrestacao && anos >= 2) {
  situacao = "Financiamento aprovado!";
} else {
  situacao = "Seu financiamento foi negado";
}

alert(`${situacao}\nPercentual comprometido:${p100}%`);

