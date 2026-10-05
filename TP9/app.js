let btn1 = document.querySelector('#btn1')
let text1 = document.querySelector('#text1')
let inputnum1 = document.querySelector('#inputnum1')
let inputnum2 = document.querySelector('#inputnum2')
let num1 = inputnum1.value
let num2 = inputnum2.value

function numeromayor(n1, n2) {
    let resultado
    if (n1 > n2){
        resultado = n1 + ' ' + 'es superior a ' + n2
    } else if (n2 > n1) {
        resultado = n2 + ' ' + 'es superior a ' + n1
    }
    return resultado
}

btn1.onclick = function() {
    text1.textContent = numeromayor(num1, num2)
}