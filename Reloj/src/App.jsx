import { useState, useEffect } from "react"
import Header from "./components/Header"
import ControlDeDeudas from "./components/ControlDeDeudas"
import Modal from "./components/Modal"
import ModalDeuda from './components/ModalDeuda'
import { generarId } from './helpers'

const App = () => {

  // Modal
  const [modal, setModal] = useState(false)
  const [modalDeuda, setModalDeuda] = useState(false)
  const [menu, setMenu] = useState(0)

  // Animación del Modal
  const [animarModal, setAnimarModal] = useState(false)

  // Función que permite crear una nueva deuda
  const handleNuevaDeuda = ()=>{
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    }, 50)
  }

  const openModalDeuda = ()=>{
    setModalDeuda(true)
  }


  // State donde se guardaran las deudas almacenadas
  const [deudas, setDeudas] = useState(localStorage.getItem('deudas') ? JSON.parse(localStorage.getItem('deudas')) : [])

  
  useEffect(()=>{
    localStorage.setItem('deudas', JSON.stringify(deudas) ?? [])
  }, [deudas])

  const guardarDeuda = deuda =>{
    if(deuda.id){
      alert('Ya tiene Id')
      const deudasActualizadas = deudas.map( deudaState => deudaState.id === deuda.id ? deuda : deudaState)
      setDeudas(deudasActualizadas)
      setDeudaEditar({})
    }else{
      deuda.id = generarId()
      deuda.fecha= Date.now()
      setDeudas([...deudas, deuda])

    }

    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const [deudaEditar, setDeudaEditar] = useState({})
  useEffect(() => {
      if(Object.keys(deudaEditar).length > 0){
        openModalDeuda()
      }
  }, [deudaEditar])



  return (
    <>
      <Header />
      <ControlDeDeudas
        handleNuevaDeuda={handleNuevaDeuda}
        deudas={deudas}
        modalDeuda={modalDeuda}
        setModalDeuda={setModalDeuda}
        openModalDeuda={openModalDeuda}
        setDeudaEditar={setDeudaEditar}
      />
      {modal && <Modal
        modal={modal}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarDeuda={guardarDeuda}
      />}
      {modalDeuda &&
        <ModalDeuda
          setModalDeuda={setModalDeuda}
          menu={menu}
          setMenu={setMenu}
          deudaEditar={deudaEditar}
          setDeudaEditar={setDeudaEditar}
          openModalDeuda={openModalDeuda}
        />}
    </>
  )
}

export default App
