let n = 5;
let aux = '';
let meio = (n + 1) / 2;
let controleesq = meio;
let controledir = meio;


for (let i = 1; i <= meio; i += 1){
    for (let j = 1; j <= n; j += 1){
        if (j >= controleesq && j <= controledir){
            aux += '*';
        }
        else { 
            aux += ' ';
        }
    }
    console.log(aux); 
    aux = '';
   controledir += 1;
   controleesq -= 1; 
}
