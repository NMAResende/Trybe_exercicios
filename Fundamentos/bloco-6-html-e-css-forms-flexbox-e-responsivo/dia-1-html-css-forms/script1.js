function getButton(event){
    event.preventDefault();
    }
    window.onload = function () {
        const botaoEnviar = document.getElementById('botao-enviar');
        botaoEnviar.addEventListener('click', getButton);
    }
    



