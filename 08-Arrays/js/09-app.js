//.forEach para iterar un array
const carrito = [];


const producto1 = {
    nombre: 'tablet',
    precio: 20,
}
carrito.shift(producto1);

const producto2 = {
    nombre: 'Teclado gamer',
    precio: 40,
}
carrito.push(producto2);

const producto3 = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 200,
}

carrito.push(producto3);

console.table(carrito);


const producto4 = {
    nombre: 'Mouse',
    precio: 20.29,
}
carrito.push(producto4);
const producto5 = {
    nombre: 'Bicicleta',
    precio: 70,
}
carrito.unshift(producto5);

 console.table(carrito);


/* */


