// Exercício 2: O dobro
function dobro(numero) {
  return numero * 2;
}

let numero = parseFloat(prompt("Digite um número:"));
let resultado = dobro(numero);
console.log(`O dobro de ${numero} é ${resultado}.`);
