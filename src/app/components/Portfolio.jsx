import React from 'react'
import CenterBar from './centerBar'
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div id="trabajos" className='w-full bg-white py-8'>
      <div className='intro text-center w-4/5 mx-auto'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Nuestros Trabajos</h1>
        <CenterBar />
        <p className='text-center text-xl'>Explora nuestro portafolio de proyectos para ver ejemplos de nuestro trabajo. Cada proyecto es una combinación de diseño, desarrollo y tecnología que refleja nuestra pasión por la excelencia.</p>
      </div>

      <div className="flex gap-4 w-4/5 mt-8 mx-auto justify-center">
        <Link href="https://circuitodelaexcelencia.com" target='_blank' rel='norel'>
          <Image src="/logos/circuito.png" alt="Logo Circuito de la Excelencia" width={145} height={145} />
        </Link>
        <Link href="https://lahuerfana.com" target='_blank' rel='norel'>
          <Image src="/logos/huerfana.png" alt="Logo Huerfana" width={240} height={145} />
        </Link>
        <Link href="https://edicion-especial.com" target='_blank' rel='norel'>
          <Image src="/logos/edes.png" alt="Logo Edicion Especial" width={240} height={145} />
        </Link>
        <Link href="https://avril-assistance.com" target='_blank' rel='norel'>
          <Image src="/logos/avril-assistance.png" alt="Logo Avril Assistance" width={240} height={145} />
        </Link>
      </div>  
    </div>
  )
}

export default Portfolio