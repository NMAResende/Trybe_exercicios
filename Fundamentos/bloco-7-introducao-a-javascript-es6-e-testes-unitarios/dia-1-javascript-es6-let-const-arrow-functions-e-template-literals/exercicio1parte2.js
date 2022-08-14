const factorial = numero => numero >= 1 ? numero * factorial(numero -1) : 1;
const result = 4;

const imprimir = factorial(result);
console.log(`Esse é o fatorial ${imprimir}`);



