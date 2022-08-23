function encode(p) {
  return p.replaceAll('a', 1)
    .replaceAll('e', 2)
    .replaceAll('i', 3)
    .replaceAll('o', 4)
    .replaceAll('u', 5);
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(encode('go Trybe!'));

function decode(p) {
  return p.replaceAll(1, 'a')
    .replaceAll(2, 'e')
    .replaceAll(3, 'i')
    .replaceAll(4, 'o')
    .replaceAll(5, 'u');
}
console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));
console.log(decode('g4 Tryb2!'));

module.exports = {encode, decode};