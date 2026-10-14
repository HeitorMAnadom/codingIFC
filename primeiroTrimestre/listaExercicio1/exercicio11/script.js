let numGado = +prompt("Quantas cabeças de gado foram dispostas na herança?");
let numHerdeiros = +prompt("Quantos herdeiros estão inclusos na herança?");

let caridade = numGado * 0.15;
let gadoHeranca = numGado - caridade;
let gadoResto = gadoHeranca % numHerdeiros;
let heranca = gadoHeranca / numHerdeiros;

alert(
  `Cada herdeiro recebeu ${Math.floor(heranca)}\n${Math.floor(caridade)} gados foram para a caridade\nSobraram ${Math.floor(gadoResto)}`,
);

//Usar Math.floor nas variaveis

