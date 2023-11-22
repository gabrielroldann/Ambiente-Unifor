const order = require('../funcoes/Ordenacao')

const array1 = [1, 5, 3, 2, 4]
test('A ordenação do array1 deve ser [1, 2, 3, 4, 5]', () => {
    expect(order(array1)).toMatchObject([1, 2, 3, 4, 5]);
});

const array2 = [11, 15, 13, 12, 14]
test('A ordenação do array1 deve ser [6, 7, 8, 9, 10]', () => {
    expect(order(array2)).toMatchObject([11, 12, 13, 14, 15]);
});