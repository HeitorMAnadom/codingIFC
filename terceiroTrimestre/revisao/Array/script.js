let notas = [0, 7, 8, 10, 6];
console.log(notas[0])
console.log(notas[2])
console.log(notas[4])
console.log(`---------length-------------`)
console.log(notas.length);
console.log(`---------soma-------------`)
let numeros = [10, 20, 30, 40];
let soma = 0;

for (i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}
console.log(`soma: ${soma}`);
console.log(`--------------media-------------------`)

notas = [8,8,8,8]
soma = 0

for(let i=0; i< notas.length; i++) {
    soma += notas[i]
}
let media = soma/notas.length
console.log(`media:${media}`)