

function getButton(event){
    event.preventDefault();
    }
    window.onload = function (){
        const botaoEnviar = document.querySelector("#botao-enviar");
        botaoEnviar.addEventListener('click', getButton);
    }
    



