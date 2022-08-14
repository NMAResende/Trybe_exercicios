
const longestWord = frase =>{
  const splits = frase.split(" ");
  let maiorPalavra = '';
  let word = null;
for (let i = 0; i < splits.length; i++){
    if(splits[i].length > maiorPalavra){
       maiorPalavra = splits[i].length;
       word = splits[i];
    }
}
return word;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

