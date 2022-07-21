
let aliquotaInss;
let aliquotaIr;
const salarioBruto = 3000.00;

if (salarioBruto <= 1556.94){
    aliquotaInss = salarioBruto * 0.08;
}else if (salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * 0.09;
}else if (salarioBruto <= 5189.82){
    aliquotaInss = salarioBruto * 0.11;
}else {
    aliquotaInss = 570.88;
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98){
    aliquotaIr = 0;
}else if (salarioBase <= 2826.65){
    aliquotaIr = (salarioBase * 0.075) - 142.80;
}else if (salarioBase <= 3751.05){
    aliquotaIr = (salarioBase * 0.15) - 354.80;
}else if (salarioBase <= 4664.68){
    aliquotaIr = (salarioBase * 0.225) - 636.13;
}else {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
}



console.log(salarioBase - aliquotaIr);


