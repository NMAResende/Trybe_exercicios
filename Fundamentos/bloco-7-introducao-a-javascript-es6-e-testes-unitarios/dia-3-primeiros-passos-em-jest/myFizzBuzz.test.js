const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('Verificar se 15 é divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toMatch("fizzbuzz");
  });
  test('Verificar se 9 é divisivel por 3', () => {
    expect(myFizzBuzz(9)).toMatch("fizz");
  });
  test('Verificar se 25 é divisivel por 5', () => {
    expect(myFizzBuzz(25)).toMatch("buzz");
  });
  test('Verificar se 2 não é divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test('Verificar se um parametro que não é um número se seu retorno será falso', () => {
    expect(myFizzBuzz('2')).toBe(false);
  });
});