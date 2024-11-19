import { MdDevices, MdEmail, MdMenuBook } from "react-icons/md";
import { FaReact, FaPen, FaShoppingCart } from "react-icons/fa";
import LoadingBar from "./LoadingBar";
import Image from "next/image";
import services from '../data/services.json'

const iconComponents = {
  MdDevices: MdDevices,
  FaReact: FaReact,
  FaPen: FaPen,
  FaShoppingCart: FaShoppingCart,
  MdEmail: MdEmail,
  MdMenuBook: MdMenuBook
};

const Design = () => {
  return (
    <div className='w-full bg-grey-bg py-8'>
      <div className='flex w-4/5 mx-auto py-4'>
        <div className='w-1/2 flex flex-col pt-4'>
          <div id="servicios" className='intro'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-main to-burgundy bg-clip-text text-transparent pb-4'>Diseño y Desarrollo de Paginas Web</h1>
            <LoadingBar />
            <p>Nuestro equipo de diseñadores y desarrolladores web altamente capacitados crea sitios web atractivos y funcionales que se adaptan a tus necesidades y objetivos. Desde sitios web corporativos hasta tiendas en línea, nos aseguramos de que tu presencia en línea sea única y memorable.</p>
          </div>
          <div className='buttons flex flex-col gap-8 mt-4'>
            {Array.from({ length: Math.ceil(services.services.length / 2) }, (_, i) => (
              <div key={i} className="button-group flex justify-between">
                {services.services.slice(i * 2, i * 2 + 2).map((service, index) => {
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

        <div className='w-1/2 justify-items-end'>
          <Image src="/design.svg" alt="Imagen de diseño y desarrollo" width={550} height={550} />
        </div>
      </div>
    </div>

  )
}

export default Design