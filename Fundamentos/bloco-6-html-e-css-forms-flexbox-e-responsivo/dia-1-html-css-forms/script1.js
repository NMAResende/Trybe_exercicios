function getButton(event) {
    event.preventDefault();
}
window.onload = function () {
    const botaoEnviar = document.getElementById('botao-enviar');
    botaoEnviar.addEventListener('click', getButton);
}

function botaoApagar() {
    const apagar = document.getElementById('botao-apagar');

    apagar.addEventListener('click', botaoApagar);
}
function clearButton() {
    const botaoLimpar = document.querySelectorAll("input");
    for (let i = 0; i < botaoLimpar.length; i += 0) {
        const analisarInput = botaoLimpar[i];
        if (analisarInput.value = '') {
            analisarInput.checked = false;
        };
    }
}
// Bônus
// function authorization(){
//     const autImg = document.getElementById('divulgacaoFoto');
//     autImg.change(function(event) {
//         let autImg = event.target;
//         if (autImg.checked) {
//             button.disabled = false;
//         } else {
//             button.disabled = true;
//         }
// })
// }

function authorization(inputs) {
    let autImg = true;
    inputs.forEach(function (input) {

        if (input.value === "") {
            autImg = false;
        }
    });
    return autImg;
}
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach(function (input) {
    input.addEventListener("keyup", function () {
        if (authorization(inputs)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});
