let btn1 = document.querySelector('#btn1')
let text1 = document.querySelector('#text1')
let inputnum1 = document.querySelector('#inputnum1')
let inputnum2 = document.querySelector('#inputnum2')

function numeromayor(n1, n2) 
{
    let resultado
    if (n1 > n2){
        resultado = n1 + ' ' + 'es superior'
    } else if (n2 > n1) {
        resultado = n2 + ' ' + 'es superior'
    }
    return resultado
}

btn1.onclick = function() {
    text1.textContent = numeromayor(inputnum1.value, inputnum2.value)
}

///////////act2/////////////

let btn2 = document.querySelector('#btn2')
let text2 = document.querySelector('#text2')
let inputnum1punto2 = document.querySelector('#inputnum1punto2')
let inputnum2punto2 = document.querySelector('#inputnum2punto2')

function numeromenor(n1, n2) 
{
    let resultado
    if (n1 < n2){
        resultado = n1 + ' ' + 'es menor'
    } else if (n2 < n1) {
        resultado = n2 + ' ' + 'es menor'
    }
    return resultado
}

btn2.onclick = function() {
    text2.textContent = numeromenor(inputnum1punto2.value, inputnum2punto2.value)
}


////////////////ACT3///////////////

let btn3 = document.querySelector('#btn3')
let text3 = document.querySelector('#text3')
let inputnum1punto3 = document.querySelector('#inputnum1punto3')
let inputnum2punto3 = document.querySelector('#inputnum2punto3')

function numeroigual(n1, n2)
{
    if (n1 == n2){
        return 'los numeros son iguales'
    }else{
        return 'los numeros no son iguales'
    }

}

btn3.onclick = function() {
    text3.textContent = numeroigual(inputnum1punto3.value, inputnum2punto3.value)
}