let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
  let moradorDoBlocoDois = moradores.blocoDois;
  let ultimoMorador = moradorDoBlocoDois[moradorDoBlocoDois.length -1];
  console.log('O morador do bloco 2 de nome ' + ultimoMorador.nome + ' ' + ultimoMorador.sobrenome + ' mora no ' + ultimoMorador.andar + ', apartamento ' + ultimoMorador.apartamento);

  