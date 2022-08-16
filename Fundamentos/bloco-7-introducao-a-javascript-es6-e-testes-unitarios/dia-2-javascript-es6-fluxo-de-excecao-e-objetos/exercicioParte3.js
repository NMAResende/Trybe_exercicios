const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//exercício 1
const changeLesson2 = (obj, key,  value) =>{
  key = 'turno';
  value = 'noite';
  let turno = value;
  obj = lesson2[key];
  lesson2[key] = turno;
}
changeLesson2();
console.log(lesson2);

//exercício 2
const keyObj = obj => {
  return Object.keys(obj);
}
console.log(keyObj(lesson3));

//exercício 3
const size = obj => {
  return Object.keys(obj).length;
}
console.log(size(lesson1));

//exercício 4
const valueObj = obj => {
  return Object.values(obj);
}
console.log(valueObj(lesson2));

//exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//exercício 6
const totalAlunos = obj => {
  let sum = 0;
  const key = Object.keys(obj);
  for (let value in key) {
    sum += obj[key[value]].numeroEstudantes;
    
  }
  return sum;
}
console.log(totalAlunos(allLessons));

//exercício 7
const valueKey = (obj, i, value) => Object.values(obj)[i][value];
console.log(valueKey(allLessons, 0))
 




