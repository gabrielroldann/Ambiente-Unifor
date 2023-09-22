
function gerarFibonacci() {

    let ultimoTermo = parseInt(prompt("Digite o último termo da sequência: "))

    const fibonacci = [0, 1];

    for (let i = 2; i < ultimoTermo; i++) {
        const sucessor = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(sucessor);
    }
    return fibonacci;
}

// Chamada da função

gerarFibonacci();