function maior(a, b) {
    if (a > b) {
      return a + ' é maior que ' + b;
    } else if (b > a) {
      return b+ ' é maior que ' + a;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maior(10, 50));
  