const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Julian",
    premium: true
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premium} = cliente

console.table(producto);

console.log(nombre);
console.log(nombreCliente);




