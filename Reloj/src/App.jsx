import { useState, useEffect } from "react"
import Header from "./components/Header"
import ControlDeDeudas from "./components/ControlDeDeudas"
import Modal from "./components/Modal"

const App = () => {

  // Modal
  const [modal, setModal] = useState(false)

  // Animación del Modal
  const [animarModal, setAnimarModal] = useState(false)

  // Función que permite crear una nueva deuda
  const handleNuevaDeuda = ()=>{
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    }, 50)
  }

  // Evento que permite cerrar el modal con la letra Escape(27)
  return (
    <>
      <Header />
      <ControlDeDeudas
        handleNuevaDeuda={handleNuevaDeuda}
      />
      {modal && <Modal
        modal={modal}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
      />}
    </>
  )
}

export default App
