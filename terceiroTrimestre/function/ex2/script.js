let mediaO = +prompt(`media`);

function verificarAprovacao(mediaAnalise) {
    let situacao;
    if (mediaAnalise >= 6) {
        situacao = `Aprovado`
    } else {
        situacao = `Reprovado`
    }
    return situacao;
}

console.log(verificarAprovacao(mediaO));