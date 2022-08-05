function getButton(event){
    event.preventDefault();
    }
    window.onload = function () {
        const botaoEnviar = document.getElementById('botao-enviar');
        botaoEnviar.addEventListener('click', getButton);
    }

function botaoApagar(){
    const apagar = document.getElementById('botao-apagar');

    apagar.addEventListener('click', botaoApagar);
}
function clearButton(){
    const botaoLimpar = document.querySelectorAll("input");
    for(let i = 0; i < botaoLimpar.length; i += 0){
        const analisarInput = botaoLimpar[i];
        if(analisarInput.value = ''){
            analisarInput.checked = false;
        };
    }
}
// Bônus
function authorization(){
    const autImg = document.getElementById('divulgacaoFoto');
    
    autImg.change(function(event) {
        let autImg = event.target;
        if (autImg.checked) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
})
}
autImg.addEventListener('click', authorization);