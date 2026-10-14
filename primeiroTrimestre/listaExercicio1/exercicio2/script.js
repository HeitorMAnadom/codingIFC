let preço = parseFloat(prompt(`Quanto é o valor do produto?`));
let pay = parseFloat(prompt(`Quanto você pagará pelo produto?`));
let troco = pay - preço;

alert(`O seu troco será R$` + troco.toFixed(2));
