let notaProva = +prompt("insira a nota da prova tecnica");
let notaEntrevista = +prompt("insira a nota da entrevista");
let anosExp = +prompt("insira o tempo de experiencia em anos");
let media = (notaEntrevista + notaProva) / 2;
let situacao;

if (notaProva >= 8 && notaEntrevista >= 8 && anosExp >= 2) {
  situacao = "Voce foi contratado"
} else if (media >= 7 && anosExp >= 1) {
  situacao = "Banco de talentos"
} else {
  situacao = "reprovado"
}

alert(`${situacao}\nMédia:${media}`);
