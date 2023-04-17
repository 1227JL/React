import { useState, useEffect } from "react"
import Header from "./components/Header"
import Date from "./components/Date"
import OyP from "./components/OyP"
import Menu from "./components/Menu"
import Perfil from "./components/Perfil"

const App = () => {

  const [validForm, setValidForm] = useState(false)
  const [menu, setMenu] = useState('')

  return (
    <div className="container">
      <Header />

      {validForm ? (
        <div>
          <Menu
            menu={menu}
            setMenu={setMenu}
          />
          {menu === 'Perfil' && <Perfil/> }         
          {menu === 'Registro de Pesos' && <Date/> }                   
        </div>
        ):(
          <OyP
            validForm={validForm}
            setValidForm={setValidForm}
          />
      )}

    </div>
  )
}

export default App
