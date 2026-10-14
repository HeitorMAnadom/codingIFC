let peso;
let excesso;
let multa;

do {
  peso = +prompt(`Informe o peso`);
  if (peso <= 0 || peso >= 150) {
    alert(`Peso inválido, o peso deverá ser positivo e inferior a 150
quilos.`);
  }
} while (peso <= 0 || peso >= 150);

if (peso > 50) {
  excesso = peso - 50;
  multa = excesso * 8;
  alert(`Excesso: ${excesso}kg\nMulta: R$${multa.toFixed(2)}`);
} else {
  excesso = 0;
  multa = 0;
  alert(`Tudo nos conformes`);
}
