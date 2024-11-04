import React from "react";
import Image from "next/image";

export default function Header() {
  return(
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <Image src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="GatWebs Logo" width={50} height={50} />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-orange-main">GatWebs</span>
          </a>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-orange-main rounded hover:bg-orange-main lg:bg-orange-main lg:text-white lg:p-2 ">Inicio</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-orange-main lg:hover:bg-orange-main lg:border-0 lg:hover:text-white lg:rounded-lg lg:p-2">Servicios</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-orange-main lg:hover:bg-orange-main lg:border-0 lg:hover:text-white lg:rounded-lg lg:p-2">Trabajos</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-orange-main lg:hover:bg-orange-main lg:border-0 lg:hover:text-white lg:rounded-lg lg:p-2">Nosotros</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-orange-main lg:hover:bg-orange-main lg:border-0 lg:hover:text-white lg:rounded-lg lg:p-2">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
