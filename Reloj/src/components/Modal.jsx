import { useState, useEffect } from 'react'
import iconCloseModal from '../img/close.png'
import Mensaje from "./Mensaje"

const Modal = ({modal, setModal, animarModal, setAnimarModal}) => {

  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [identificacion, setIdentificacion] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [valor, setValor] = useState('')
  const [interes, setInteres] = useState('')
  const [cuotas, setCuotas] = useState('')
  const [descripcion, setDescripcion] = useState('')
  
  
  const closeModal = () => {
      setAnimarModal(false)
      setTimeout(() => {
          setModal(false)
      }, 500)
  }
  
  useEffect(() => {
      const handleKeyDown = (event) => {
          if (event.key === 'Escape' && modal === true) {
              closeModal()
          }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modal])
  
  const handleFormSubmit = (event) => {
      event.preventDefault()
  
      if ([nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion].includes('')) {
          setMensaje('Todos los campos son obligatorios')
          setTimeout(() => {
              setMensaje('')
          }, 3000)
      } else {
          // aquí se pueden enviar los datos del formulario a través de una función prop
          console.log({ nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion })
          closeModal()
      }
  }

  return (
    <div className={`h-screen justify-center flex flex-col absolute top-0 z-10 modal-bg w-screen items-center modal ${modal && 'on'}`}>
        <div className={`div-modal bg-white w-2/3 h-4/4 px-5 py-5 mx-auto rounded-md shadow-xl shadow-gray-800  formModal ${animarModal ? 'animar' : 'cerrar'}`}>
            <div className='w-full h-10 flex justify-end mb-7 pl-11'>
                <h1 className='font-bold text-4xl uppercase mx-auto'>Deuda</h1>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                <img
                    className='flex justify-center rounded-full h-full bg-white br-icon-close-modal cursor-pointer'
                    src={iconCloseModal}
                    alt=""
                    onClick={closeModal}
                    />
            </div>
            <form className='grid grid-cols-2 w-full gap-5 px-5' action="" onSubmit={handleFormSubmit}>
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
            type="number"
            placeholder="Número de Identificacion"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="correo"className="block text-gray-700 uppercase font-bold">
              Correo eléctronico
            </label>
            <input id="correo"
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
          <div className="mb-5">
            <label htmlFor="valor"className="block text-gray-700 uppercase font-bold">
              valor
            </label>
            <input id="valor"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder='Valor de la Deuda'
            />
          </div>
          <div className="mb-5">
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
          <div className="mb-5">
            <label htmlFor="cuotas"className="block text-gray-700 uppercase font-bold">
              Número de Cuotas
            </label>
            <input id="cuotas"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="number"
            placeholder='Número de Cuotas'
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