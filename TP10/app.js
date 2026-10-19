let nombres = ['Alvaro', 'Ignacio', 'Bruno']
let n1 = document.querySelector('h1')

nombres[1] = 'arturo kirklandia'
nombres[3] = 'martillo'
nombres.push('pppp')
nombres.pop()
nombres.unshift('jajejijoju')
nombres.shift()

n1.textContent = nombres
