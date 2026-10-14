let peso=parseFloat(prompt("Insira seu peso em KG"));

let pesoMagro =peso - (peso*0.20);
let pesoGordo = (peso*1.15);

alert(`Caso voce emagreça 20%, seu peso será de ${pesoMagro.toFixed(2)} Kg\nCaso voce engorde 15%, seu peso será de ${pesoGordo.toFixed(2)} Kg` );
