import { MdDevices } from "react-icons/md";
import Image from "next/image";
const Design = () => {
  return (
    <div className='w-full bg-grey-bg'>
      <div className='flex w-4/5 mx-auto py-4'>
        <div className='w-1/2 flex flex-col pt-4'>
          <div className='intro'>
            <h1 className='text-4xl font-bold'>Diseño y Desarrollo de Paginas Web</h1>
            <p>Nuestro equipo de diseñadores y desarrolladores web altamente capacitados crea sitios web atractivos y funcionales que se adaptan a tus necesidades y objetivos. Desde sitios web corporativos hasta tiendas en línea, nos aseguramos de que tu presencia en línea sea única y memorable.</p>
          </div>
          <div className='buttons flex flex-col gap-8'>
            <div className="button-group flex justify-between">
              <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64'>
                <MdDevices className="mr-2 self-center"/>
                Responsive Design
              </span>
              <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64 text-center'>
                <MdDevices className="mr-2 self-center"/>
                React Development
              </span>
            </div>
            <div className="button-group flex justify-between">
              <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64'>
                <MdDevices className="mr-2 self-center"/>
                UI / UX Design
              </span>
              <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64'>
                <MdDevices className="mr-2 self-center"/>
                E-commerce Development
              </span>
            </div>
            <div className="button-group flex justify-between">
              <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64'>
                <MdDevices className="mr-2 self-center"/>
                Company E-amils
              </span>
              <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex w-64'>
                <MdDevices className="mr-2 self-center"/>
                Digital Menus
              </span>
            </div>
          </div>
        </div>

        <div className='w-1/2'>
          <Image src="/design-image.svg" alt="design" width={600} height={600} />
        </div>
      </div>
    </div>

  )
}

export default Design