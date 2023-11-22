
function mdc(n1, n2) {

    let mdc = 1;
    const menorNumero = Math.min(n1, n2);

    for (let i = 2; i <= menorNumero; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            mdc = i;
        }
    }

    return mdc;
}

module.exports = mdc;