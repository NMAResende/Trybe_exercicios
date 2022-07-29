function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
 
function createdays(){
   const ulPai = document.getElementById('days');

for (let i=0; i<decemberDaysList.length; i+=1){
  let day = decemberDaysList[i];
  const dayLi = document.createElement('li');
  dayLi.innerHTML = day;
 if(day === 24 || day === 31){
  dayLi.className = "day holiday";
  ulPai.appendChild(dayLi);
 } else if (day === 4 || day === 11 || day === 18){
  dayLi.className = 'day friday';
  ulPai.appendChild(dayLi);
 } else if (day === 25){
  dayLi.className = 'day holiday friday'
  ulPai.appendChild(dayLi);
 } else{
  dayLi.className = 'day';
  ulPai.appendChild(dayLi);
 }
}
}
createdays();
