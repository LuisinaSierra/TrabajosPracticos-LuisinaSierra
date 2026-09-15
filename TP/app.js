let numero = 0
let text = document.querySelector('#text')
let boton = document.querySelector('#boton')

boton.onclick = function() {
    numero = numero + 1
    text.textContent = numero
}
