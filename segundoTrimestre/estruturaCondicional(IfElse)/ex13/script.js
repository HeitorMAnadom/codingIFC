let regiao = parseInt(prompt("Insira a regiao"));
let resultado;

switch (regiao) {
  case 1:
    resultado = "Norte";
    break;
  case 2:
    resultado = "nordeste";
    break;
  case 3:
    resultado = "centro-oeste";
    break;
  case 4:
    resultado = "sudeste";
    break;
  case 5:
    resultado = "sul";
    break;
  default:
    resultado = "inválida";
}

alert(`Região ${resultado}`);
