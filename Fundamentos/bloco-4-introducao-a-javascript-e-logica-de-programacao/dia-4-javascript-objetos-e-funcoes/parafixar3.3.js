
function positiveOrNegative (a){
if (a > 0){
   return a + ' é positivo';
}
else if (a < 0){
   return a + ' é negativo';
}
else {
    return 'Zero';
}
}

console.log(positiveOrNegative(-7));
