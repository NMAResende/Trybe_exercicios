function valueRepeats (arraynumbers){

    let cont = 0;
    let number = 0;
    for (let i = 0; i < arraynumbers.length; i += 1){
        if (arraynumbers[i] === i){
            cont ++;
            number = arraynumbers[i]
        }
    }
    return number;
}
console.log(valueRepeats([2, 3, 2, 5, 8, 2, 3]));