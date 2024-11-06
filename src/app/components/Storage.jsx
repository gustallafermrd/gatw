import React from 'react'
import Image from 'next/image'
import LoadingBar from './LoadingBar'
import storage from '../data/storage.json'
import { FaDatabase, FaServer, FaFolderOpen } from "react-icons/fa";
import { MdBackup, MdOutlineAlternateEmail } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";


const iconComponents = {
  FaDatabase: FaDatabase,
  FaServer: FaServer,
  FaFolderOpen: FaFolderOpen,
  MdBackup: MdBackup,
  MdOutlineAlternateEmail: MdOutlineAlternateEmail,
  VscRemoteExplorer: VscRemoteExplorer
};

const Storage = () => {
  return (
    <div className='w-full bg-white py-8'>
      <div className='flex w-4/5 mx-auto py-4'>
        <div className='w-1/2 flex flex-col pt-4'>
          <div className='w-1/2'>
            <Image src="/design.svg" alt="Imagen de diseño y desarrollo" width={550} height={550} />
          </div>
        </div>

        <div className='w-1/2 flex flex-col pt-4'>
          <div className='intro'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Alojamiento de Servicios</h1>
            <LoadingBar />
            <p>Un alojamiento confiable es esencial para mantener tu sitio web en línea y accesible para tus visitantes. Ofrecemos soluciones de alojamiento seguras y de alta velocidad para garantizar que tu sitio web siempre esté disponible y funcionando sin problemas.</p>
          </div>
          <div className='buttons flex flex-col gap-8 mt-4'>
            {Array.from({ length: Math.ceil(storage.storage.length / 2) }, (_, i) => (
              <div key={i} className="button-group flex justify-between">
                {storage.storage.slice(i * 2, i * 2 + 2).map((service, index) => {
                  const IconComponent = iconComponents[service.icon];
                  return (
                    <span
                      key={index}
                      className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64'
                    >
                      <IconComponent className="mr-2 self-center"/>
                      {service.name}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Storage