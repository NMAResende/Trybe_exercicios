const { encode, decode } = require('./encodeDecode');

describe('Testando as funções encode e decode', () => {
  test('Testar se  encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('Testar se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  test('Verificar se a vogal "a" é convertida em 1', () => {
    expect(encode('ala')).toEqual('1l1');
  });
  test('Verificar se a vogal "e" é convertida em 2', () => {
    expect(encode('even')).toEqual('2v2n');
  });
  test('Verificar se a vogal "i" é convertida em 3', () => {
    expect(encode('in')).toEqual('3n');
  });
  test('Verificar se a vogal "o" é convertida em 4', () => {
    expect(encode('oposto')).toEqual('4p4st4');
  });
  test('Verificar se a vogal "u" é convertida em 5', () => {
    expect(encode('urubu')).toEqual('5r5b5');
  });
  test('Verificar se a vogal 1 é convertida em "a"', () => {
    expect(decode('1l1')).toEqual('ala');
  });
  test('Verificar se a vogal 2 é convertida em "e"', () => {
    expect(decode('2v2n')).toEqual('even');
  });
  test('Verificar se a vogal 3 é convertida em "i"', () => {
    expect(decode('3n')).toEqual('in');
  });
  test('Verificar se a vogal 4 é convertida em "o"', () => {
    expect(decode('4p4st4')).toEqual('oposto');
  });
  test('Verificar se a vogal 5 é convertida em "u"', () => {
    expect(decode('5r5b5')).toEqual('urubu');
  });
});
