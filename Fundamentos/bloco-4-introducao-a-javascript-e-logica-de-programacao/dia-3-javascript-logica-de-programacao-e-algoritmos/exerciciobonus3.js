let n = 5;
let aux = '';
let posicao = n;

for (let i = 1; i <= n; i += 1){
    for (let j = 1; j <= n; j += 1){
        if (j < posicao){
            aux += ' ';
        }
        else { 
            aux += '*';
        }
    }
    console.log(aux); 
    aux = '';
    posicao -= 1;
}
