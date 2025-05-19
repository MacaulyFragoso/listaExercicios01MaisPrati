function calcularValorTotalMacas(qtdMacas) {
    let precoUnitario;

    if (qtdMacas < 12) {
        precoUnitario = 0.30;
    } else {
        precoUnitario = 0.25;
    }

    let valorTotal = qtdMacas * precoUnitario;

    return valorTotal;
}

let qtdMacas = parseInt(prompt("Digite o número de maçãs compradas:"));
let valorTotal = calcularValorTotalMacas(qtdMacas);

console.log("O valor total da compra é: R$" + valorTotal.toFixed(2));
