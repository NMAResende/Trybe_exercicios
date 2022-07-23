let number = 5;
let primo = 1;

for (let i = 2; i <= number; i += 1){
  
    if (number % i === 0) primo += 1;
   }
   if(primo == 2)console.log (number + ' é primo');
   else console.log(number + ' não é primo');
   

