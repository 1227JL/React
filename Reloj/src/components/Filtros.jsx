import React from 'react'

const Filtros = ({filtro, setFiltro}) => {

    const handleChange = (e) => {
        setFiltro(e.target.value);
    }

  return (
    <div>
        <select  className='text-center outline-none px-2 h-full rounded-md shadow-lg hover:shadow-xl transition duration-300' value={filtro} onChange={handleChange}>
        <option value=''>Todos</option>
        <option value='true'>Deudas Pendientes</option>
        <option value='false'>Condonaciones de Deudas</option>
      </select>
    </div>
  )
}

export default Filtros