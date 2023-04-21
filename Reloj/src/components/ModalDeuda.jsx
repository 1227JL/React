import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { formatearFecha, formatearFechaPagos } from '../helpers'
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
  
  const buttonRef = useRef(null);

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

  const handleNavClick = (event) => {
    event.preventDefault();
    const sectionId = event.target.dataset.sectionId;
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  

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
    
    const [pagos, setPagos] = useState(() => {
      const savedPagos = localStorage.getItem('pagos');
      return savedPagos !== null ? parseInt(savedPagos) + 1 : 0;
    });

    const porcentajeAvance = ((pagos / cuotas) * 100).toFixed(2);

    function disableCheckbox(event) {
      const checkbox = event.target;
      if (checkbox.checked) {
        checkbox.disabled = true;
      }
    }
    
    const [checkboxState, setCheckboxState] = useState({}); // estado para el estado del checkbox
      
    const handlePagoRealizado = (event) => {
      const checkboxIndex = event.target.name;
      const isChecked = event.target.checked;
      setCheckboxState(prevState => {
        const newState = Array.isArray(prevState) ? [...prevState] : [];
        newState[checkboxIndex] = isChecked;
        return newState;
      });
      localStorage.setItem(`checkbox-${checkboxIndex}`, isChecked);

   
      if (isChecked) {
        console.log('Pago número ' + (parseInt(checkboxIndex) + 1) + ' realizado');
        setPagos(pagos + 1);
      } else {
        console.log('Pago número ' + (parseInt(checkboxIndex) + 1) + ' sin realizar');
        setPagos(pagos - 1);
      }
      
      localStorage.setItem('pagos', pagos.toString());

    }
    
    useEffect(() => {
      localStorage.setItem(id, porcentajeAvance);
      console.log(porcentajeAvance);
      
      if(pagos == cuotas){
        console.log('Deuda Finalizada');
        setEstado(false)
        
      }else{
        setEstado(true)
      }

    }, [porcentajeAvance]);

    useEffect(() => {
      // Obtener los valores guardados en localStorage
      const savedCheckboxState = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('checkbox-')) {
          savedCheckboxState[key.replace('checkbox-', '')] = JSON.parse(localStorage.getItem(key));
        }
      }
      setCheckboxState(savedCheckboxState);
    }, []);
    
  return (
    <div className={`h-full flex flex-col justify-center fixed top-0 z-10 modal-bg w-screen items-center`}>
        <div className={`formModal bg-white h-5/6 w-5/6 px-5 py-5 pb-0 rounded-md shadow-xl shadow-gray-800 flex flex-col ${animarModalDeuda ? 'animar' : 'cerrar'} overflow-y-scroll overflow-x-hidden`}>
            <div className='w-full h-10 flex justify-end pl-11 mb-1 mb-custom-2'>
              <img
                className='flex justify-center rounded-full h-full bg-white br-icon-close-modal cursor-pointer'
                src={iconCloseModal}
                onClick={closeModal}
                />
            </div>
            <nav className='w-full ml-8 mb-custom-2 mb-4'>
                <ul className='flex justify-center gap-7 mx-auto py-2 mb-custom'>
                    <li data-section-id="seccion-1" onClick={handleNavClick} value={0} className={`border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300`}>Editar Deuda</li>
                    <li data-section-id="seccion-2" onClick={handleNavClick} value={1} className={`border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300`}>Pagos</li>
                    {/* <li data-section-id="seccion-3" onClick={handleNavClick} value={2} className={`border-b-4 border-black pb-2 font-semibold hover:cursor-pointer hover:border-yellow-400 transition-all duration-300`}>Registrar Nuevo Pago</li> */}
                </ul>
            </nav>
              <section id="section-1">
                
              </section>
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
              <hr className="col-span-3 my-5" />
              {/* <button
                className='col-span-3 uppercase bg-red-500 border-2 border-red-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-red-500 hover:border-2 rounded-md'
                onClick={()=> setEstado(true)}
                >
                Deuda Finalizada
              </button> */}
              
              <section id="seccion-2" className="col-span-3 h-5/6 mb-16 flex flex-col mt-5 mr-2">
                <div className="mb-10">
                  <h1 className="text-center font-bold text-3xl uppercase">Pagos</h1>
                </div>
                <div className="flex">
                <div className="flex flex-col gap-10 items-center w-1/2">
                  <div className="flex w-full items-center justify-center h-2/3">
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
                <div className='w-full bg-gray-300 mx-auto border-8 border-gray rounded-md shadow-lg scrollable'>
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
                    {myArray.map((item, index) => {
                      // const isChecked = localStorage.getItem(`checkbox-${index}`) === 'true';
                      return (
                        <tr key={index} className={` border-b-2 border-black`}>
                          <td className=''>{index+1}</td>
                          <td>{formaterarCantidad(cobro)}</td>
                          <td>{formatearFechaPagos(fecha, index)}</td>
                          <td className={``}>
                          <input
                            type="checkbox"
                            name={index}
                            checked={checkboxState[index] || false}
                            onChange={handlePagoRealizado}
                            onClick={disableCheckbox}
                            disabled={checkboxState[index]}
                          />
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
                </div>
              </section>
              <div className="bg-white z-10 col-span-3 h-20 sticky bottom-0">
              <input 
                type="submit"
                value='Editar Deuda'
                className="w-full uppercase bg-blue-500 border-2 border-blue-500 p-3 text-white font-semibold shadow-md transition duration-300 hover:bg-transparent hover:text-blue-500 hover:border-2 rounded-md cursor-pointer"
                />
              </div>
              </form>
        </div>
    </div>
  )
}

export default ModalDeuda