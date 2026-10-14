let volInicial = +prompt("insira o volume inicial do reservatorio");
let litroHora = +prompt("insira os litros adicionados por hora");
let tempo = +prompt("insira o tempo de abastecimento do reservatorio, em horas");

let volFinal = volInicial + litroHora * tempo;

alert("o volume final do reservatório é " + volFinal.toFixed(3) + "L");
