function largerName(arrayName){


let maiorPalavra = arrayName[0];

for (let i = 0; i < arrayName.length; i++){
    if(arrayName[i].length > maiorPalavra.length){
       maiorPalavra = arrayName[i];
    }
    
   
}
return maiorPalavra;
}
console.log(largerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

