let ej1 = document.querySelector('#ej1')
let btn1 = document.querySelector('#btn1')
let edad1 = 0
let imput1 = document.querySelector('#Imput1')

let ej2 = document.querySelector('#ej2')
let btn2 = document.querySelector('#btn2')
let nombreUsuario = 'Fernando Fernandez'

let ej4 = document.querySelector('#ej4')
let btn4 = document.querySelector('#btn4')
let num = 10

let ej5 = document.querySelector('#ej5')
let btn5 = document.querySelector('#btn5')
let edad2 = 67

let ej6 = document.querySelector('#ej6')
let btn6 = document.querySelector('#btn6')
let dia = 'lunes'

let ej7 = document.querySelector('#ej7')
let btn7 = document.querySelector('#btn7')
let contra = 'secreto'
//-----------------------------------------------

btn1.onclick = function() {
    edad1 = imput1.value
   if (edad1 >= 18)
   {
       ej1.textContent = 'eres mayor de edad'
   } else {
       ej1.textContent = 'eres menor de edad'
   }
}

btn2.onclick = function() {
    if ((nombreUsuario == 'Nahuel') || (nombreUsuario == 'Marcos'))
    {
        ej2.textContent = 'Bienvenido ' + nombreUsuario + ', ¿Como estas?'
    } else {
        ej2.textContent = 'Bienvenido ' + nombreUsuario
    }
}

btn4.onclick = function () {
    if (num > 0)
    {
        ej4.textContent = 'el numero es positivo'
    } else if (num = 0){
        ej4.textContent = 'el numero es cero'
    } else {
        ej4.textContent = 'el numero es negativo'
    }
}

btn5.onclick = function () {
    if ((edad2 > 6) && (edad2 < 11))
    {
        ej5.textContent = 'niño'
    } else if ((edad2 > 12) && (edad2 < 18)) {
        ej5.textContent = 'Adolecente'
    } else if ((edad2 > 19) && (edad2 < 26)) {
        ej5.textContent = 'Joven'
    } else if ((edad2 > 27) && (edad2 < 59)) {
        ej5.textContent = 'Adulto'
    } else if (edad2 > 60) {
        ej5.textContent = 'Anciano'
    } else {
        ej5.textContent = 'bebé'
    }
}

btn6.onclick = function () {
    if ((((dia == 'lunes') || (dia == 'martes')) || ((dia == 'miercoles') || (dia == 'jueves'))) || (dia == 'viernes'))
    {
        ej6.textContent = 'es dia laboral'
    } else if ((dia == 'sabado') || (dia == 'domingo')) {
        ej6.textContent = 'es finde'
    }
}

btn7.onclick = function () {
    if (contra == 'secreto')
    {
        ej7.textContent = 'acceso concedido'
    } else {
        ej7.textContent = 'acceso denegado'
    }
}
