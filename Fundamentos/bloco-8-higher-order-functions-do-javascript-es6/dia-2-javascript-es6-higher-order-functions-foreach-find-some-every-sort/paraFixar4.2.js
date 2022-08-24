const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const ordenardecrescente = () => people.sort((a, b) => a.age > b.age ? -1 : 1);


console.log(ordenardecrescente());