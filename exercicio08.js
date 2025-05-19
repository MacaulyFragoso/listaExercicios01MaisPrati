function ordenarDoisValores(valor1, valor2) {
    if (valor1 < valor2) {
        return [valor1, valor2];
    } else {
        return [valor2, valor1];
    }
}

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

while (valor1 === valor2) {
    console.log("Os valores devem ser diferentes. Por favor, insira valores distintos.");
    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor:"));
}

let [menor, maior] = ordenarDoisValores(valor1, valor2);

console.log("Os valores em ordem crescente são: " + menor + " e " + maior);
