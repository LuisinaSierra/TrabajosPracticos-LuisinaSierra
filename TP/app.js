let numero = 0
let text = document.querySelector('#text')
let boton = document.querySelector('#boton')
let mult = document.querySelector('#x2')
let suma = 1

boton.onclick = function() {
    numero = numero + suma
    text.textContent = numero + ' ' + 'carrot'

    if (numero >= 10) {
        text.style.color = 'green'
    }
    if (numero >= 20) {
        text.style.color = 'blue'
    }
    if (numero >= 30) {
        text.style.color = 'red'
    }
}

mult.onclick = function() {
    if (numero >= 20) {
        numero = numero - 20
        text.textContent = numero + ' ' + 'carrot'
        suma = suma * 2
    }
}