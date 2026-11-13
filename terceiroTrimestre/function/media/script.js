let precos = [20, 30, 50, 80, 99, 67, 20]
let resultado;

function media(valor) {

    let total =0;
    valor.forEach((numero) => {
        total += numero
    })
    console.log((total / valor.length).toFixed(2))

}

media(precos)
