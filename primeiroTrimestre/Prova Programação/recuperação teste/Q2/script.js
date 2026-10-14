let qtdKits=parseInt(prompt("insira a quantidade de kits"));
let qtdCaneta=parseInt(prompt("insira a quantidade de canetas"));
let qtdCaderno=parseInt(prompt("insira a quantidade de cadernos"));
let qtdSticker=parseInt(prompt("insira a quantidade de adesivos"));
let precoCaneta=+prompt("insira o preço da caneta");
let precoCaderno=+prompt("insira o preço do caderno");
let precoSticker=+prompt("insira o preço do adesivo");

let totalItens=qtdKits*(qtdCaderno+qtdCaneta+qtdSticker);
let custoTotalCaneta=(qtdCaneta*qtdKits)*precoCaneta;
let custoTotalCaderno=(qtdCaderno*qtdKits)*precoCaderno;
let custoTotalSticker=(qtdSticker*qtdKits)*precoSticker;
let custoTotalKits=custoTotalCaderno+custoTotalCaneta+custoTotalSticker;

alert("a quantidade total de itens foi "+totalItens);
alert("o custo total com cadernos foi R$ "+custoTotalCaderno.toFixed(2));
alert("o custo total com canetas foi R$ "+custoTotalCaneta.toFixed(2));
alert("o custo total com adesivos foi R$ "+custoTotalSticker.toFixed(2));
alert("o custo total com os kits foi R$ "+custoTotalKits.toFixed(2));

