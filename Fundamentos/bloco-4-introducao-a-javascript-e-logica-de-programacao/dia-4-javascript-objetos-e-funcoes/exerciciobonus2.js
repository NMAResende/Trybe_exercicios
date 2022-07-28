let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
    const resultado = [];
    for (let i = 0; i < vector.length; i += 1){
        const numbers = vector[i];
        for(let j = 0; j < numbers.length; j += 1){
            const current = numbers[j];
        if(current % 2 === 0){
            resultado.push(current);
        }
        }
    }
    return resultado;
}
console.log(arrayOfNumbers(vector));