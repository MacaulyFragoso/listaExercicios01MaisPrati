function verificarTriangulo(A, B, C) {
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            return "Os lados formam um triângulo equilátero.";
        } else if (A === B || A === C || B === C) {
            return "Os lados formam um triângulo isósceles.";
        } else {
            return "Os lados formam um triângulo escaleno.";
        }
    } else {
        return "Os lados não formam um triângulo.";
    }
}

let A = parseFloat(prompt("Digite o valor do lado A:"));
let B = parseFloat(prompt("Digite o valor do lado B:"));
let C = parseFloat(prompt("Digite o valor do lado C:"));

console.log(verificarTriangulo(A, B, C));
