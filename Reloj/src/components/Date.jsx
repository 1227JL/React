import React from 'react'

const Date = () => {
  return (
  <div className='container flex flex-col items-center justify-center h-screen'>
    <input className='mx-auto mb-5 rounded-md shadow-md p-4 px-4 w-64' type="date" />
    <div className='w-1/2'>
      <ul className='container flex flex-col gap-5 mx-auto w-full overflow-y-scroll'>
        <li className='container bg-white w-full h-20 rounded-lg'>a</li>
        <li className='container bg-white w-full h-20 rounded-lg'>a</li>
        <li className='container bg-white w-full h-20 rounded-lg'>a</li>
        <li className='container bg-white w-full h-20 rounded-lg'>a</li>
        <li className='container bg-white w-full h-20 rounded-lg'>a</li>
        <li className='container bg-white w-full h-20 rounded-lg'>a</li>
      </ul>
    </div>
</div>

  )
}

export default Date