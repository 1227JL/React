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
  const [animarModalDeuda, setAnimarModalDeuda] = useState(false)

  const [buscador, setBuscador] = useState('')

  // Función que permite crear una nueva deuda
  const handleNuevaDeuda = ()=>{
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    }, 50)
  }

  const openModalDeuda = ()=>{
    setModalDeuda(true)

    setTimeout(()=>{
      setAnimarModalDeuda(true)
    }, 50)
  }


  // State donde se guardaran las deudas almacenadas
  const [deudas, setDeudas] = useState(localStorage.getItem('deudas') ? JSON.parse(localStorage.getItem('deudas')) : [])

  
  useEffect(()=>{
    localStorage.setItem('deudas', JSON.stringify(deudas) ?? [])
  }, [deudas])

  const guardarDeuda = deuda =>{
    console.log(deuda);

    if(deuda.id){
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


  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("Enviado");
    
    if ([nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
          setMensaje('')
      }, 3000);
      return
    }

    guardarDeuda({nombre, apellido, identificacion, correo, telefono, valor, interes, cuotas, descripcion, estado, id, fecha})
  }

  const [pagosRealizados, setPagosRealizados] = useState([])

  const handlePagoRealizado = ()=>{
    console.log('pago realizado');
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
        setDeudaEditar={setDeudaEditar}
        buscador={buscador}
        setBuscador={setBuscador}
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
          modalDeuda={modalDeuda}
          setModalDeuda={setModalDeuda}
          animarModalDeuda={animarModalDeuda}
          setAnimarModalDeuda={setAnimarModalDeuda}
          menu={menu}
          setMenu={setMenu}
          deudaEditar={deudaEditar}
          setDeudaEditar={setDeudaEditar}
          openModalDeuda={openModalDeuda}
          guardarDeuda={guardarDeuda}
          handleFormSubmit={handleFormSubmit}
          handlePagoRealizado={handlePagoRealizado}
        />}
    </>
  )
}

export default App
