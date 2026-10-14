let transporte = prompt("Insira o meio de transporte (C, M ou B)").toUpperCase();

switch(transporte) {
  case "C":
    alert("Carro");
    break
  case "M":
    alert("Moto");
    break
  case "B": 
    alert('Bicicleta');
    break
  default:
    alert('Código inválido');
}