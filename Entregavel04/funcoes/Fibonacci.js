
function fibonacci(n) {

    let n1, n2, sucessor;
    n1 = 0;
    n2 = 0;

    if (n <= 0) {
        return [];
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1]
    }

    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        const sucessor = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(sucessor);
    }
    return fibonacci;
}

module.exports = fibonacci;