import { useState, useEffect } from 'react';
import iconCloseModal from '../img/close.png';

const ModalDeuda = ({setModalDeuda, menu, setMenu, deudaEditar, setDeudaEditar}) => {


  const closeModal = ()=>{
    setModalDeuda(false);
  }

  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [valor, setValor] = useState('');
  const [interes, setInteres] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('Pendiente');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (Object.keys(deudaEditar).length > 0) {
      setNombre(deudaEditar.nombre);
      setApellido(deudaEditar.apellido);
      setIdentificacion(deudaEditar.identificacion);
      setCorreo(deudaEditar.correo);
      setTelefono(deudaEditar.telefono);
      setValor(deudaEditar.valor);
      setInteres(deudaEditar.interes);
      setCuotas(deudaEditar.cuotas);
      setDescripcion(deudaEditar.descripcion);
      setEstado(deudaEditar.estado);
      setId(deudaEditar.id);
      setFecha(deudaEditar.fecha);
    }
  }, [deudaEditar]);


  useEffect(()=>{
    if(Object.keys(deudaEditar).length > 0){
        setNombre(deudaEditar.nombre)
    }
  },[]);

  return (
    <div className={`h-full flex flex-col justify-center fixed top-0 z-10 modal-bg w-screen items-center`}>
        <div className={`bg-white w-2/3 px-5 py-5 h-modal rounded-md shadow-xl shadow-gray-800 flex flex-col`}>
            <div className='w-full h-10 flex justify-end pl-11 mb-5 mb-custom-2'>
              <img
                className='flex justify-center rounded-full h-full bg-white br-icon-close-modal cursor-pointer'
                src={iconCloseModal}
                onClick={closeModal}
                />
            </div>
            <nav className='w-full ml-8 mb-custom-2 mb-4'>
                <ul className='flex justify-center gap-7 mx-auto py-2 mb-custom'>
                    <li value={0} className='border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300' onClick={e => setMenu(e.target.value)} >Editar Deuda</li>
                    <li value={1} className='border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300' onClick={e => setMenu(e.target.value)} >Historial de Pagos</li>
                    <li value={2} className='border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300' onClick={e => setMenu(e.target.value)} >Registrar Nuevo Pago</li>
                </ul>
            </nav>
            {menu === 0 && (
                <form className='grid grid-cols-3 w-full gap-4 px-5 place-content-center' action="">
                <div className="mb-custom">
                <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                  Id
                </label>
                <input 
                id="nombre"
                className="text-gray-700 outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                type="text"
                disabled
                placeholder="Id de la Deuda"
                value={id}
                onChange={ e => setId(e.target.value)}
                />
              </div>
                <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className="mb-custom">
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
              <div className=" col-span-1 mb-custom-2">
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
              <div className="mb-custom">
                <label htmlFor="cuotas"className="block text-gray-700 uppercase font-bold">
                  Fecha de Creacion de la Deuda
                </label>
                <p className='fecha-gasto'>
                    Agregado el: {''}
                    {fecha}
                </p>
              </div>
              <div className="mb-custom">
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
              <button
                  className='col-span-3 uppercase bg-red-500 border-2 border-red-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-red-500 hover:border-2 rounded-md'>Deuda Finalizada
              </button>
              <input 
                type="submit"
                value='Editar Deuda'
                className="col-span-3 uppercase bg-blue-500 border-2 border-blue-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-blue-500 hover:border-2 rounded-md cursor-pointer"
                />
                </form>
            )}
            
        </div>
    </div>
  )
}

export default ModalDeuda