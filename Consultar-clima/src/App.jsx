import { useEffect, useState } from 'react'
import Home from './components/Home'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import AnimationWeather from './components/AnimationWeather'
import Background from './img/Background.png'
import * as THREE from 'three';

const AppContainer = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  color: black;
`
function App() {

  return (
    <AppContainer>
      <AnimationWeather/>
      <Formulario />

      {/* <Home country={country} city={city}/> */}
    </AppContainer>
  )
}

export default App
