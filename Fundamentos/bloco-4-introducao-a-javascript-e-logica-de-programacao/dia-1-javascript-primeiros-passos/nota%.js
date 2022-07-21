let porcentagem = '110';

switch (porcentagem){
    case '90':
        console.log('A');
        break;
    case '80':
        console.log('B');
        break;
    case '70':
        console.log('C');
        break;
    case '60':
        console.log('D');
        break;
    case '50':
        console.log('E');
        break;
    case '40':
        console.log('F');
        break;
    default:
        if(porcentagem < 0 || porcentagem > 100){
            console.log('Mensagem de erro')
        }
}