function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        return "A pessoa é uma criança.";
    } else if (idade >= 13 && idade <= 17) {
        return "A pessoa é um adolescente.";
    } else if (idade >= 18 && idade <= 59) {
        return "A pessoa é um adulto.";
    } else if (idade >= 60) {
        return "A pessoa é um idoso.";
    } else {
        return "Idade inválida.";
    }
}

let idade = parseInt(prompt("Digite a idade da pessoa:"));
console.log(classificarIdade(idade));
