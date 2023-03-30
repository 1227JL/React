// Objetos

// const nombre = "Tablet"
// const precio = 300
// const disponible = true

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.table(producto);

// console.log(producto.precio);


// Destructuring 

const { nombre, precio, disponible } = producto
console.log(nombre);
console.log(precio);
console.log(disponible);


// Object Literal Enhacement

const autenticado = true

const usuario = "Julian"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)