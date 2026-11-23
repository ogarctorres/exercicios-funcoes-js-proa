// Exercício 4: Par ou ímpar
function ehPar(numero) {
  return numero % 2 === 0;
}

let numero = parseInt(prompt("Digite um número inteiro:"));
let resultado = ehPar(numero);
console.log(`O número ${numero} é par? ${resultado}`);
