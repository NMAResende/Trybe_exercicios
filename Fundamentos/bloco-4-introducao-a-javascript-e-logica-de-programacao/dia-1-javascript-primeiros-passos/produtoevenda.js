const custoProduto = 20;
const valorVenda = 50;

let impostoSobreOCusto = custoProduto * 0.2;

let valorCustoTotal = custoProduto + impostoSobreOCusto;

let lucro = valorVenda - valorCustoTotal;

let lucroTotal = lucro * 1000;

console.log('O lucro total será R$ ' + lucroTotal +",00");