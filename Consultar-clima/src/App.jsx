import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Home from './components/Home'
import styled from '@emotion/styled'
import Index from './components/Index'

const AppContainer = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Lato', sans-serif;
  color: black;
`
function App() {
  const [pronosticar, setPronosticar] = useState(false)
  const [lugar, setLugar] = useState(localStorage.getItem('lugar')?JSON.parse(localStorage.getItem('lugar')):{})

  useEffect(()=>{
    localStorage.setItem('lugar', JSON.stringify(lugar))
  },[lugar])

  return (
    <AppContainer>
      {pronosticar || Object.keys(lugar).length === 0 && <Index setPronosticar={setPronosticar} />}
      {pronosticar && Object.keys(lugar).length === 0 && <Formulario lugar={lugar} setLugar={setLugar} />}
      {Object.keys(lugar).length > 0 && <Home lugar={lugar} />}
    </AppContainer>
  )
}

export default App
