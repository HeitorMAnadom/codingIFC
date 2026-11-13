let nota1 = +prompt(`nota1`);
let nota2 = +prompt(`nota2`);
let notas = [nota1, nota2];
function calcularMedia(notass) {
    let mediaFinal = 0;
    notas.forEach((notass) => {
        mediaFinal += notass
    })
    mediaFinal = mediaFinal / notass.length
    return mediaFinal
}
console.log(calcularMedia(notas));