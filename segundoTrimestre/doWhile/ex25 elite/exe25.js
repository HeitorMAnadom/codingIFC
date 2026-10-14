/*
25) Faça um programa em Javascript que leia o salário bruto de uma pessoa e calcule o desconto do
INSS levando em consideração o seguinte:
• Para salários até R$ 1.500,00 a alíquota de INSS será de 8%;
• Para salários acima de R$ 1.500,00 até R$ 3.500,00 a alíquota de INSS será de 10%;
• Para salários acima de R$ 3.500,00 a alíquota de INSS será de 12%.
● Controle de entrada com mensagem de erro: 
o salário bruto deverá ser positivo e inferior a
10 mil reais.
*/
let salarioBruto;
let inss;
let salarioLiquido;
let continuar;
let somaSalarioLiquido = 0;
let contaEmpregados = 0;
do {
    do {
        salarioBruto = parseFloat(prompt("Informe o salário bruto: R$ "));
        if (salarioBruto <= 0 || salarioBruto >= 10000) {
            alert("Valor inválido!");
            alert("Informe apenas valores positivos e menores que R$ 10 mil");
        }
    } while (salarioBruto <= 0 || salarioBruto >= 10000)

    if (salarioBruto <= 1500) {
        inss = salarioBruto * 0.08;
    } else if (salarioBruto <= 3500) {
        inss = salarioBruto * 0.10;
    } else {
        inss = salarioBruto * 0.12;
    }
    salarioLiquido = salarioBruto - inss;
    somaSalarioLiquido = somaSalarioLiquido + salarioLiquido;
    contaEmpregados = contaEmpregados + 1;

    alert("Salário líquido: R$ " + salarioLiquido.toFixed(2));
    continuar = prompt("Deseja continuar? Digite sim ou não").toLowerCase();
} while (continuar == "sim")

let mediaSalario = somaSalarioLiquido / contaEmpregados;

alert("Média dos salários líquidos: R$ " + mediaSalario.toFixed(2));