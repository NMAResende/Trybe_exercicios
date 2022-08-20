const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const acertoQuestoes = (RIGHT_ANSWERS, STUDENT_ANSWERS, () => {
  let count = 0;
  for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
         count += 1;
    }else if (STUDENT_ANSWERS[i] === 'N.A'){
      count = count;
    }
    else if (RIGHT_ANSWERS[i] !== STUDENT_ANSWERS){
      count -= 0.5;
    }
  }
  return count;
})

console.log(acertoQuestoes(RIGHT_ANSWERS, STUDENT_ANSWERS));




