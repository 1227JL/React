import { useNavigate } from "react-router-dom"


function Cliente({cliente}) {

    const navigate = useNavigate()

    const {id, nombre, empresa, telefono , email} = cliente

return (
    <tr className='border-b text-center'>
        <td className='space-y-2'>
            <p className='text-2xl text-gray-800'>{nombre}</p>
            <p className=''>{empresa}</p>
        </td>

        <td className="">
            <p className="text-gray600">
                <span className="text-gray-800 uppercase font-bold">Email: </span>
                {email}
            </p>
            <p className="text-gray600">
                <span className="text-gray-800 uppercase font-bold">Telefono: </span>
                {telefono}
            </p>
        </td>

        <td className='flex gap-3 justify-center my-10'>
            <button 
                type='button'
                className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
                onClick={()=>{
                    navigate(`/clientes/${id}/editar`)
                }}
            >
                Editar
            </button>
            <button 
                type='button'
                className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Cliente