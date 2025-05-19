function calcularSomaDeCincoNumeros() {
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
        soma += numero;
    }

    return soma;
}

let somaTotal = calcularSomaDeCincoNumeros();
console.log("A soma total dos 5 números é: " + somaTotal);
