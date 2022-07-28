
  function wordAndEnd(word, ending) {
    let wordReverse = word.split('').reverse().join('');
    let endWordReverse = ending.split('').reverse().join('');
    let result;
  
    for (let i = 0; i < endWordReverse.length; i += 1) {
      if (wordReverse[i] !== endWordReverse[i]) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(wordAndEnd('trybe', 'be')); 
  console.log(wordAndEnd('joaofernando', 'fernan')); 