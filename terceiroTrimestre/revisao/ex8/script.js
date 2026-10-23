let peso = Number(prompt("peso do lote 1"));
let maior = peso
let menor = peso

for(let lote = 2; lote <= 6; lote++) {
    peso = Number(prompt(`peso do lote ${lote}`))

    if (peso > menor) maior = peso
    if (peso < maior) menor = peso
}

console.log(`menor peso: ${menor}`);
console.log(`maior peso: ${maior}`);