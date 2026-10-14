let categoria = prompt("Insira a sua categoria(R, C e I)").toLowerCase();
let kwh = +prompt("qtd de kW/h");
let tarifa;

switch (categoria) {
  case "r":
    tarifa = `R$${0.82 * kwh}`;
    break;
  case "c":
    tarifa = `R$${0.95 * kwh}`;
    break;
  case "i":
    tarifa = `R$${0.73 * kwh}`;
    break;
  default:
    tarifa = "inválida";
}

alert(`${tarifa}`);
