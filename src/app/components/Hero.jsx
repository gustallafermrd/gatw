import React from 'react'
import Image from 'next/image'
import { FaPeopleGroup } from "react-icons/fa6";



const Hero = () => {
  return (
    <>
      <div className='flex w-4/5 mx-auto'>
        <div className='w-1/2 flex flex-col pt-4'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent'>Gatwebs, tu socio en el mundo digital</h1>
          <p className='text-lg py-4'>Nos dedicamos a transformar ideas en realidades digitales. Somos expertos en el desarrollo web y ofrecemos una amplia gama de servicios para ayudarte a crecer en línea.</p>
          <button type="submit" className='bg-orange-main text-white px-4 py-2 rounded-lg w-60'>Contáctanos</button>
        </div>
        <div className='w-2/3 p-4 lg:ml-[16em]'>
          <Image src="/hero-image.svg" alt="hero" width={500} height={500} />
        </div>
      </div>

      {/* Advantages */}

      <div className='flex w-4/5 mx-auto py-4 gap-6'>
        <div className='border-2 border-orange-main rounded-lg shadow-lg shadow-orange-main/50 p-4 flex-col'>
          <FaPeopleGroup className='text-orange-main text-4xl' />
          <h3 className='text-2xl font-bold'>Experiencia Integral</h3>
          <p>Ofrecemos una amplia gama de servicios que van desde el desarrollo web hasta la creación de códigos QR para menús digitales.</p>
        </div>
        <div className='border-2 border-green-box rounded-lg shadow-lg shadow-green-box/50 p-4 flex-col'>
          <FaPeopleGroup className='text-green-box text-4xl' />
          <h3 className='text-2xl font-bold'>Profesionalismo y calidad</h3>
          <p>Somos un equipo altamente capacitado en el desarrollo web y tecnologías digitales, garantizando la calidad y eficacia en cada proyecto.</p>
        </div>
        <div className='border-2 border-blue-box rounded-lg shadow-lg shadow-blue-box/50 p-4 flex-col'>
          <FaPeopleGroup className='text-blue-box text-4xl' />
          <h3 className='text-2xl font-bold'>Expericia de Usuario</h3>
          <p>Usamos tecnologías web avanzadas para mejorar la experiencia del usuario, lo que se traduce en sitios web atractivos y funcionales.</p>
        </div>
        <div className='border-2 border-purple-box rounded-lg shadow-lg shadow-purple-box/50 p-4 flex-col'>
          <FaPeopleGroup className='text-purple-box text-4xl' />
          <h3 className='text-2xl font-bold'>Innovacion Tecnologica</h3>
          <p>Trabajando con nosotros te beneficiarás de la constante innovación tecnológica y las últimas tendencias en desarrollo web.</p>
        </div>
      </div>
    </>
  )
}

export default Hero