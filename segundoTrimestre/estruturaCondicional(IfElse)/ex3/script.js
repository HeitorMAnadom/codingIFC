let periodo = prompt("Insira o periodo").toUpperCase();
let saudacao;

switch (periodo) {
  case "M":
    saudacao = "Bom Dia!";
    break;
  case "T":
    saudacao = "Boa Tarde!";
    break;
  case "N":
    saudacao = "Boa Noite!";
    break;
  default:
    saudacao = "Periodo inválido";
    break;
}

alert(saudacao);
