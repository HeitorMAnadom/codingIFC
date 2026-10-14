let media1;
let media2;
let media3;
let mediAnual = (media1 + media2 + media3) / 3;

do {
  media1 = +prompt(`Insira a media1`);
  media2 = +prompt(`Insira a media2`);
  media3 = +prompt(`Insira a media3`);
  if (0 > (media1 || media2 || media3) > 10) {
    alert(`as três médias trimestrais deverão ser valores entre 0 e 10.`);
  }
} while (0 > (media1 || media2 || media3) > 10);

if (mediAnual < 6) {
  alert(`reprovado\nmedia:${mediAnual}`);
} else {
  alert(`aprovado\nmedia:${mediAnual}`);
}
