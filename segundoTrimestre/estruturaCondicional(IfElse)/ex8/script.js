let curso = +prompt("Informática(1), Administração(2) ou Redes(3)");
let cursoFinal;

switch (curso) {
  case 1:
    cursoFinal = "Informática";
    alert(`Seu curso é: ${cursoFinal}`);
    break;
  case 2:
    cursoFinal = "Administração";
    alert(`Seu curso é: ${cursoFinal}`);
    break;
  case 3:
    cursoFinal = "Redes";
    alert(`Seu curso é: ${cursoFinal}`);
    break;
  default:
    alert(`Curso inválido`);
}
