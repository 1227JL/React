// Unir dos objetos o más

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Julian",
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente) // No
// const nuevoObjeto2 = {...producto, ...cliente}

const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);