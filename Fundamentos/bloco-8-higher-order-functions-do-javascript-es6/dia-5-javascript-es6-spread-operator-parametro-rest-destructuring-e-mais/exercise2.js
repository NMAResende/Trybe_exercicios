function sum(...numbers) {
  const numeros = numbers.reduce((acc, curr) => acc + curr)
  return numeros;
}
console.log(sum(4, 5, 6));