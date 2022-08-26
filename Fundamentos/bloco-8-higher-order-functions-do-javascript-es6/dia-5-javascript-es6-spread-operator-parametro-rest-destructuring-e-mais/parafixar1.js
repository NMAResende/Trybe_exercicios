const specialFruit = ['morango', 'amora', 'banana'];
const additionalItens = ['laranja', 'kiwi', 'maçã'];

function fruitSalad(fruit, additional){
  
  const totalFrutas = [...fruit, ... additional];
  return totalFrutas;
}

console.log(fruitSalad(specialFruit, additionalItens));