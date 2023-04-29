import { useEffect, useState } from 'react'
import Index from './components/Index'
import Formulario from './components/Formulario'
import Home from './components/Home'
import styled from '@emotion/styled'

const AppContainer = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Lato', sans-serif;
  color: black;
`
function App() {

  const [lugar, setLugar] = useState({})

  return (
    <AppContainer>
      <Index/>
      {/* {Object.keys(lugar).length > 0 ? <Home lugar={lugar}/> : <Formulario lugar={lugar} setLugar={setLugar}/>} */}
      
    </AppContainer>
  )
}

export default App
