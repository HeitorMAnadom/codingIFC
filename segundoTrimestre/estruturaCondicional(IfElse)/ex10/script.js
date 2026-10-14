let preferencia = +prompt("insira sua preferência, metros(1) ou kilometros(2)");
let m;
let km;
let result;

switch (preferencia) {
  case 2:
    m = km * 1000;
    km = +prompt("Insira a quantidade de KMs para conversão");
    alert(`${m}m`);
  case 1:
    km = m / 1000;
    m = +prompt("insira a quantidade de metros para conversão");
    alert(`${km}km`);
  default:
    alert(`Código inválido`);
}
