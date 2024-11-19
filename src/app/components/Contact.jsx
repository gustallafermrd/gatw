import React from 'react'
import CenterBar from './CenterBar'

const Contact = () => {
  return (
    <div id="contactanos" className='w-full bg-grey-bg py-8'>
      <div className='intro text-center w-4/5 mx-auto'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Contactanos</h1>
        <CenterBar />
        <p className='text-center text-xl'>Llena el siguiente formulario y nuestro equipo se contactara lo mas pronto posible.</p>
      </div>

      <div className="flex gap-4 w-4/5 mt-8 mx-auto justify-center">
        formulario
      </div>
    </div>
  )
}

export default Contact