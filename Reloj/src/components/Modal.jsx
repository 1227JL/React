import { useState, useEffect } from 'react'
import iconCloseModal from '../img/close.png'
import Mensaje from "./Mensaje"

const Modal = ({modal, setModal, animarModal, setAnimarModal, guardarDeuda}) => {

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
  const [estado, setEstado] = useState(true)
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')
  
  
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
      console.log("Enviado");
      
      if ([nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion].includes('')) {
        setMensaje('Todos los campos son obligatorios')
        setTimeout(() => {
            setMensaje('')
        }, 3000);
        return
      }

      guardarDeuda({nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion, estado, id, fecha})
  }


  return (
    <div className={`h-full justify-center flex flex-col fixed top-0 z-10 modal-bg w-screen items-center modal ${modal && 'on'}`}>
        <div className={`div-modal bg-white w-2/3 px-5 py-5 custom-height mx-auto rounded-md shadow-xl shadow-gray-800 formModal ${animarModal ? 'animar' : 'cerrar'}`}>
            <div className='w-full h-10 flex justify-end mb-2 pl-11'>
                <img
                    className='flex justify-center rounded-full h-full bg-white br-icon-close-modal cursor-pointer'
                    src={iconCloseModal}
                    alt=""
                    onClick={closeModal}
                    />
            </div>
            <h1 className='font-bold text-4xl text-center uppercase mb-5 mx-auto'>Deuda</h1>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <form className='grid grid-cols-2 w-full gap-5 px-5' action="" onSubmit={handleFormSubmit}>
            <div className="mb-2">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
              Nombre
            </label>
            <input 
            id="nombre"
            className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Deudor"
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
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
            value={apellido}
            onChange={ e => setApellido(e.target.value)}
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
            value={identificacion}
            onChange={ e => setIdentificacion(e.target.value)}
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
            value={correo}
            onChange={ e => setCorreo(e.target.value)}
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
            value={telefono}
            onChange={ e => setTelefono(e.target.value)}
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
            value={valor}
            onChange={ e => setValor(e.target.value)}
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
              value={interes}
              onChange={ e => setInteres(e.target.value)}
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
            value={cuotas}
            onChange={ e => setCuotas(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="descripcion"className="block text-gray-700 uppercase font-bold">
              Descripción
            </label>
            <textarea
              id="descripcion"
              className="border-2 w-full p-2 mt-2 outline-blue-500 text-area-size"
              placeholder="Describe la Deuda"
              value={descripcion}
              onChange={ e => setDescripcion(e.target.value)}
            />
          </div>
          <input 
            type="submit"
            value='Registrar Deuda'
            className="col-span-2 uppercase bg-blue-500 border-2 border-blue-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-blue-500 hover:border-2 rounded-md cursor-pointer"
            />
            </form>
        </div>
    </div>
  )
}

export default Modal