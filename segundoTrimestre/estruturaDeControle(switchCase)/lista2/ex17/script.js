let peso = +prompt("Peso da mercadoria em kg");
let frete;

if (peso <= 5) {
  frete = 20;
} else if (peso <= 20) {
  frete = 50;
} else {
  frete = 100;
}

alert(`Seu frete será de R$${frete.toFixed(2)}`);
