
function contagem(tamanho) {
    
    const array = [];
    
    for (let i = 0; i < tamanho; i++) {
        const valor = Math.floor( Math.random() * 30 )
        array.push(Number(valor));
    }

    const tamanhoArray = array.length;
    
    return tamanhoArray;
}

module.exports = contagem;
