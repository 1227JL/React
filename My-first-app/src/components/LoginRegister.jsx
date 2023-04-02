import { useState } from 'react'
import React from 'react'
import tailwindCSS from '../img/tailwind-css.png';

const LoginRegister = () => {
  return (
    <div className='flex w-full h-screen items-center'>
      <form className="sm:w-1/2 sm:shadow-md md:w-1/2 md:shadow-md lg:shadow-md lg:w-1/2 w-full mx-auto shadow-none rounded-lg py-10 px-7">
          <div className="flex justify-center">
            <img className="block h-16 w-auto" src={tailwindCSS} alt="Your Company"/>
          </div>
          <div className="mb-5">
            <label htmlFor="mascot
            a" className="block  uppercase font-bold">
              Name
            </label>  
            <input 
            id="mascota"
            className=" outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mascot
            a" className="block  uppercase font-bold">
              Email
            </label>
            <input 
            id="mascota"
            className=" outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mascot
            a" className="block  uppercase font-bold">
              Password
            </label>
            <input 
            id="mascota"
            className=" outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mascot
            a" className="block  uppercase font-bold">
              Confirm Password
            </label>
            <input 
            id="mascota"
            className=" outline-blue-500 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            />
          </div>
          <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-sm cursor-pointer w-full' type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default LoginRegister