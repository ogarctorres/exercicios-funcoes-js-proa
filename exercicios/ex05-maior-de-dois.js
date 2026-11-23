// Exercício 5: Maior de dois
function maiorDeDois(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
let segundoNumero = parseFloat(prompt("Digite o segundo número:"));
let maior = maiorDeDois(primeiroNumero, segundoNumero);
console.log(`O maior número entre ${primeiroNumero} e ${segundoNumero} é ${maior}.`);
