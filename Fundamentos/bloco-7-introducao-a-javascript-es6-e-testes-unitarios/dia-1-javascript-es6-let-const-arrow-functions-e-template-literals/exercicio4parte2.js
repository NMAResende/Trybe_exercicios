
const substituaX = (nome) => {
  const frase = 'Trybe x aqui!';
  const changeName = frase.replace('x', nome);
  return changeName;
}
console.log(substituaX('Bebeto'));

const minhasSkills = (funcao) => {
  const skills = ['HTML', 'CSS', 'JS'];
  let concatene = `${funcao} Minhas três principais habilidades são: ${skills}`;
  return concatene;
}
console.log(minhasSkills(substituaX('Bebeto')));