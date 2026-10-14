// 23) Elabore um programa em Javascript que receba o nome e número de horas trabalhadas de um operário. Feito isso,
// calcule seu salário sabendo que ele ganha R$ 10,00 por hora. Quando o número de horas exceder a 160, calcule o excesso de
// pagamento numa variável, caso contrário zerar tal variável. A hora excedente de trabalho vale R$ 15,00. No final do
// processamento
// apresentar o salário final.
// ● Controle de entrada com mensagem de erro: o número de horas deverá ser positivo e inferior a 400 horas.

// Exemplo de prova:
// Faça um laço principal para ler N empregados

// Calcular e apresentar a média dos salários finais

// Calcular e apresentar o percentual de salários finais acima de R$ 5 mil

// Controle de entrada do laço principal: o usuário deverá responder apenas sim ou não para a pergunta
// "Deseja informar outro empregado?"

let nome;
let horas;
let salario;
let salarioTotal = 0;
let contMaiorQ5k = 0;
let mediaSalarios = 0;
let empregados = 0;
let excesso;
let horaExtra;

let addOutro;

do {
  do {
    nome = prompt(`Insira nome`);
    horas = +prompt(`horas`);
    if (horas < 0 || horas >= 400) {
      alert(`o numero de horas devera ser positivo e inferior a 400 horas.`);
    }
  } while (horas < 0 || horas >= 400);

  if (horas > 160) {
    horaExtra = horas - 160;
    excesso = horaExtra * 15;
    salario = 1600 + excesso;
  } else {
    salario = horas * 10;
    horaExtra = 0;
    excesso = 0;
  }

  empregados++;
  salarioTotal = salarioTotal + salario;

  if (salario > 5000) {
    contMaiorQ5k++;
  }

  alert(
    `-----${nome}-----\nSalario: R$${salario.toFixed(2)}\nHoras Extras:${horaExtra}`,
  );

  do {
    addOutro = prompt(`Deseja adicionar outro empregado?`).toLowerCase();
    if (addOutro != `nao` && addOutro != `sim`) {
      alert(`Comando inválido, insira apenas sim ou nao, sem acento`);
    }
  } while (addOutro != `nao` && addOutro != `sim`);
} while (addOutro == `sim`);

alert(
  `Empregados totais:${empregados}\nMédia Salarial:R$${(salarioTotal / empregados).toFixed(2)}\n
Salarios > 5k:${(contMaiorQ5k / empregados) * 100}`,
);
