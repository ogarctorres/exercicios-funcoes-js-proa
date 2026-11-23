// Exercício 3: Soma de dois números
function soma(a, b) {
  return a + b;
}

let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
let segundoNumero = parseFloat(prompt("Digite o segundo número:"));
let resultado = soma(primeiroNumero, segundoNumero);
console.log(`A soma de ${primeiroNumero} + ${segundoNumero} é ${resultado}.`);
