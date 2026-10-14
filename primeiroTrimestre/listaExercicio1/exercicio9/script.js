let preco=parseFloat(prompt("insira o preço do produto"));
let desconto= 5;

let precoDef=(preco*(desconto/100));

alert("seu desconto foi de R$ "+ precoDef.toFixed(2));
