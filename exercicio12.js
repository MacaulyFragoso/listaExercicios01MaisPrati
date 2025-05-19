function exibirTabuada(numero) {
    console.log("Tabuada do " + numero + ":");

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

let numero = parseInt(prompt("Digite um número entre 1 e 10:"));

while (numero < 1 || numero > 10) {
    console.log("Número inválido. Por favor, insira um número entre 1 e 10.");
    numero = parseInt(prompt("Digite um número entre 1 e 10:"));
}

exibirTabuada(numero);
