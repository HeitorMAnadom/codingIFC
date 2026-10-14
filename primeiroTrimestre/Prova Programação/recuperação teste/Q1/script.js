let faturamentoTotal = +prompt("insira o faturamento total da sua empresa");
let percentOnline = +prompt("insira o percentual de vendas online");
let percentFisico = +prompt("insira o percentual de vendas físicas")

let vendasOnline= faturamentoTotal*(percentOnline/100);
let vendasFisico= faturamentoTotal*(percentFisico/100);
let diferenca= Math.abs(vendasOnline-vendasFisico);

alert("valor das vendas fisicas"+vendasFisico.toFixed(2));
alert("valor das vendas online"+vendasOnline.toFixed(2));
alert("diferença do valor das vendas "+diferenca.toFixed(2));

