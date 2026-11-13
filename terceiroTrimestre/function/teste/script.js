let numero = +prompt(`insira o numero a ser dobrado`)
let resultado; 

function dobro(a) {
    resultado = a * 2
    return resultado
}

console.log(`${dobro(numero)}`)
console.log(typeof(resultado))