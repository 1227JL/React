// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments"


const consultarApi = ()=>{
    fetch(url)
        .then(respuesta=> respuesta.json())
        .then(resultado=>{
            resultado.forEach(comentario => {
                console.log(comentario);
            });
        })
}

consultarApi()