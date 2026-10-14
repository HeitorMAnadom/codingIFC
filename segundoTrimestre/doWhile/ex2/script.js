let numero = parseInt(prompt("Insira um numero inteiro positivo"));

let contador = 1;
let soma = 0;

do {
    soma += contador
    contador++ 
}

while (contador <= numero);

alert(`soma = ${soma}`);
