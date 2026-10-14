let consumo = +prompt("consumo em m³");
let cobranca;

if (consumo <= 10) {
  cobranca = 30;
} else if (consumo <= 25 && consumo > 10) {
  cobranca = 50;
} else {
  cobranca = 80;
}

alert(`sua cobrança é de R$${cobranca.toFixed(2)}`);
