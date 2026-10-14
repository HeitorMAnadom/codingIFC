let a = +prompt("insira lado a");
let b = +prompt("insira lado b");
let c = +prompt("insira labo c");

if (a + b > c && a + c > b && b + c > a) {
  alert("È um triangulo");
} else {
  alert("Não é um triangulo");
}
