let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  },

 info2 =  {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (let disney in info){
    if (disney === 'recorrente' && info[disney] === 'Sim' && info2[disney] === 'Sim'){
        console.log('Ambos recorrentes');
    }else{
        console.log(info[disney] + ' e ' + info2[disney]);
    }
}

