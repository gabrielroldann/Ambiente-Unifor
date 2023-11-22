const contagem = require('../funcoes/Contagem');

test('A quantidade de números digitados deve ser 5', () => {
    expect(contagem(10)).toBe(10);
});

test('A quantidade de números digitados deve ser 17', () => {
    expect(contagem(17)).toBe(17);
});

const fibonacci = require('../funcoes/Fibonacci');

test('Os 10 primeiros números da sequência', () => {
    expect(fibonacci(6)).toMatchObject([0, 1, 1, 2, 3, 5]);
});

test('Os 10 primeiros números da sequência', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

const mdc = require('../funcoes/MDC');

test('O mdc de 18 e 60 deve ser 6', () => {
    expect(mdc(18, 60)).toBe(6);
});

test('O mdc de 20 e 24 deve ser 4', () => {
    expect(mdc(20, 24)).toBe(4);
});

const primo = require('../funcoes/NumeroPrimo')

test('É true que o número 17 é primo', () => {
    expect(primo(17)).toBe(true);
});

test('É true que o número 7 é primo', () => {
    expect(primo(7)).toBe(true);
});

const order = require('../funcoes/Ordenacao')

const array1 = [1, 5, 3, 2, 4]
test('A ordenação do array1 deve ser [1, 2, 3, 4, 5]', () => {
    expect(order(array1)).toMatchObject([1, 2, 3, 4, 5]);
});

const array2 = [11, 15, 13, 12, 14]
test('A ordenação do array1 deve ser [6, 7, 8, 9, 10]', () => {
    expect(order(array2)).toMatchObject([11, 12, 13, 14, 15]);
});

const soma = require('../funcoes/Somatorio')

const numeros1 = [1, 2, 3, 4, 5];
test('A soma dos numeros [1, 2, 3, 4, 5] deve ser 15', () => {
    expect(soma(numeros1)).toBe(15);
});

const numeros2 = [6, 7, 8, 9, 10];
test('A soma dos numeros [6, 7, 8, 9, 10] deve ser 40', () => {
    expect(soma(numeros2)).toBe(40);
});
