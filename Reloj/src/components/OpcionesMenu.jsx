import React from 'react'

const OpcionesMenu = ({menu, setMenu}) => {
  return (
    <ul className='justify-around mt-2'>
        <li
            className='p-2 bg-white rounded-md hover:bg-gray-200 cursor-pointer'
            onClick={e => setMenu(e.target.textContent)}>Perfil</li>
        <li
            className='p-2 bg-white rounded-md hover:bg-gray-200 cursor-pointer'
            onClick={e => setMenu(e.target.textContent)}>Registro de Pesos</li>
    </ul>
  )
}

export default OpcionesMenu