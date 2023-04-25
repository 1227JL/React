import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  margin:100px auto 0 auto;
  @media (min-width: 992px){
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
`


const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  @media (max-width: 400px){
    font-size: 2rem;
  }

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2FE;
    display: block;
    margin: 10px auto 0 auto 
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){

      const cotizarCripto = async () =>{
        setCargando(true)
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt='Imagenes Criptomonedas'
          />
          <div>
            <Heading>Cotiza Criptomonedas al Instante</Heading>
            <Formulario
              setMonedas={setMonedas}
            />
            {cargando && <Spinner/>}
            {resultado.PRICE && <Resultado resultado={resultado}/>}

          </div>
      </Contenedor>
  
  )
}

export default App
