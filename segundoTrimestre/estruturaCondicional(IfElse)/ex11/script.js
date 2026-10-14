let categoria = prompt("Insira a sua categoria(R, C e I)").toLowerCase();
let kwh = +prompt("qtd de kW/h");
let tarifa;

switch (categoria) {
  case "r":
    tarifa = `R$${0.75 * kwh}`;
    break;
  case "c":
    tarifa = `R$${0.92 * kwh}`;
    break;
  case "i":
    tarifa = `R$${0.68 * kwh}`;
    break;
  default:
    tarifa = "inválida";
}

alert(`${tarifa}`);
