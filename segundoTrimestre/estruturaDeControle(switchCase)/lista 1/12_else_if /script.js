let salarioInicial = +prompt("Insira o seu salario atual");
let salarioFinal;

if (salarioInicial < 1500) {
    salarioFinal = (salarioInicial * 1.15);
} else if (1500 <= salarioInicial <= 3000) {     //         {XeR|554>=X>=545}
    salarioFinal = (salarioInicial * 1.10);
} else {
    salarioFinal = (salarioInicial * 1.05);
}
alert(`Seu salario atual é R$${salarioFinal.toFixed(2)}`);