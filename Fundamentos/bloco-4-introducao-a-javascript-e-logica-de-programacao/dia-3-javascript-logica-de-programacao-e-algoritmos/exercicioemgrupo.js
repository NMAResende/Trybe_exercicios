
// exercicio 1
let soma = 0;

for (let i = 1; i <= 50; i++){
 soma += i;
}
console.log('A soma de 1 a 50 é: ' + soma);


// exercicio 2
let cont = 0;

for (let i = 2; i <= 150; i++){
    if (i % 3 === 0){
     cont ++;
    } 
}
if (cont === 50){
    console.log('Mensagem secreta é ' + cont + ', ' + 'você descobriu o segredo');
}

// exercicio 3
let pessoaX = 20;
let pessoaY = 18;
let pessoaZ = 52;

if (pessoaX < pessoaY && pessoaX < pessoaZ){
   console.log('PessoaX é a mais nova');
} 
else if (pessoaY < pessoaX && pessoaY < pessoaZ){
 console.log('PessoaY  é a mais nova');
}
else {
    console.log('PessoaZ é a mais nova');
}



