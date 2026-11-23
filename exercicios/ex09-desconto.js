// Exercício 9: Desconto
function calcularDesconto(preco, percentual) {
  let desconto = (preco * percentual) / 100;
  return preco - desconto;
}

let preco = parseFloat(prompt("Digite o preço do produto (R$):"));
let percentual = parseFloat(prompt("Digite o percentual de desconto (%):"));
let valorFinal = calcularDesconto(preco, percentual);
console.log(`O valor final após ${percentual}% de desconto é R$ ${valorFinal.toFixed(2)}.`);
