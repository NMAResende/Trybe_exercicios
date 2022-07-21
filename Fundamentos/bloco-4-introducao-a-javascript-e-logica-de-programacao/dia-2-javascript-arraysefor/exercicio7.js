let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMenor = 9999;

for (let i = 0; i < numbers.length; i += 1){
    if(numbers[i] < valorMenor){
        valorMenor = numbers[i];
    }
}
console.log("O maior valor é", valorMenor);