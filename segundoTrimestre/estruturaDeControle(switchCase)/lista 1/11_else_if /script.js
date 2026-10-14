let qtdDinheiro = +prompt("insira a quantidade de dinheiro no caixa");
let qtdProdutos = +prompt("insira a quantidade de produtos");
let precoUnidade = +prompt("Insira o preço da unidade deste produto");

let valorTotal = qtdProdutos * precoUnidade;
let valorDef;

if (valorTotal > (qtdDinheiro * 0.8)) {
    valorDef = (valorTotal * 1.1);
    alert(`Valor total: R$${valorDef.toFixed(2)} (3x R$${(valorDef/3).toFixed(2)})\nForma de pagamento: À Prazo`)
} else {
    valorDef = valorTotal * 0.95;
    alert(`Valor total: R$${valorDef.toFixed(2)}\nForma de pagamento: À Vista`)
}