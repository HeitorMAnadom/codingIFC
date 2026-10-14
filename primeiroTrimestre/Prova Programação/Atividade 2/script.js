let Disciplinas = +prompt("insira o numero de disciplinas estudadas");
let horasEstudo = +prompt("quantas horas voce dedica para cada matéria diariamente?");
let dias = +prompt("por quantos dias voce estudou?");

let horasDia = horasEstudo * Disciplinas;
let horasTotais = horasDia * dias;

alert(`Voce estuda ${horasDia.toFixed(1)} horas por dia\nVoce estudou no total ${horasTotais.toFixed(1)} horas`);
