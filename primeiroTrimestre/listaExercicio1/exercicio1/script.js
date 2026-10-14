let valorDoPeso = 28.0;
let peso = parseFloat(prompt(`Insira o peso do seu prato de comida em quilogramas`));
let valor = valorDoPeso * peso;

alert(`o valor da sua refeição é R$` + valor.toFixed(2));
