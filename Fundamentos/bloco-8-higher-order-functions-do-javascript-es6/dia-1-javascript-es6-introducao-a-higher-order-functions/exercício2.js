const comparacao = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado

const numberGenerator = (meuNumero, callback) => {
  const numeroAleatorio = Math.floor((Math.random() * 5) + 1);
 return callback(meuNumero, numeroAleatorio) ? "Parabéns você ganhou" : "Tente novamente";
}
//sorteio(5, numberGenerator);
console.log(numberGenerator(5, comparacao));