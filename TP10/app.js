//ACTIVIDAD 1
console.log('Actividad 1')

let utiles = ['Lapiz', 'Goma', 'Regla', 'Cuaderno', 'Lapicera'];

console.log(utiles);

console.log(utiles[0]);

console.log(utiles[2]);

console.log(utiles[utiles.length - 1]);

console.log(utiles.length);

utiles.push('Mochila')
console.log(utiles);

utiles.unshift('Cartuchera')
console.log(utiles)

console.log(utiles.length)

console.log(utiles[utiles.length - 1])
utiles.pop()
console.log(utiles)

console.log(utiles[0])
utiles.shift()
console.log(utiles)
console.log(utiles.length)

//ACTIVIDAD 2
console.log('Actividad 2')
let productos = ['Leche', 'Pan', 'Arroz', 'Fideos', 'Aceite'];

console.log(productos)
console.log(productos.length)

productos.push('Azucar')
productos.push('Yerba')
productos.push('Café')
console.log(productos)
productos.unshift('sal')
productos.unshift('galletitas')
console.log(productos)
console.log(productos[productos.length - 1])
productos.pop()
console.log(productos[productos.length - 1])
productos.pop()
console.log(productos)
console.log(productos[0])
productos.shift()
console.log(productos)
console.log(productos.length)

//ACTIVIDAD 3
console.log('Actividad 3')

let productos2 = ['teclado', 'Mouse', 'Monitor', 'Auriculares', 'Webcam', 'Parlantes']

console.log(productos2[productos2.indexOf('Mouse')])

console.log(productos2[productos2.indexOf('Monitor')])

console.log(productos2[productos2.indexOf('Webcam')])

console.log(productos2[productos2.indexOf('Impresora')])

let posteclado = productos2.indexOf('Teclado')

if (posteclado == -1) {
    console.log('no esta teclado')
} else {
    console.log('esta teclado')
}
//if (productos2.includes('Teclado') == false) {
//    console.log('no esta teclado')
//} else if (productos2.includes('Teclado') == true){
//    console.log('si esta teclado')
//}
let posimpresora = productos2.indexOf('Impresora')

if (posimpresora = -1) {
    console.log('no esta Impresora')
} else {
    console.log('esta impresora')
}

productos2.push('Impresora')

if (posimpresora = -1) {
    console.log('no esta Impresora')
} else {
    console.log('esta impresora')
}

//if (productos2.includes('Impresora') == false) {
//    console.log('no esta impresora')
//} else if (productos2.includes('Impresora') == true){
//    console.log('si esta impresora')
//}

console.log(productos2.length)

//ACTIVIDAD 4
console.log('Actividad 4')
let videojuegos = ['Minecraft', 'Pokemon Cristal', 'Super Mario', 'The Legend of Zelda', 'Sonic']

console.log(videojuegos)
console.log(videojuegos.length)
videojuegos.push('Animal Crossing')
videojuegos.push('Pokemon Rojo')
console.log(videojuegos)
videojuegos.unshift['Tetris']
videojuegos.unshift['Pac-Man']
console.log[videojuegos]
console.log(videojuegos.indexOf('Pokemon Cristal'))
console.log(videojuegos.indexOf('Sonic'))
console.log(videojuegos.indexOf('FIFA'))
console.log(videojuegos.length - 1)
videojuegos.pop()
