let n = 5;
let aux = '';
let posicao = n-1;

for (let i = 0; i < n; i += 1){
    for (let j = 0; j < n; j += 1){
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
