
export async function obtenerClientes(){
    
    const response = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await response.json()

    return resultado;

}

export async function obtenerCliente(id){
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await response.json()

    return resultado;

}

export async function agregarCliente(datos){

    try{
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST', // Por Default el metodo es GET si es diferente se debe especificar
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json()
    }catch (error){
        console.error(error);
    }

}

export async function actualizarCliente(id, datos) {
    
}