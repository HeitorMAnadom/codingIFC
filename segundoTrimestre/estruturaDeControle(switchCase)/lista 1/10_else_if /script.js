let precoEtanol = 4.38;
let precoGasolina = 5.65;
let valorTotal;

let combustivel = prompt("Qual o tipo de combustivel? Gasolina(G) ou Etanol(E)?").toUpperCase;
let capacidadeTanque = +prompt("Insira a capacidade do tanque em litros");

if (combustivel = "E") {
    valorTotal=precoEtanol*capacidadeTanque
} else if (combustivel = "G") {
    valorTotal=precoGasolina*capacidadeTanque
} else {
    alert("Dados inválidos")
}

alert("O preço para encher o tanque sera de R$ "+valorTotal.toFixed(2));