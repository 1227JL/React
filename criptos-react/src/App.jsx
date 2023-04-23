import { useState } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
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

  return (
      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt='Imagenes Criptomonedas'
          />
          <div>
            <Heading>Cotiza Criptomonedas al Instante</Heading>
            <Formulario/>
          </div>
      </Contenedor>
  
  )
}

export default App
