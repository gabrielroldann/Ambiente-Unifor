const primo = require('../funcoes/NumeroPrimo')

test('É true que o número 17 é primo', () => {
    expect(primo(17)).toBe(true);
});

test('É true que o número 7 é primo', () => {
    expect(primo(7)).toBe(true);
});