import React from 'react'
import userIcon from '../img/person.png'
const Perfil = () => {
  return (
    <div className='container bg-white h-56 w-2/6 my-5 mx-auto shadow-md rounded-lg'>
        <div className='container flex h-full w-1/3 items-center mx-4'>
            <img className='h-32' src={userIcon} alt="" height='20px' />
        </div>
    </div>
  )
}

export default Perfil