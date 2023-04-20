import React from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div>
        <select
            className='text-center outline-none px-2 h-full rounded-md shadow-lg hover:shadow-xl transition duration-300'
            value={filtro}
            onChange={(e) => {
                setFiltro(e.target.value === 'true' ? true : false);
            }}
        >
            <option className='p-5' value={''}>Todos</option>
            <option className='p-2 block' value={true}>Deudas Pendientes</option>
            <option className='p-2 block' value={false}>Condonaciones de Deudas</option>
      </select>
    </div>
  )
}

export default Filtros