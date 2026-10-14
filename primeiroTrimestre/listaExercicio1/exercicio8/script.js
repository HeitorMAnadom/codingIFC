let precoOriginal=parseFloat(prompt("insira o preço original do produto"));
let preçoComDesconto=parseFloat(prompt("insira o preço final"));


let descontoPorcentagem=((precoOriginal-preçoComDesconto)*100)/precoOriginal;

alert ("A porcentagem do desconto do seu produto é " +descontoPorcentagem.toFixed(2)+"%")

