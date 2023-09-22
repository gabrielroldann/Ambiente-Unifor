
function calcularMDC() {
    const numero1 = parseInt(prompt("Digite o primeiro número:"));
    const numero2 = parseInt(prompt("Digite o segundo número:"));

    let mdc = 1;
    const menorNumero = Math.min(numero1, numero2);

    for (let i = 2; i <= menorNumero; i++) {
        if (numero1 % i === 0 && numero2 % i === 0) {
            mdc = i;
        }
    }

    return `O Máximo Divisor Comum (MDC) de ${numero1} e ${numero2} é ${mdc}.`;
}

// Chamada da Função

calcularMDC();