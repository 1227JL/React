import { useState, useEffect } from 'react'
import Deuda from './Deuda.jsx'
import Filtros from './Filtros.jsx'
import Search from './Search.jsx'


const ControlDeDeudas = ({handleNuevaDeuda, deudas, openModalDeuda, setDeudaEditar, buscador, setBuscador,filtro, setFiltro, deudasFiltradas}) => {



  return (
    <div className='mt-10'>
        <h1 className='text-5xl font-black text-center'>Control de <span className='text-yellow-400'>Cobros</span> y <span className='text-yellow-400'>Deudas</span></h1>
        
        {/* Serch section */}
        <section className="mb-3 mt-14">
            <Search/>
        </section>
        <section>
            <div className="mt-16 flex w-1/2 mx-auto justify-between">
                <button 
                    onClick={handleNuevaDeuda} 
                    className='bg-blue-500 p-3 text-white rounded-md shadow-lg hover:shadow-xl transition duration-300 outline-none'>
                    + Nuevo Deudor
                </button>
                <Filtros
                    filtro={filtro}
                    setFiltro={setFiltro}
                />
            </div>
        </section>
        <h1 className='text-3xl mt-8 uppercase text-center font-bold'>{deudas.length ? 'Deudores' : 'No hay Deudores aún'}</h1>
        <section>
            <div className='mt-10 bg-gray-300 w-2/3 mx-auto rounded-md p-2 shadow-lg'>
                <table className='w-full rounded-md shadow-md'>
                    <thead className='h-10  bg-yellow-300 rounded-md'>
                        <tr className='uppercase rounded-md border-b-0'>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Id</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Estado de Deuda</th>
                            <th>Opcion</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white rounded-md p-10 text-center'>
                        {filtro ? (
                            <>
                                {deudasFiltradas.map(deuda =>(
                                <Deuda
                                    key={deuda.id}
                                    deuda={deuda}
                                    openModalDeuda={openModalDeuda}
                                    setDeudaEditar={setDeudaEditar}
                                />
                                ))}
                            </>

                        ) : (
                            <>
                                {deudas.map(deuda =>(
                                    <Deuda
                                        key={deuda.id}
                                        deuda={deuda}
                                        openModalDeuda={openModalDeuda}
                                        setDeudaEditar={setDeudaEditar}
                                    />
                                ))}
                            </>
                        )
                        
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}

export default ControlDeDeudas