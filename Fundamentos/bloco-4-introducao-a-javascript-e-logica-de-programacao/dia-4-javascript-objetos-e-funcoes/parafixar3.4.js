
function angulosTriangulos (a, b, c) {


let somaAngulos = a + b + c;

let angulosDoTriangulo = a > 0 && b > 0 && c > 0;

if (angulosDoTriangulo){
    if (somaAngulos === 180){
        return true;
    }
    else{
       return false;
    };
}else{
    return"Erro: ângulo inválido";
}
}
console.log(angulosTriangulos(40, 39, 100));