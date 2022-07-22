let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1){
    for (let j = 0; j < i; j += 1){
        if (numbers[i] > numbers[j]){
            let aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
            
        }

    }
}
console.log(numbers);
