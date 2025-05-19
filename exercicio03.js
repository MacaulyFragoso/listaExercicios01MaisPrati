function classificarNota(nota) {
    if (nota >= 7 && nota <= 10) {
        return "Aprovado";
    } else if (nota >= 5 && nota < 7) {
        return "Recuperação";
    } else if (nota >= 0 && nota < 5) {
        return "Reprovado";
    } else {
        return "Nota inválida. Por favor, insira uma nota entre 0 e 10.";
    }
}

let nota = parseFloat(prompt("Digite a nota do aluno (de 0 a 10):"));
console.log("Situação: " + classificarNota(nota));
