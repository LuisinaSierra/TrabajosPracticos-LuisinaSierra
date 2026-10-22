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