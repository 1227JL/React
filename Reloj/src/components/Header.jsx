import React from 'react'
import userIcon from '../img/user.png'

const Header = () => {
  return (
    <div className=''>
        <header className='w-full h-20 bg-white'>
            <div className='flex justify-end items-center px-5 py-2 gap-4'>
                <span className='font-semibold uppercase'>Usuario</span>
                <img className='userIcon' src={userIcon} alt="" />
            </div>
            <hr className='border-yellow-300 border-b-2 sizeHr mx-auto' />
        </header>
    </div>
  )
}

export default Header