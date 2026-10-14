let nAlunos = parseInt(prompt("Insira o numero de alunos"));

let minimo = 1;
let aluno = 0;
let alturaTotal = 0;
let alturaIndv = 0;

do {
  aluno++;
  minimo++;
  alturaIndv = +prompt(`Insira a altura do aluno ${aluno}(em metros)`);
  alturaTotal += alturaIndv;
} while (minimo <= nAlunos);

alert(
  `Media da turma: ${(alturaTotal / nAlunos).toFixed(2)}\nSoma das alturas; ${alturaTotal}`,
);
