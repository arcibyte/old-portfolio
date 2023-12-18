import React from "react";
import { FiExternalLink} from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-scroll";
import Profile from "../assets/profile.webp";

const Header = () => {
  return (
    <div name="home" className="px-4 sm:px-8 md:px-16 lg:px-32 py-6 sm:mt-24 mt-16">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex-shrink-0">
          <img
            src={Profile}
            alt="Jhon Arciniegas"
            className="w-32 h-32  object-cover border-spacing-2 border-2 border-blue-300 overflow-hidden rounded-full mb-4 sm:mb-0 sm:mr-6 transition-transform duration-500 transform hover:scale-105"
          />
        </div>
        <div className="text-center sm:text-left max-w-md">
          <h1 className="text-xl sm:text-2xl font-montserrat font-bold text-[#f4f6ff]">
            Jhon Arciniegas
          </h1>
          <h2 className="text-xl font-bold font-montserrat bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">
            Desarrollador FullStack
          </h2>
          <h6 className="mb-2 text-sm font-poppins text-[#d0d9ff]">
            Codifico experiencias únicas que impulsan negocios.
          </h6>
          <ul className="flex font-poppins text-xs sm:text-sm space-x-4 justify-center sm:justify-start">
            <li className="flex items-center">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`flex items-center hover:text-blue-400 cursor-pointer`}
              >
                <MdOutlineMail className="mr-1" />
                <span className="text-sm">Correo</span>
              </Link>
              </li>
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
