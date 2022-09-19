const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>{
    const currLetraA = curr.split('');
    const letraA = currLetraA.map((letra) => {
      if(letra === 'A' || letra === 'a'){
        acc++;
    }
    })
    return acc
  },0)
  
 exercicios/8.5

  main
}
console.log(containsA());
