let numero = 0
let text = document.querySelector('#text')
let boton = document.querySelector('#boton')

boton.onclick = function() {
    numero = numero + 5
    text.textContent = numero + ' ' + 'carrot'

    if (numero >= 10) {
        text.style.color = 'red'
    }
    if (numero >= 20) {
        text.style.color = 'orange'
    }
    if (numero >= 30){
        text.style.color = 'yellow'
    }
    if (numero >= 40) {
        text.style.color = 'green'
    }
    if (numero >= 50) {
        text.style.color = 'blue'
    }
    if (numero >= 60) {
        text.style.color = 'purple'
    }
    if (numero >= 70) {
        text.style.color = 'pink'
    }
}