let valorInicial = +prompt("Valor inicial do relogio");
let valorFinal = +prompt("Valor final do relogio");
let kwhNormal = +prompt("Valor do Kw/h(antes de 150Kw/h)");


let kwhGasto = valorFinal-valorInicial;
let kwhExcedente = kwhGasto-150;
let kwhFinal;

if (kwhGasto <= 150) {
    kwhFinal = (kwhGasto*kwhNormal)
} else (kwhGasto > 150); {
    kwhFinal = (kwhNormal*1.20)*kwhGasto;
}

alert ("voce consumiu "+kwhGasto)
alert ("O valor da luz esse mês será R$ " + kwhFinal.toFixed(2));