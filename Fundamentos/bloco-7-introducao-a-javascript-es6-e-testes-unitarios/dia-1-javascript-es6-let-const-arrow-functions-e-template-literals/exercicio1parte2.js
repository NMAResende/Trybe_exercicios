const factorial = numero => numero >= 1 ? numero * factorial (numero -1) : 1;
console.log(factorial(12));