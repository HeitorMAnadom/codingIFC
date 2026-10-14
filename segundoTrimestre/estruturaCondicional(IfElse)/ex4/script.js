let bebida = prompt("Insira o codigo da bebida");
let ordem;

switch (bebida) {
  case "1":
    ordem = "de água";
    break;
  case "2":
    ordem = "de refrigerante";
    break;
  case "3":
    ordem = "de suco";
    break;
  default:
    ordem = "inválida";
}

alert(`ordem ${ordem}`);
