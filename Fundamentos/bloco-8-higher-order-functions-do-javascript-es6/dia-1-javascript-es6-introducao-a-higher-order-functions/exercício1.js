const employeesNew = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return `${email}@trybe.com`;
}

const newEmployees = (employeesNew) => {
  const employees = {
    id1: employeesNew('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesNew('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesNew('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeesNew));