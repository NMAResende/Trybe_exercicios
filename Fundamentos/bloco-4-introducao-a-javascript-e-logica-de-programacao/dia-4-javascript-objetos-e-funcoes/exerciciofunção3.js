function lowerValue(array){

    let menor = 0;
    for (let i = 0; i < array.length; i += 1){
    if (array[menor] > array[i]){
        menor = i;
    }
    
}
return menor;

}

console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));