import React from "react";
import { FiExternalLink, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div name="contact" className="px-4 sm:px-8 md:px-16 lg:px-32 mt-2 max-w-screen-lg mx-auto mb-2 relative">
      <h1 className="text-lg font-montserrat mb-6 font-bold">Contacto</h1>
      <div className="relative flex items-center">
        <FiMail className="text-white mr-2" size={28} />
        <input
          type="text"
          readOnly
          className="bg-white w-full py-1.5 px-3 rounded-lg grid place-items-center text-black"
          value="arcibyte@gmail.com"
        />
      </div>
      <div>
        <ul className="flex font-poppins text-sm space-x-4 mt-6">
          <li className="flex items-center">
            <a
              href="https://www.linkedin.com/in/jhon-arciniegas"
              className="flex items-center hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <FiExternalLink className="ml-2" />
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="https://github.com/arcibyte"
              className="flex items-center hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
              <FiExternalLink className="ml-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
