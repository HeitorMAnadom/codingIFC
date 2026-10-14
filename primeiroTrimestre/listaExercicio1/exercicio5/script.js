let pedreiro = 20.0;
let pintor = 16.0;

let hrsDePedreiro = parseFloat(prompt("Quantas horas o pedreiro levou?"));
let hrsDePintor = parseFloat(prompt("Quantas horas o pintor levou?"));

let custoDoPedreiro = hrsDePedreiro * pedreiro;
let custoDoPintor = hrsDePintor * pintor;
let custoTotal = custoDoPedreiro + custoDoPintor;

alert(
  `O custo com o pedreiro foi R$ ${custoDoPedreiro.toFixed(2)}\n O custo com o pintor foi R$ ${custoDoPintor.toFixed(2)}\n O custo total foi R$ ${custoTotal.toFixed(2)}`,
);
