import { useState, useEffect } from 'react'
import iconCloseModal from '../img/close.png'

const ModalDeuda = ({modalDeuda, setModalDeuda}) => {
  return (
    <div className={`h-full flex flex-col justify-center fixed top-0 z-10 modal-bg w-screen items-center`}>
        <div className={`bg-white w-2/3 px-5 py-5 h-modal rounded-md shadow-xl shadow-gray-800`}>
            <nav className='w-full ml-8 mb-5'>
                <ul className='flex justify-center gap-7 mx-auto py-2'>
                    <li value={0} className='border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300' onChange={e => setMenu(e.target.value)} >Editar Deuda</li>
                    <li value={1} className='border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300' onChange={e => setMenu(e.target.value)} >Historial de Pagos</li>
                    <li value={2} className='border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300' onChange={e => setMenu(e.target.value)} >Registrar Nuevo Pago</li>
                    li
                </ul>
            </nav>
            <form className='grid grid-cols-2 w-full gap-4 px-5' action="">
            <div className="">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
              Nombre
            </label>
            <input 
            id="nombre"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Deudor"
            />
          </div>
          <div className="">
            <label htmlFor="apellido" className="block text-gray-700 uppercase font-bold">
              Apellido
            </label>
            <input
            id="apellido"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Apellido del Deudor"
            />
          </div>
          <div className="">
            <label htmlFor="identificacion"className="block text-gray-700 uppercase font-bold">
              Identificación
            </label>
            <input id="identificacion"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder="Número de Identificacion"
            />
          </div>
          <div className="">
            <label htmlFor="correo"className="block text-gray-700 uppercase font-bold">
              Correo eléctronico
            </label>
            <input id="correo"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Correo Eléctronico del Deudor"
            />
          </div>
          <div className="">
            <label htmlFor="telefono"className="block text-gray-700 uppercase font-bold">
              télefono
            </label>
            <input id="telefono"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder='Número de Teléfono'
            />
          </div>
          <div className="">
            <label htmlFor="valor"className="block text-gray-700 uppercase font-bold">
              valor
            </label>
            <input id="valor"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder='Valor de la Deuda'
            />
          </div>
          <div className="">
            <label htmlFor="interes"className="block text-gray-700 uppercase font-bold">
              Tasa de interes
            </label>
            <div className='flex gap-2 items-center'>
              <input id="interes"
              className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="number"
              placeholder='0.0'
              />
              <span className='font-bold text-2xl'>%</span>
            </div>
          </div>
          <div className="">
            <label htmlFor="cuotas"className="block text-gray-700 uppercase font-bold">
              Número de Cuotas
            </label>
            <input id="cuotas"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder='Número de Cuotas'
            />
          </div>
          <div className=" col-span-2">
            <label htmlFor="descripcion"className="block text-gray-700 uppercase font-bold">
              Descripción
            </label>
            <textarea
              id="descripcion"
              className="border-2 w-full p-2 mt-2 outline-blue-500 text-area-size"
              placeholder="Describe la Deuda"
            />
          </div>
            <button
                className='col-span-2 uppercase bg-red-500 border-2 border-red-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-red-500 hover:border-2 rounded-md'>Deuda Finalizada
            </button>
          <input 
            type="submit"
            value='Editar Deuda'
            className="col-span-2 uppercase bg-blue-500 border-2 border-blue-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-blue-500 hover:border-2 rounded-md cursor-pointer"
            />
            </form>
        </div>
    </div>
  )
}

export default ModalDeuda