function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30) {
        return "Obesidade";
    } else {
        return "Valores inválidos.";
    }
}

let peso = parseFloat(prompt("Digite o peso da pessoa (em kg):"));
let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));

let imc = peso / (altura * altura);
let categoria = calcularIMC(peso, altura);

console.log("Seu IMC é: " + imc.toFixed(2));
console.log("Categoria de peso: " + categoria);
