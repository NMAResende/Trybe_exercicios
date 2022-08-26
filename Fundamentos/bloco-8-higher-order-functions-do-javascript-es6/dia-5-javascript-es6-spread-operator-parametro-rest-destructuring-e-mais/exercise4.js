
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
//bornIn: nascido em

// escreva filterPeople abaixo

function filterPeople(array) { 
  const nomesAustralia = array.filter(
    ({name, nationality, bornIn}) => {
      if(nationality === 'Australian' && bornIn > 1900 && bornIn < 2000) {
         return name;
      }
    })
    return nomesAustralia;
}

console.log(filterPeople(people));