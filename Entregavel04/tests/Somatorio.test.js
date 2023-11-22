const soma = require('../funcoes/Somatorio')

const numeros1 = [1, 2, 3, 4, 5];
test('A soma dos numeros [1, 2, 3, 4, 5] deve ser 15', () => {
    expect(soma(numeros1)).toBe(15);
});

const numeros2 = [6, 7, 8, 9, 10];
test('A soma dos numeros [6, 7, 8, 9, 10] deve ser 40', () => {
    expect(soma(numeros2)).toBe(40);
});