let tempo = parseFloat(prompt("Insira, em horas, o tempo total da viagem"));
let valorGasolina = parseFloat(prompt("Insira o valor da gasolina atual"));
let consumoMedio = parseFloat(prompt("Insira o consumo de gasolina em km/l do seu carro"));
let velMedia = parseFloat(prompt("Insira a velocidade média do carro na viagem"));

let distancia = tempo * velMedia;
let litrosGasolina = distancia / consumoMedio;
let custoTotal = litrosGasolina * valorGasolina;

alert("O custo aproximado da sua viagem foi R$" + custoTotal.toFixed(2));
