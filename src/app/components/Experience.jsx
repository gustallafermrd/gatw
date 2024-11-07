import React from 'react';
import CenterBar from './CenterBar';
import experience from '../data/experience.json';
import { FiSliders } from "react-icons/fi";
import { BsHeadset, BsPinMapFill, BsTools } from "react-icons/bs";
import { FaUniversalAccess } from "react-icons/fa6";
import { SiSpringCreators } from "react-icons/si";

const iconComponents = {
  FiSliders: FiSliders,
  BsHeadset: BsHeadset,
  BsPinMapFill: BsPinMapFill,
  BsTools: BsTools,
  FaUniversalAccess: FaUniversalAccess,
  SiSpringCreators: SiSpringCreators
};

const Experience = () => {
  return (
    <div className='w-full bg-grey-bg py-8'>
      <div className='intro text-center w-4/5 mx-auto'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Experiencia de Usuario</h1>
        <CenterBar />
        <p className='text-center text-xl'>Estas tecnologías y prácticas ayudan a Gatwebs a ofrecer una experiencia de usuario superior, atraer y retener a clientes, y mejorar su posicionamiento en los resultados de búsqueda.</p>
      </div>
      <div className='w-4/5 mx-auto py-4 grid grid-cols-2 gap-y-8 gap-x-16'>
        {experience.experience.map((item, index) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div 
              key={index}
              className='buttons flex mt-4 bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg'
            >
              <div className='icon w-1/4 justify-items-center self-center text-4xl'>
                <IconComponent />
              </div>
              <div className='flex flex-col w-3/4'>
                <h2 className='text-2xl font-bold'>{item.name}</h2>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience;