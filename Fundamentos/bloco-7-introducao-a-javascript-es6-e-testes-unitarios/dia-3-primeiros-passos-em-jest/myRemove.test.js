const myRemove = require('./myRemove');

describe('myRemove', () => {
   test('Verificar se o array [1,2,3,4] remove o 3', () => {;
    const arr = [1,2,3,4];
   expect([1,2,4]).toEqual(myRemove(arr, 3));
});
   test('Verificar se o array [1,2,3,4] não remove o 3', () => {
    const arr = [1,2,3,4];
   expect([1,2,3,4]).not.toEqual(myRemove(arr, 3));
});
test('Verificar se o array [1,2,3,4] não remove o 5, pois não está dentro do array', () => {
  const arr = [1,2,3,4];
 expect([1,2,3,4]).toEqual(myRemove(arr, 5));
});
})
