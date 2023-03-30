// Objetos - Manipulación

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Impide modificar el objeto
Object.freeze(producto)

// Deja modificar las propiedades existentes, no permite añadir ni eliminar
Object.seal(producto)

// Reescribir el valor
producto.nombre = "Monitor curbo"

// Si no existe lo va a añadir
producto.imagen = "imagen.jpg"

// Eliminarlas
delete producto.disponible

console.table(producto);



