let media = +prompt("insira sua media ");
let rendaFamilia = +prompt("insira sua renda familiar ");
let bolsa;

if (rendaFamilia <= 2000 && media >= 9) {
  bolsa = "Bolsa de 100%";
} else if (rendaFamilia <= 3500 && media >= 8) {
  bolsa = "Bolsa de 50%";
} else if (rendaFamilia <= 5000 && media >= 7) {
  bolsa = "Bolsa de 25%";
} else {
  bolsa = "Bolsa negada";
}

alert(`Situação: ${bolsa}`);
