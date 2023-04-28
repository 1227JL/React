import ChatStyle from '../styles/ChatStyle.css'
import serchIcon from '../img/serchIcon.png'
import usuarioSinFoto from '../img/usuarioSinFoto.png'

const Chat = () => {
  return (
    <div className='container'>
        <section className='chats'>
            <div className='chats-header'>
                <h1>Chats</h1>
                <div className='chats-header-serch'>
                    <input type="search" placeholder='Buscar Contacto'/>
                    <button className='button-serch'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <img src={serchIcon} alt="" height={20} />
                            </div>
                        </div>
                        <span>Buscar</span>
                    </button>
                </div>
            </div>
            <div className='conversaciones'>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
                <div className='conversacion'>
                    {/* <div>Imagen de perfil</div> */}
                    <div className='conversacion-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-texto-last-mensaje'>Último Mensaje</span>
                    </div>
                </div>
            </div>
        </section>
        <section className='conversacion-actual'>
            <div className='conversacion-actual-header'>
                <div className='conversacion-actual-header-contenido'>
                    <div className='conversacion-actual-contenido'>
                        <img src={usuarioSinFoto} alt="" />
                    </div>
                    <div className='conversacion-texto header-chat-actual-texto'>
                        <span className='conversacion-texto-nombre'>Julian López</span>
                        <span className='conversacion-actual-estado'>Activo <span></span></span>
                    </div>
                </div>
            </div>
            <div className='mensajes'>

            </div>
            <div className='contenido-mensaje'>
                <input type="text" placeholder='Escribe tu mensaje' />
                <button>send</button>
            </div>
        </section>
    </div>
  )
}

export default Chat