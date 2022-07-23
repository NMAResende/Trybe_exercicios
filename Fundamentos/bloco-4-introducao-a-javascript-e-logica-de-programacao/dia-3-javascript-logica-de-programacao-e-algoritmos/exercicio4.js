let primo = 0;

for (let i = 2; i <= 50; i += 1){
   let eprimo = true;
   for (let j = 2; j < i; j += 1){
    if (i % j === 0){
        eprimo = false;
    }
   }
   if(eprimo){
    primo = i;
   }
}
console.log(primo);