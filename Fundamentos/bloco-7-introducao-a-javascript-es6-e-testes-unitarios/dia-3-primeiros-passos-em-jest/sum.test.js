const sum = require('./sum');

describe('sum', () => {
  test('Verificar se o retorno de 4 mais 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Verificar se o retorno de 0 mais 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Verificar se o função lança um erro', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
  test('Verificar se a mensagem de erro é  "parameters must be numbers"', () => {
    expect(() => sum('parameters must be numbers')).toThrow('parameters must be numbers');
  });
});