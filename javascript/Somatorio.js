function somarNumeros() {

    let numeros = prompt("Digite os números separados por ',': ").split(',').map(Number);

    let soma = 0;
    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return `Somatório dos números digitados: ${soma}`
}

// Chamada da função

somarNumeros();