import React from "react";
import { FiExternalLink, /*FiDownload*/ } from "react-icons/fi";
/*import Profile from "../assets/profile.webp";*/
/*import CV from "../assets/cv.pdf";*/

const Header = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-6 mt-20">
      <div className="flex flex-col sm:flex-row items-center">
        {/*"flex-shrink-0"
        <div className="flex-shrink-0">
          <img
            src={Profile}
            alt="Jhon Arciniegas"
            className="w-40 h-40 overflow-hidden rounded-full mb-4 sm:mb-0 sm:mr-8 transition-transform duration-500 transform hover:scale-105"
          />
        </div>
         */}
        <div className="text-center sm:text-left max-w-md">
          <h1 className="text-xl sm:text-2xl font-montserrat">
            Jhon Arciniegas
          </h1>
          <h3 className="text-lg font-bold font-montserrat bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">
            Desarrollador FullStack
          </h3>
          <h6 className="mb-2 text-sm font-poppins text-[#AAB7B8]">
            Codifico experiencias únicas que impulsan negocios.
          </h6>
          <ul className="flex font-poppins text-xs sm:text-sm space-x-4 justify-center sm:justify-start">
            {/*<li className="flex items-center">
              <a
                href={CV}
                className="flex items-center hover:text-blue-400"
                download="Jhon_Arciniegas_cv.pdf"
              >
                <FiDownload className="mr-1 sm:mr-2 text-xs" />
                <span>Descargar CV</span>
              </a>
        </li>*/}
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/jhon-arciniegas"
                className="flex items-center hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs sm:text-sm">LinkedIn</span>
                <FiExternalLink className="ml-1 sm:ml-2 text-xs" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://github.com/arcibyte"
                className="flex items-center hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs sm:text-sm">Github</span>
                <FiExternalLink className="ml-1 sm:ml-2 text-xs" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
