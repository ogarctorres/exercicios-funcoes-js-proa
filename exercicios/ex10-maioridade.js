// Exercício 10: Maioridade
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

let idade = parseInt(prompt("Digite sua idade:"));
let resultado = verificarIdade(idade);
console.log(resultado);
