// import {useEffect} from 'react'

const pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  // useEffect(() => {
  //   console.log('El componente esta listo');
  // }, [])

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = ()=>{
    const respuesta = confirm('Deseas eliminar este paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='mx-5 bg-white shadow-md rounded-xl py-5 px-10 my-10'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
          type=""
          className="py-2 px-10 bg-indigo-600 text-white hover:bg-indigo-700 font-bold uppercase rounded-lg"
          onClick={()=> setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type=""
          className="py-2 px-10 bg-red-600 text-white hover:bg-red-700 font-bold uppercase rounded-lg"
          onClick={handleEliminar}
          >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default pacientes