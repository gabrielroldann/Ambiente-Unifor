const mdc = require('../funcoes/MDC');

test('O mdc de 18 e 60 deve ser 6', () => {
    expect(mdc(18, 60)).toBe(6);
});

test('O mdc de 20 e 24 deve ser 4', () => {
    expect(mdc(20, 24)).toBe(4);
});
