let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;

for (let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > valorMaior){
        valorMaior = numbers[i];
    }
}
console.log("O maior valor é", valorMaior);