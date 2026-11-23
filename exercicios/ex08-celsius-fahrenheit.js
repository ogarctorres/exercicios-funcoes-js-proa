// Exercício 8: Celsius para Fahrenheit
function celsiusParaFahrenheit(c) {
  return c * 1.8 + 32;
}

let celsius = parseFloat(prompt("Digite a temperatura em Celsius (°C):"));
let fahrenheit = celsiusParaFahrenheit(celsius);
console.log(`${celsius}°C equivalem a ${fahrenheit.toFixed(1)}°F.`);
