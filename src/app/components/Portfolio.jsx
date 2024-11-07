import React from 'react'
import CenterBar from './centerBar'

const Portfolio = () => {
  return (
    <div className='w-full bg-white py-8'>
      <div className='intro text-center w-4/5 mx-auto'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Nuestros Trabajos</h1>
        <CenterBar />
        <p className='text-center text-xl'>Explora nuestro portafolio de proyectos para ver ejemplos de nuestro trabajo. Cada proyecto es una combinación de diseño, desarrollo y tecnología que refleja nuestra pasión por la excelencia.</p>
      </div>

      
    </div>
  )
}

export default Portfolio