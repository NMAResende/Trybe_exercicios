
const acordado = () => 'Acordado!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const resultado = callback();
  console.log(resultado);
}

// Ao chamar a função doingThings:
doingThings(acordado);
doingThings(cafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!