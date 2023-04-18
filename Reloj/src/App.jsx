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
  const [menu, setMenu] = useState('')

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
      // const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      // setGastos(gastosActualizados)
      // setGastoEditar({})
    }else{
      deuda.id = generarId()
      // deuda.fecha= Date.now()
      setDeudas([...deudas, deuda])

    }


    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  return (
    <>
      <Header />
      <ControlDeDeudas
        handleNuevaDeuda={handleNuevaDeuda}
        deudas={deudas}
        modalDeuda={modalDeuda}
        setModalDeuda={setModalDeuda}
        openModalDeuda={openModalDeuda}
      />
      {modal && <Modal
        modal={modal}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarDeuda={guardarDeuda}
      />}
      {modalDeuda && <ModalDeuda menu={menu} setMenu={setMenu}/>}
    </>
  )
}

export default App
