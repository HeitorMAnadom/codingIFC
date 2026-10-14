let cnh = prompt("Tem CNH? (S para sim, N para não)");
let idade = parseInt(prompt("Quantos anos você tem?"));

if (idade >= 18 && cnh == "S") {
    alert("Pode dirigir");
} else if (idade >= 18 && cnh == "N") {
    alert("Tem a idade, falta CNH");
} else if (idade < 18 && cnh == "S") {
    alert("Tem a CNH, falta a idade");
} else {
    alert("Sem CNH nem idade");
}
