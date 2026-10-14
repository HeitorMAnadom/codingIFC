/*faça um programa que  receba um numero qualquer, o resultado devera ser a tabuada de 1 ate 10 no console.log
    controle de entrada( do while)
    faça apenas prompt (nao use +prompt)
    use "is nan"
    aceite apenas numeros positivos
    apos validaçao converta para numero inteiro e apresenta a tabuada no consloe
*/

let numero;
let n = 0;

do {
  numero = prompt("insira um numero");
  if (isNaN(numero) || numero <= 0) {
    alert(`invalido`);
  }
} while (isNaN(numero) || numero <= 0);

numero = parseInt(numero);

do {
  console.log(`${numero}x${n} = ${numero * n}`);
  n++;
} while (n <= 10);
