import { useState, useEffect } from 'react'
import Deuda from './Deuda.jsx'

const ControlDeDeudas = ({handleNuevaDeuda, deudas, openModalDeuda}) => {

  return (
    <div className='mt-10'>
        <h1 className='text-5xl font-black text-center'>Control de <span className='text-yellow-400'>Cobros</span> y <span className='text-yellow-400'>Deudas</span></h1>
        
        {/* Serch section */}
        <section className="mb-3 mt-14">
            <div className="relative mb-4 flex w-1/5 mx-auto flex-wrap items-stretch">
                <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid bg-transparent bg-clip-padding  px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:border-blue-500 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400' dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1" />
                <button
                className="bg-blue-500 relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase text-white leading-tight shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
                </button>
            </div>
        </section>
        <section>
            <div className="mt-16 flex w-1/2 mx-auto justify-between">
                <button 
                    onClick={handleNuevaDeuda} 
                    className='bg-blue-500 p-3 text-white rounded-md shadow-lg hover:shadow-xl transition duration-300 outline-none'>+ Nuevo Deudor</button>
                <select name="" id="" className='text-center outline-none px-2 rounded-md shadow-lg hover:shadow-xl transition duration-300'>
                    <option className='p-5' value="">Todos</option>
                    <option className='p-2 block' value="">Deudas Pendientes</option>
                    <option className='p-2 block' value="">Condonaciónes de Deudas</option>
                </select>
            </div>
        </section>
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
                        {deudas.map(deuda =>(
                            <Deuda
                                key={deuda.id}
                                deuda={deuda}
                                openModalDeuda={openModalDeuda}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}

export default ControlDeDeudas