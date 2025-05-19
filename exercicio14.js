function calcularFatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numero = parseInt(prompt("Digite um número inteiro não negativo:"));

while (isNaN(numero) || numero < 0) {
    console.log("Entrada inválida. Por favor, insira um número inteiro não negativo.");
    numero = parseInt(prompt("Digite um número inteiro não negativo:"));
}

let fatorial = calcularFatorial(numero);
console.log("O fatorial de " + numero + " é: " + fatorial);
