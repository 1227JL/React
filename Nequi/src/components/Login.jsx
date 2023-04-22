import { useState } from "react"

const Login = () => {

    const [numberCel, setNumberCel] = useState('')
    const [mensaje, setMensaje] = useState('Escribe por favor el número de tu celular para seguir')

    const handleOnchange = (e)=>{
        e.preventDefault()

        // Validación del formulario
        if(numberCel === ''){
          setMensaje('Escribe por favor el número de tu celular para seguir')
        } else {
          setMensaje('')
        }
    }

    const handleOnFocus = () => {
        setMensaje('')
    }

    const handleOnBlur = () => {
        if(numberCel === ''){
          setMensaje('Escribe por favor el número de tu celular para seguir')
        }
    }

    return (
        <div className='h-full w-full login'>
            <section className='h-5/6'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img src="" alt="" />
                    <h1 className='text-white text-4xl' >NEQUI</h1>
                </div>
            </section>
            <section className='h-2/6'>
                <div className='px-4'>
                    <div className='flex gap-3 bg-login-input border-red-400 rounded-xl p-3 pt-2 pb-3'>
                        <label htmlFor="number-phone" className='self-center text-sm text-red-400'>+57</label>
                        <div className='hr-login'></div>
                        <input
                            id='number-phone'
                            className='w-full bg-transparent text-white placeholder-white outline-none'
                            type="text"
                            placeholder='Número de celular'
                            value={numberCel}
                            onChange={e => setNumberCel(e.target.value)}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                        />
                    </div>
                    <span className="text-red-400 text-xs">{mensaje}</span>
                </div>
            </section>
        </div>
    )
}

export default Login