let idade = parseInt(prompt("Insira sua idade"));
let historicoAcidentes = parseInt(prompt("insira o numero de acidentes"));
let possuiItensSeguranca = Boolean(
  prompt("possui freios ABS e airbags?(true ou false)"),
);

let risco;
let custo;
let extra;

if (idade < 25 || historicoAcidentes > 2) {
  risco = "Alto";
  if ((possuiItensSeguranca = true)) {
    extra = 0;
  } else {
    extra = 100;
  }
  custo = 450 + extra;
} else if (
  (idade >= 25, (historicoAcidentes = 1 || 2)) ||
  (idade < 25, (historicoAcidentes = 0))
) {
  risco = "Moderado";
  if ((possuiItensSeguranca = false)) {
    extra = 0;
  } else {
    extra = -30;
  }
  custo = 300 + extra;
} else {
  risco = "Baixo";
  custo = 180;
}

alert(
  `Categoria de risco do motorista:${risco}\nValor final da mensalidade do seguro;R$${custo.toFixed(2)}`,
);