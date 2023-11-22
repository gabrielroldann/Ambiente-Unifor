const fibonacci = require('../funcoes/Fibonacci');

test('Os 10 primeiros números da sequência', () => {
    expect(fibonacci(6)).toMatchObject([0, 1, 1, 2, 3, 5]);
});

test('Os 10 primeiros números da sequência', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});