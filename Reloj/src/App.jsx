import { useState, useEffect } from "react"
import Header from "./components/Header"
import ControlDeDeudas from "./components/ControlDeDeudas"
import Modal from "./components/Modal"
import { generarId } from './helpers'

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

  // State donde se guardaran las deudas almacenadas
  const [deudas, setDeudas] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])

  
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
      />
      {modal && <Modal
        modal={modal}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarDeuda={guardarDeuda}
      />}
    </>
  )
}

export default App
