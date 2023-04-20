import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { formatearFecha } from '../helpers'
import iconCloseModal from '../img/close.png';
import iconOnline from '../img/online.png';
import iconOffline from '../img/offline.png';

const ModalDeuda = ({modalDeuda, setModalDeuda, animarModalDeuda, setAnimarModalDeuda, menu, setMenu, guardarDeuda, deudaEditar, setDeudaEditar}) => {

  const closeModal = ()=>{
    setAnimarModalDeuda(false)
    setTimeout(() => {
      setModalDeuda(false)
      setMenu(0)
    }, 500)
  }
  

  const [estadoSwitch, setEstadoSwitch] = useState(false);
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
  const [estado, setEstado] = useState(true);
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
  
    closeModal()
  }

  const myArray = Array.from({ length: cuotas });
  
  const tasa = valor / interes
  const total = Number(valor) + Number(tasa)
  const cobro = total / Number(cuotas) 
  
  const formaterarCantidad = (cantidad)=>{
    return cantidad.toLocaleString('en-US', {
      style:'currency',
        currency:'USD'
      })
    } 
    
    const [pagos, setPagos] = useState(0)
    const porcentajeAvance = ((pagos / cuotas) * 100).toFixed(2);
    
  
  function disableCheckbox(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
      checkbox.disabled = true;
    }
  }
  const handlePagoRealizado = (event) => {


    const index = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      console.log('Pago número ' + (parseInt(index) + 1) + ' realizado');
      setPagos(pagos + 1);

    } else {
      console.log('Pago número ' + (parseInt(index) + 1) + ' sin realizar');
      setPagos(pagos - 1);
      
    }


  }

 
  return (
    <div className={`h-full flex flex-col justify-center fixed top-0 z-10 modal-bg w-screen items-center`}>
        <div className={`formModal bg-white w-2/3 ${menu === 1 ? 'w-4/5' : ''} px-5 py-5 pb-10 rounded-md shadow-xl shadow-gray-800 flex flex-col ${animarModalDeuda ? 'animar' : 'cerrar'}`}>
            <div className='w-full h-10 flex justify-end pl-11 mb-1 mb-custom-2'>
              <img
                className='flex justify-center rounded-full h-full bg-white br-icon-close-modal cursor-pointer'
                src={iconCloseModal}
                onClick={closeModal}
                />
            </div>
            <nav className='w-full ml-8 mb-custom-2 mb-4'>
                <ul className='flex justify-center gap-7 mx-auto py-2 mb-custom'>
                    <li value={0} className={`border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300 ${menu === 0 ? 'border-yellow-400' : 'border-black'}`} onClick={e => setMenu(e.target.value)} >Editar Deuda</li>
                    <li value={1} className={`border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300 ${menu === 1 ? 'border-yellow-400' : 'border-black'}`} onClick={e => setMenu(e.target.value)} >Pagos</li>
                    <li value={2} className={`border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300 ${menu === 2 ? 'border-yellow-400' : 'border-black'}`} onClick={e => setMenu(e.target.value)} >Registrar Nuevo Pago</li>
                </ul>
            </nav>
            {menu === 0 && (
                <form
                  className='grid grid-cols-3 w-full gap-4 px-5 place-content-center'
                  action=""
                  onSubmit={handleFormSubmit}
                >
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
                onChange={ e => setCuotas(parseInt(e.target.value))}
                step='1'
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
                <p className='fecha-gasto mt-2'>
                    {formatearFecha(fecha)}
                </p>
              </div>
              <div className="mb-custom">
                <label htmlFor="cuotas"className="block text-gray-700 uppercase font-bold">
                  Estado
                </label>
                <span className='flex items-center gap-2 mt-2'>{estado ? 'Pendiente' : 'Finalizada'} <img className='h-5' src={estado ? iconOffline : iconOnline} alt="" /> </span>     
              </div>
              <button
                className='col-span-3 uppercase bg-red-500 border-2 border-red-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-red-500 hover:border-2 rounded-md'
                onClick={()=> setEstado(false)}
                >
                Deuda Finalizada
              </button>
              <input 
                type="submit"
                value='Editar Deuda'
                className="col-span-3 uppercase bg-blue-500 border-2 border-blue-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-blue-500 hover:border-2 rounded-md cursor-pointer"
                />
                </form>
            )}
            {menu === 1 && (
              <section id="" className="flex justify-around my-10 mr-5">
                <div className="w-1/2 flex flex-col gap-10">
                  <div className="flex items-center justify-center h-2/3">
                    <CircularProgressbar
                      className="w-1/2 text-md"
                      styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor:'#F5F5F5',
                        textColor: '#3B82F6',
                        textSize: '12px'
                      })}
                      value={porcentajeAvance}
                      text={`${porcentajeAvance}%`}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-center font-semibold">Pagos Realizados: {''} {pagos}</span>
                    <span className="text-center font-semibold">Pagos por Realizar: {''} {cuotas-pagos} </span>
                  </div>
                </div>
                <div className=' w-3/4 bg-gray-300 mx-auto border-8 border-gray rounded-md shadow-lg scrollable'>
                  <table className='text-sm rounded-md shadow-md table-pagos'>
                    <thead className='sticky top-0 bg-white thead-pagos'>
                      <tr className='uppercase rounded-md border-b-0'>
                        <th>Pago</th>
                        <th>Valor a Pagar</th>
                        <th>Fecha de Pago</th>
                        <th>Estado de Pago</th>
                      </tr>
                    </thead>
                    <tbody className='bg-white rounded-md text-center overflow-y-scroll body-pagos'>
                      {myArray.map((item, index) => (
                        <tr key={index} className={` border-b-2 border-black`}>
                          <td className=''>{index+1}</td>
                          <td>{formaterarCantidad(cobro)}</td>
                          <td>{formatearFecha(fecha, index)}</td>
                          <td className={``}>
                            <input type="checkbox" name={index} id="" onClick={disableCheckbox} onChange={handlePagoRealizado} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
           
        </div>
    </div>
  )
}

export default ModalDeuda