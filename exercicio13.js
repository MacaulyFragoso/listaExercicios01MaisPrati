function calcularMediaAritmetica() {
    let soma = 0;
    let count = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Digite um número decimal (digite 0 para encerrar):"));

        if (!isNaN(numero) && numero !== 0) {
            soma += numero;
            count++;
        } else if (isNaN(numero)) {
            console.log("Entrada inválida. Por favor, digite um número decimal válido.");
        }
    } while (numero !== 0);

    if (count > 0) {
        let media = soma / count;
        console.log("A média aritmética dos números inseridos é: " + media.toFixed(2));
    } else {
        console.log("Nenhum número foi inserido.");
    }
}

calcularMediaAritmetica();
