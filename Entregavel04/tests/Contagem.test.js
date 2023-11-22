const contagem = require('../funcoes/Contagem');

test('A quantidade de números digitados deve ser 5', () => {
    expect(contagem(10)).toBe(10);
});

test('A quantidade de números digitados deve ser 17', () => {
    expect(contagem(17)).toBe(17);
});

