let ej1 = document.querySelector('#ej1')
let btn1 = document.querySelector('#btn1')
let edad = 30
let ej2 = document.querySelector('#ej2')
let btn2 = document.querySelector('#btn2')
let nombreUsuario = 'Fernando Fernandez'
//-------------------
btn1.onclick = function() {
   if (edad >= 18)
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