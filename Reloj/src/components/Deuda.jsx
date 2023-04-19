import { useState, useEffect } from 'react'
import { formatearFecha } from '../helpers'

const Deuda = ({deuda, setDeudaEditar, openModalDeuda}) => {

  const {nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion, estado, id, fecha} = deuda

  return (
    <>
        <tr className='p-10'>
          <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{identificacion}</td>
            <td>{telefono}</td>
            <td>{correo}</td>
            <td>{estado ? 'Pendiente' : 'Finalizada'}</td>
            <td className='p-2'>
              <button
                onClick={()=>{
                  setDeudaEditar(deuda)
                  openModalDeuda()
                }}
                className='bg-blue-500 p-1 px-6 text-white rounded-md shadow-lg hover:shadow-xl transition duration-300'>Ver Deuda
              </button>
            </td>  
        </tr>
        
        
    </>
  )
}

export default Deuda