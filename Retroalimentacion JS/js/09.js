// Operaciones con arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array

// NO
// tecnologias.push('GraphQL') // Añade al final del Array
// tecnologias.unshift('GraphQL') // Añade al inicio del Array

// SI
// const nuevoArreglo = [...tecnologias, 'GraphQL']
// const nuevoArreglo = ['GraphQL',...tecnologias]

// Eliminar elementos del array

// NO
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 1) // Elimina de una posicion especifica

// SI
// const nuevoArray = tecnologias.filter(function(tech){
//     return tech === 'React'
// });

// Remplazar el Aarray

// NO
// tecnologias[0] = 'GraphQL'

// SI
// const nuevoArray =  tecnologias.map(function(tech){
//     if(tech == 'HTML'){
//         return 'GraphQL'
//     }else {
//         return tech
//     }
// });

console.table(tecnologias);
console.table(nuevoArray);