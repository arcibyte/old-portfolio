import React from "react";
import { FiExternalLink, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="px-4 sm:px-8 md:px-16 lg:px-32 mt-2 max-w-screen-lg mx-auto mb-2 relative dark:text-white"
    >
      <h1 className="text-lg font-montserrat font-bold mb-6">Contacto</h1>
      <div className="relative flex items-center">
        <FiMail className="mr-1" size={28} />
        <label htmlFor="emailInput" className="mr-2 font-poppins">Correo</label>
        <input
          type="text"
          id="emailInput"
          readOnly
          className="border-2 border-black w-full py-1.5 px-3 rounded-lg grid place-items-center text-black"
          value="arcibyte@gmail.com"
          aria-readonly="true"
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
