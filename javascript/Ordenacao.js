
function ordenarNumeros() {

    let numeros = prompt("Digite os números separados por ',': ").split(',').map(Number);

    return numeros.sort();
}

// Chamada da Função

ordenarNumeros();