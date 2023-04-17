import { useState } from "react"

const OyP = ({validForm, setValidForm}) => {

  const [name, setName] = useState('')
  const [pesoActual, setPesoActual] = useState('')
  const [pesoObjetivo, setPesoObjetivo] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    if([name, pesoActual, pesoObjetivo].includes('')){
      alert('Error')

      return
    }
    
    setValidForm(true)
  }

  

  return (
    <div className='bg-white shadow-lg rounded-lg w-1/4 mx-auto'>
      <form
        className='flex flex-col p-5'
        onSubmit={handleSubmit}
        >
        <div className='mb-5 flex flex-col'>
          <label className='font-semibold mb-2' htmlFor="name">Nombre</label>
          <input
            className='border-2 border-gray-100 outline-sky-400 rounded-md p-1 px-2'
            type="text"
            name="name"
            placeholder='Nombre del Usuario'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='mb-5 flex flex-col'>
          <label className='font-semibold mb-2' htmlFor="name">Peso Actual</label>
          <input
            className='border-2 border-gray-100 outline-sky-400 rounded-md p-1 px-2'
            type="number"
            name="name"
            placeholder='0.0kg'
            value={pesoActual}
            onChange={e => setPesoActual(e.target.value)}
          />
        </div>
        <div className='mb-5 flex flex-col'>
          <label className='font-semibold mb-2' htmlFor="name">Peso Objetivo</label>
          <input
            className='border-2 border-gray-100 outline-sky-400 rounded-md p-1 px-2'
            type="number"
            name="name"
            placeholder='0.0kg'
            value={pesoObjetivo}
            onChange={e => setPesoObjetivo(e.target.value)}
            />
        </div>
        <input
          className='p-3 bg-color-p text-white font-semibold rounded-md hover:opacity-95 cursor-pointer'
          type="submit"
          value='Empezar'/>
      </form>
    </div>
  )
}

export default OyP