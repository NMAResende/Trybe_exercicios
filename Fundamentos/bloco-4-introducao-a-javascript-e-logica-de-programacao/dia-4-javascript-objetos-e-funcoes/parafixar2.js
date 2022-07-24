let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let hello in names){
    console.log('Olá ' + names[hello]);
  }