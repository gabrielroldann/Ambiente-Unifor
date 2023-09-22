
function ehPrimo() {

    let numero = parseInt(prompt("Digite um número para verificar se ele é primo ou não: "))

    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Chamada da função
ehPrimo();