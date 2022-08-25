const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const newObj = students.map ((estudante, index) => ({
    name: estudante,
    grades: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length,
  })
  
  )
    return newObj;
}
console.log(studentAverage());