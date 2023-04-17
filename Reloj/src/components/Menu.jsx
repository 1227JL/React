import React, { useState } from 'react'
import OpcionesMenu from './OpcionesMenu'

const Menu = ({menu, setMenu}) => {

  const [displayMenu, setDisplayMenu] = useState(false)
  
  const handleMenu = ()=>{
    setDisplayMenu(!displayMenu)
  }
  
  return (
    <div className='mb-5 w-1/4 mx-auto text-center justify-center'>
        <h1
          className='w-1/6 mx-auto font-semibold text-xl border-b-4 border-sky-400 py-2 cursor-pointer'
          onClick={handleMenu}
        >Menú</h1>
        {displayMenu && <OpcionesMenu
          menu={menu}
          setMenu={setMenu}
        />}
    </div>
  )
}

export default Menu