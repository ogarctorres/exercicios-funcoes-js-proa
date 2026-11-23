// Exercício 7: Área do retângulo
function areaRetangulo(base, altura) {
  return base * altura;
}

let base = parseFloat(prompt("Digite a base do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));
let area = areaRetangulo(base, altura);
console.log(`A área do retângulo é ${area}.`);
