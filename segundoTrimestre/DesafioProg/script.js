//---Input---//
let areaPintura = parseFloat(prompt("Área total a ser pintada (em metros quadrados)."));
let rendimentoLitro = parseFloat(prompt("Rendimento da tinta (em metros quadrados por litro)"));
let litroLata = parseFloat(prompt("Volumetria da lata de tinta (em litros)"));
let precoLata = parseFloat(prompt("Preço unitário da lata de tinta"));
let tempoEstimado = parseFloat(prompt("Quantidade de horas estimadas para a execução do serviço. "));
let qtdPintores = parseInt(prompt("Quantidade de pintores alocados na equipe"));
let precoHora = parseFloat(prompt("Valor da hora cobrado por pintor."));
let orcamento = parseFloat(prompt("Valor reservado (orçamento máximo disponível pela família)"));
//---Processamento---//
let litroPreciso = areaPintura / rendimentoLitro;
let latasPrecisa = Math.ceil(litroPreciso / litroLata);
let valorTinta = precoLata * latasPrecisa;

let valorPintor = tempoEstimado * precoHora ;
let valorEqpPintura = valorPintor * qtdPintores ;
let valorTotal = valorEqpPintura + valorTinta;

let saldoFinal;
let parcelas;
let valorParcela;

if (valorTotal <= orcamento) { //pagamento à vista
; let saldoFinal = orcamento-(valorTotal * 0.95); 
    alert(`Quantidade de latas de tinta:${latasPrecisa}\n
            Custo total do material:R$${valorTinta.toFixed(2)}\n
            Valor da mão de obra:R$${valorEqpPintura.toFixed(2)}\n
            Custo total bruto da pintura:R$${(valorTotal * 0.95).toFixed(2)} (Após o desconto de 5%)\n
            Saldo final:R$${saldoFinal.toFixed(2)}
        `);
} else if ((valorTotal >= (orcamento * 1.50))){
    let saldoFinal = orcamento - valorTotal
    alert(`Quantidade de latas de tinta:${latasPrecisa}\n
            Custo total do material:R$${valorTinta.toFixed(2)}\n
            Valor da mão de obra:R$${valorEqpPintura.toFixed(2)}\n
            Custo total bruto da pintura:R$${valorTotal.toFixed(2)}\n(Orçamento estourado)
            Quantidade de parcelas: 4x de R$${(valorTotal / 4).toFixed(2)} sem juros\n
            Saldo final:R$${saldoFinal.toFixed(2)}
        `);
} else if (((orcamento * 1.30) >= valorTotal <= (orcamento * 1.5))) {
    alert(`Quantidade de latas de tinta:${latasPrecisa}\n
            Custo total do material:R$${valorTinta.toFixed(2)}\n
            Valor da mão de obra:R$${valorEqpPintura.toFixed(2)}\n
            Custo total bruto da pintura:R$${valorTotal.toFixed(2)}\n(Orçamento estourado)
            Quantidade de parcelas: 3x de R$${(valorTotal / 3).toFixed(2)} sem juros\n
            Saldo final:R$${saldoFinal.toFixed(2)}
        `);
} else {
     alert(`Quantidade de latas de tinta:${latasPrecisa}\n
            Custo total do material:R$${valorTinta.toFixed(2)}\n
            Valor da mão de obra:R$${valorEqpPintura.toFixed(2)}\n
            Custo total bruto da pintura:R$${valorTotal.toFixed(2)}\n(Orçamento estourado)
            Quantidade de parcelas: 2x de R$${(valorTotal / 2).toFixed(2)} sem juros\n
            Saldo final:R$${saldoFinal.toFixed(2)}
        `);
}