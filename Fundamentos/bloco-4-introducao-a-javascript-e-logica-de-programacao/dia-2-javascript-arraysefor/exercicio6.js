let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for (let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 !== 0){
      cont += 1; 
    } 
}
if (cont === 0){
    console.log("nenhum valor ímpar encontrado");  
}else{
    console.log("Existe", cont, "números ímpares");
}


