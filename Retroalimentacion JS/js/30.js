// Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"


// const consultarApi = ()=>{
//     fetch(url)
//         .then(respuesta=> respuesta.json())
//         .then(resultado=>{
//             resultado.forEach(comentario => {
//                 console.log(comentario);
//             });
//         })
// }

const consultarApi = async ()=>{
    const respuesta = await fetch(url)
    // console.log(respuesta);
    // console.log("despues de respuesta");
    const resultado = await respuesta.json()
    // console.log("despues de resultado");
    resultado.forEach(comentario => {
        console.log(comentario);
    });
}

consultarApi()