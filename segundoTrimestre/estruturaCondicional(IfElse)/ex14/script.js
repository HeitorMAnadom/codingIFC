let op = parseInt(prompt("Insira a operação desejada"));
let saldo = 1000;

switch (op) {
  case 1:
    alert(`Seu saldo é ${saldo}`);
    break;
  case 2:
    let saque = +prompt("O quanto deseja sacar?");
    if (saque <= saldo) {
      saldo = saldo - saque;
    } else {
      alert(`Saldo insuficiente`);
    }
    break;
  case 3:
    let deposito = +prompt(`deposito`);
    saldo = saldo + deposito;
  default:
    alert(`Inválido`);
}
