let nota1 = +prompt("insira a nota1");
let nota2 = +prompt("insira a nota2");
let situacao;
let media = (nota1 + nota2) / 2;

if (media < 5) {
  situacao = "reprovado";
} else if (media < 7) {
  situacao = "recuperação";
} else {
  situacao = "aprovado";
}

alert(`situação:${situacao}\nMédia final:${media}`);
