function higherValue(array){

    let maior = 0;
    for (let i = 0; i < array.length; i += 1){
    if (array[maior] < array[i]){
        maior = i;
    }
    
}
return maior;

}

console.log(higherValue([2, 3, 6, 7, 10, 1]));
