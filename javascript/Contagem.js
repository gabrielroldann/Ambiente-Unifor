
function contarNumeros() {

    let tamanho = parseInt(prompt("Digite o tamanho da lista: "))

    const numeros = [];
    for (let i = 0; i < tamanho; i++) {
        const valor = prompt(`Digite o valor ${i + 1}:`);
        numeros.push(Number(valor));
    }
    return `Você digitou ${numeros.length} números.`;
}

// // Chamada da Função

contarNumeros();
