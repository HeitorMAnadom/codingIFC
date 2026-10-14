let fig = +prompt("Quadrado(1), Retangulo(2) ou círculo(3)");
let base = +prompt("Insira o valor da base");
let altura;
let raio;

let area;

switch (fig) {
  case 1:
    area = base ** 2;
    alert(`A area da sua figura é:${area}`);
    break;
  case 2:
    altura = +prompt("Insira o valor da altura");
    area = base * altura;
    alert(`A area da sua figura é:${area}`);
    break;
  case 3:
    raio = +prompt(
      "Insira o raio(Não fará efeito se a figura não for um círculo)",
    );
    area = 3.14 * raio ** 2;
    alert(`A area da sua figura é:${area}`);
    break;
  default:
    alert(`Figura inválida`);
}
