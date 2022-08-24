const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const reduzirArray = arrays.reduce((acc, curr) => `${acc} ${curr}`);
  return reduzirArray;
};
console.log(flatten());