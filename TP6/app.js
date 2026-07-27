let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let text = document.querySelector('#text')

btn1.onclick = function () {
    text.style.backgroundColor = 'red'
}

btn2.onclick = function () {
    text.textContent = 'hola el texto cambio hola'
}

btn3.onclick = function() {
    text.style.color = 'white'
}