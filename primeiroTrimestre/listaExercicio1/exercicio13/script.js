let alturaTijolo = parseFloat(prompt("Insira a altura do tijolo"));
let larguraTijolo = parseFloat(prompt("insira a largura do tijolo"));
let alturaParede = parseFloat(prompt("insisra a altura da parede"));
let larguraParede = parseFloat(prompt("insira a largura da parede"));

let areaParede = alturaParede * larguraParede;
let areaTijolo = alturaTijolo * larguraTijolo;
let cimento = areaParede * 0.03;
