let a = parseFloat(prompt("Nota da primeira avaliação"));
let b = parseFloat(prompt("Nota da segunda avaliação"));
let c = parseFloat(prompt("Nota da terceira avaliação"));

let media = (a + b + c) / 3;

alert(`Sua media anual é ` + media.toFixed(2));
