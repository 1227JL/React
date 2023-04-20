

export const generarId = ()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatearFecha = (fecha, index) => {
    const date = new Date(fecha)
    date.setMonth(date.getMonth() + index) // se aumenta un mes por cada iteración
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return date.toLocaleDateString('es-ES', opciones)
}