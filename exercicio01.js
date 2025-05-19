function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par.";
    } else {
        return "O número " + numero + " é ímpar.";
    }
}

let numero = parseInt(prompt("Digite um número inteiro:"));
console.log(verificarParOuImpar(numero));
