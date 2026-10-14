let nAlunos = parseInt(prompt("Insira o numero de alunos"));

let minimo = 1;
let aluno = 0;
let notaTotal = 0;
let mediaIndv = 0;

do {
  aluno++;
  minimo++;
  mediaIndv = +prompt(`Insira a media do aluno ${aluno}`);
  notaTotal += mediaIndv;
} while (minimo <= nAlunos);

alert(`Media da turma: ${notaTotal / nAlunos}\nSoma das notas; ${notaTotal}`);
