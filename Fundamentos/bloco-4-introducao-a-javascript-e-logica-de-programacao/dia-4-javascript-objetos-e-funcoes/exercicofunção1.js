function checkPalindrome(word){
    let reverse = word.split("").reverse().join("")
    return word === reverse
  }
  
  
  console.log(checkPalindrome("arara"));
  console.log(checkPalindrome('desenvolvimento'));

  // Referência:
  // https://pt.stackoverflow.com/questions/315456/fun%C3%A7%C3%A3o-para-checar-pal%C3%ADndromo
  

