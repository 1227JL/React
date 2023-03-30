
const Formulario = () => {
  
  return (
    
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5">
          <div>
            <label className="block text-gray-700 uppercase">Nombre Mascota</label>
            <input className="text-gray-700 outline-none" type="text" placeholder="Nombre de la mascota" />
          </div>
        </form>
    </div>
  )
}

export default Formulario
