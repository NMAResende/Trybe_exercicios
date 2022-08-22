const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((arr) => arr === name);
  

console.log(hasName(names, 'Ana'))