let codigo = +prompt("Codigo numérico do produto");

switch (codigo) {
  case 100:
    alert(`Mouse, 50.00`);
    break;
  case 200:
    alert(`Teclado, 80.00`);
    break;
  case 300:
    alert(`Monitor, 900.00`);
    break;
  default:
    alert(`Codigo de produto inválido`);
}
