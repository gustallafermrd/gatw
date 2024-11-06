import React from 'react';
import LoadingBar from './LoadingBar';
import experience from '../data/experience.json';
import { FaUser, FaStar, FaSearch } from "react-icons/fa";

const iconComponents = {
  FaUser: FaUser,
  FaStar: FaStar,
  FaSearch: FaSearch
};

const Experience = () => {
  return (
    <div className='w-full bg-grey-bg py-8'>
      <div className='intro text-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Experiencia de Usuario</h1>
        <LoadingBar />
        <p className='text-center text-xl'>Estas tecnologías y prácticas ayudan a Gatwebs a ofrecer una experiencia de usuario superior, atraer y retener a clientes, y mejorar su posicionamiento en los resultados de búsqueda.</p>
      </div>
      <div className='flex w-4/5 mx-auto py-4 text-center'>
        <div className='buttons flex flex-col gap-8 mt-4 w-full'>
          {Array.from({ length: Math.ceil(experience.experience.length / 2) }, (_, i) => (
            <div key={i} className="button-group flex justify-between">
              {experience.experience.slice(i * 2, i * 2 + 2).map((experience, index) => {
                const IconComponent = iconComponents[experience.icon];
                return (
                  <>
                    <span
                      key={index}
                      className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-80'
                    >
                      <IconComponent className="mr-2 self-center" />
                      {experience.name}
                      <p key={index}>{experience.description}</p>
                    </span>

                  </>
                );
              })}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Experience;