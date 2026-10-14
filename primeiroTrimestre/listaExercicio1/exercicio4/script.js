let precoKg = parseFloat(prompt("Quanto foi o preço do kg de comida?"));
let valor = parseFloat(prompt("Quantos R$ voce pagou na sua refeiao?"));

let pesoConsumido = valor / precoKg;

alert("Voce consumiu " + pesoConsumido.toFixed(3) + "KG");
