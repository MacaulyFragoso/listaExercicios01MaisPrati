function gerarSequenciaFibonacci() {
    let fibonacci = [0, 1];

    for (let i = 2; i < 10; i++) {
        let proximoNumero = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(proximoNumero);
    }

    console.log("Os primeiros 10 números da sequência de Fibonacci são:");
    console.log(fibonacci.join(", "));
}

gerarSequenciaFibonacci();
