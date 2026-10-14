let nota1 = parseFloat(prompt("Qual foi a nota 1?"));
let nota2 = parseFloat(prompt("Qual foi a nota 2?"));
let nota3 = parseFloat(prompt("Qual foi a nota 3?"));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderadaFase1 = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
let mediaPonderadaDef = mediaPonderadaFase1 / (peso1 + peso2 + peso3);

alert("Sua media é " + mediaPonderadaDef.toFixed(1));


//Como calcular média ponderada:

//Multiplique cada nota/valor pelo seu peso.
//Some todos os resultados dessas multiplicações.
//Some todos os pesos.
//Divida a soma dos produtos pela soma dos pesos
