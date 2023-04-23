import { useState } from "react"

const Login = () => {

    const [numberCel, setNumberCel] = useState('')
    const [mensaje, setMensaje] = useState('Escribe por favor el número de tu celular para seguir')

    const handleClick = () =>{
        console.log('click');
    }

    const limit = 10;
    const handleOnchange = () => {
        console.log(numberCel.length);
        if (numberCel.trim().length + 1 === 0) {
          setMensaje("Escribe por favor el número de tu celular para seguir");
        } else if (numberCel !== '3137962847') {
          setMensaje("¡Ups! Debes escribir un numero de cel válido.");
        } else {
          setMensaje("");
        }
    };


    return (
        <form className='h-screen w-full login'>
            <section className='h-3/4'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img src="" alt="" />
                    <h1 className='text-white text-5xl font-thin-bold' >NEQUI</h1>
                </div>
            </section>
            <section className=''>
                <div className='px-4'>
                    <div className='flex gap-3 bg-login-input border-red-400 rounded-xl p-3 pt-2 pb-3'>
                        <label htmlFor="number-phone" className='self-center text-sm color-red'>+57</label>
                        <div className='hr-login'></div>
                        <input
                            id='number-phone'
                            className='w-full bg-transparent text-white placeholder-white outline-none'
                            type="number"
                            placeholder='Número de celular'
                            value={numberCel}
                            maxLength={10}
                            onChange={(e) => {
                                setNumberCel(e.target.value.slice(0, limit))
                                handleOnchange()
                            }}
                        />
                    </div>
                    <span className="text-red-400 opacity-70 text-xs">{mensaje}</span>
                </div>
            </section>
            <div className="p-4 pb-0">
            <input
                onClick={handleClick}
                disabled={numberCel.trim().length < 10}
                className={`w-full bg-red text-white h-12 rounded-3xl ${numberCel.trim().length < 10 ? "disabled-btn" : ""}`}
                value="Entra"
                type="button"
            />
            </div>
        </form>
    )
}

export default Login