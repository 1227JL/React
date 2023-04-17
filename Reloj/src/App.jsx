import { useState, useEffect } from "react"
import Header from "./components/Header"
import ControlDeDeudas from "./components/ControlDeDeudas"
import Modal from "./components/Modal"

const App = () => {

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevaDeuda = ()=>{
    setModal(!modal)
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      setModal(false)
    }
  });

  return (
    <>
      <Header />
      <ControlDeDeudas
        handleNuevaDeuda={handleNuevaDeuda}
      />
      {modal && <Modal
        modal={modal}
        setModal={setModal}
      />}
    </>
  )
}

export default App
