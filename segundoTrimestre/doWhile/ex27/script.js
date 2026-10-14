let a;
let b;
let c;
let ordem;
let crescente
let decrescente

do {
  let a = +prompt(`a`);
  let b = +prompt(`b`);
  let c = +prompt(`c`);
  let ordem = prompt(`Decrescente ou Crescente?`).toLowerCase();
  if (a < 0 || b < 0 || c < 0 || ordem !== `c` || ordem !== `d`) {
    alert(`● A, B, C: devem ser positivos.\n● escolha deve ser a letra C ou D`);
  }
} while (a < 0 || b < 0 || c < 0 || ordem != `c` || ordem != `d`);

switch (ordem) {
  case `c`:
    if (a>b>c) {
      crescente =;
    } else if (a>b==c) {
      crescente =;
    } else if (a>b<c) {
      crescente =;
    } else if (a==b<c) {
      crescente =;
    } else if (a<b<c) {
      crescente =;
    } else {
      crescente =;
    }
    break
  case `d`:
    case `c`:
    if () {
      decrescente =;
    } else if () {
      decrescente =;
    } else if () {
      decrescente =;
    } else if () {
      decrescente =;
    } else if () {
      decrescente =;
    } else {
      decrescente =;
    }
}