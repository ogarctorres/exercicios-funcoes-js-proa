// Exercício 6: Média de notas
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = calcularMedia(nota1, nota2, nota3);
console.log(`A média das notas é ${media.toFixed(2)}.`);
