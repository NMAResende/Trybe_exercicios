
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = {...user, ...jobInfos};

//console.log(trappistEnterprise);

const {
name,
age,
nationality,
profession,
squad,
squadInitials
} = trappistEnterprise;

const frase = `Hi, my name is ${name}, I'm ${age} and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(frase);