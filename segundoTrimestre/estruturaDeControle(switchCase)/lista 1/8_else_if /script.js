let altura = +prompt("insira sua altua em metros");
let sexo = prompt("Homem(H) ou mulher(F)?").toUpperCase();
let pesoIdeal;

if (sexo == "H") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

alert(`Seu peso ideal é ${pesoIdeal.toFixed(3)} KG`);