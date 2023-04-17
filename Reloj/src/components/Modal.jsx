import React from 'react'
import iconCloseModal from '../img/close.png'
const Modal = ({modal, setModal}) => {

    const closeModal = ()=>{
        setModal(false)
    }

  return (
    <div className={`flex flex-col absolute top-0 z-10 modal-bg w-screen h-screen items-center ${modal ? 'animar' : 'cerrar'}`}>
        <div className='mt-24 w-3/5 h-16 flex justify-end'>
            <img
                className='flex justify-center rounded-full h-full bg-white br-icon-close-modal cursor-pointer'
                src={iconCloseModal}
                alt=""
                onClick={closeModal}
                />
        </div>
        <div className='bg-white w-1/2 h-3/3 px-10 py-10 mx-auto rounded-md shadow-xl shadow-gray-800'>
            <form className='grid grid-cols-2 w-full gap-5' action="">
            <div className="mb-5">
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
          <div className="mb-5">
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
          <div className="mb-5">
            <label htmlFor="identificacion"className="block text-gray-700 uppercase font-bold">
              Identificación
            </label>
            <input id="identificacion"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Número de Identificacion"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="telefono"className="block text-gray-700 uppercase font-bold">
              télefono
            </label>
            <input id="telefono"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder='Número de Teléfono'
            />
          </div>
          <div className="mb-5 col-span-2">
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
            className="col-span-2 uppercase bg-blue-500 border-2 border-blue-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-blue-500 hover:border-2 rounded-md cursor-pointer"
            />
            </form>
        </div>
    </div>
  )
}

export default Modal