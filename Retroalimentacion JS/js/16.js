
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;

// Filter
nuevoArray2 = tecnologias.filter(tech => tech !== 'React')


// Comprobar si un elemento existe en el Array
// const resultado = tecnologias.includes('React')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumple la condición
// const resultado = numeros.find(numero => numero > 5)

// Every - Returna true o false si todos cumplen la condicion
// const resultado = numeros.every( numero => numero > 4)

// Reduce
// const resultado = numeros.reduce((total, numero) => numero + total, 0)

// Filter
// const resultado = tecnologias.filter(tech => tech !== 'Node.js')
// const resultado = numeros.filter(numeros => numeros !== 10)

// ForEach

tecnologias.forEach((tech, index) => console.log(index))

const arrayMap = tecnologias.map(tech => tech)

console.table(arrayMap);

// PAGINA PARA SABER SI UN ARRAY METHOD MUTA O NO: doesitmutate.xyz