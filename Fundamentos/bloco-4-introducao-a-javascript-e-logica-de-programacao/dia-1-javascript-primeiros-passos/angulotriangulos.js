const anguloA = 40;
const anguloB = 39;
const anguloC = 100;

let somaAngulos = anguloA + anguloB + anguloC;

let angulosDoTriangulo = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosDoTriangulo){
    if (somaAngulos === 180){
        console.log(true)
    }
    else{
        console.log(false)
    };
}else{
    console.log("Erro: ângulo inválido");
}