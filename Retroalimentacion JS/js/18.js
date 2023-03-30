// Comparacion y Operador Estricto

const numero1 = 20
const numero2 = "20"

/*
    == ( COmparacion pero no es estricto )
    === ( COmparacion pero si es estricto - Revisa el valor y tipo de dato )
*/
console.log(typeof numero1);
console.log(typeof numero2);

if(numero1 === Number(numero2)){
    console.log("Si, son iguales");
}else{
    console.log("No, no son iguales");
}

const autenticado = true

if(autenticado){
    console.log("Autenticado")
}