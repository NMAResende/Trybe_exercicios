function maior(a, b, c) {
    if (a > b && a > c) {
      return a + ' é maior';
    } else if (b > a && b > c) {
      return b+ ' é maior';
    }
    else if(c > a && c > b) {
        return c + ' é o maior';
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maior(10, 50, 100));