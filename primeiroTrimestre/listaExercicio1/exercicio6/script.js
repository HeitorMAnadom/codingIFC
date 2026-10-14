let dolar = parseFloat(prompt("Qual a cotação do dolar atual?"));
let quantia = parseFloat(prompt("Quantos dolares voce tem atualmente?"));
let real = dolar * quantia;

alert("Voce tem R$" + real.toFixed(2));