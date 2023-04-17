import React from 'react'

const Deuda = ({deudor, setDeudor}) => {
  return (
    <div>
        <tr className='p-10'>
            {/* <td>{deudor.nombre}</td>
            <td>{deudor.apellido}</td>
            <td>{deudor.identificacion}</td>
            <td>{deudor.telefono}</td>
            <td>{deudor.correo}</td>
            <td>{deudor.estado}</td> */}
            <td className='p-2'><button className='bg-blue-500 p-1 px-6 text-white rounded-md shadow-lg hover:shadow-xl transition duration-300'>Editar</button></td>
        </tr>
    </div>
  )
}

export default Deuda