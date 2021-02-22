let inputLenght = document.querySelector('[ name=tamanho ]')
let outputLenght = document.querySelector('[ name=valortamanho ]')

function showLength() {
    outputLenght.value = inputLenght.value
}

inputLenght.oninput = showLength