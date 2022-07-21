let pecaxadrez = 'cavalo';

switch (pecaxadrez.toLowerCase()){ 
    case 'rei':
        console.log('Move em todas as direções, uma casa por vez.');
        break;
    case 'rainha':
        console.log('Move em todas as direções, quantas casas quiser.');
        break;
    case 'torre':
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;
    case 'bispo':
        console.log('Move-se na diagonal, quantas casas quiser.');
        break;    
    case 'cavalo':
        console.log('Realiza moviemnto em L e pode pular as outras peças');
        break;      
    case 'peão':
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
        break;      
    default:
        console.log('Mensagem de erro.')
} 