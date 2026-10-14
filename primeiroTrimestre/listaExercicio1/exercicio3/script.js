let valorDoKg = parseFloat(prompt(`Insira o valor do produto`));
let kgConsumido = parseFloat(
  prompt(`Insira a quantidade em quilos de quanto você consumiu`),
);
let valorDef = valorDoKg * kgConsumido;

alert (`O valor a pagar é R$` + valorDef.toFixed(2));
