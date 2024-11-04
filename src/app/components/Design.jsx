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
          <div className='buttons flex gap-8'>
            <span className='bg-white text-black shadow-lg border-gray-100 rounded-lg hover:bg-orange-main hover:text-white px-4 py-2 rounded-lg flex'>
              <MdDevices className="text-orange-main mr-2 items-center"/>
              Responsive Design
            </span>
          </div>
        </div>

        <div className='w-1/2'>
          <Image src="/logo.svg" alt="design" width={500} height={500} />
        </div>
      </div>
    </div>

  )
}

export default Design