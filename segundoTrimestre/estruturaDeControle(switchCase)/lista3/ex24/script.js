let valorBruto = +prompt("insira o valor bruto das compras em R$");
let fidelidade = prompt("bronze, prata ou ouro?");
let cupom = Boolean(prompt("Cupom é valido?(true ou false)"));

let valorTotal = x;

let desconto;
let frete;
let valorLiquido;

if (fidelidade = "ouro") {
  valorLiquido = valorBruto * 0.85
    if (valorLiquido >= 150) {
      frete = 0
    } else {
      frete = 10
    }
} else if (fidelidade = "prata") {
    if (cupom = true) {
      valorLiquido = valorBruto * 0.9
    } else {
      valorLiquido = valorBruto * 0.95
    }
    //
    if (valorBruto >= 250) {
      frete = 0
    } else {
      frete = 20
    }
} else {
    if (cupom = true) {
      valorLiquido = valorBruto * 0.95
    } else {
      valorLiquido = valorBruto
    }
    
    frete = 30
}
