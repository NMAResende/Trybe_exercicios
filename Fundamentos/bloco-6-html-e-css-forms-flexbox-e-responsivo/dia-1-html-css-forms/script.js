// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function getHref(event){
event.preventDefault();
console.log(getHref)
}
HREF_LINK.addEventListener('click', getHref);

function getCheckbox (event){
    event.preventDefault();
    console.log(getCheckbox);
}
INPUT_CHECKBOX.addEventListener('click', getCheckbox);

function getText(event){
    let letter = event.key;
    if (letter !== 'a'){
        event.preventDefault();
    }
    console.log(getText);
}
INPUT_TEXT.addEventListener('keypress', getText);