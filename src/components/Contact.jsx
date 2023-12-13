import React, { useRef, useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  const emailRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const copyTimeout = 1000;

  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => setCopied(false), copyTimeout);
      return () => clearTimeout(timeoutId);
    }
  }, [copied]);

  const copyToClipboard = async () => {
    try {
      console.log('Copying to clipboard...');
      await navigator.clipboard.writeText(emailRef.current.value);
      setCopied(true);
      setError(null); // Reset the error state on successful copy
      console.log('Copied to clipboard successfully!');
    } catch (err) {
      setError("Error al copiar al portapapeles");
      console.error("No se pudo copiar al portapapeles: ", err);
    }
  };

  return (
    <div
      name="contact"
      className="px-4 sm:px-8 md:px-16 lg:px-32 mt-2 max-w-screen-lg mx-auto mb-2 relative"
    >
      <h1 className="text-lg font-montserrat mb-6">Contacto</h1>
      <div className="relative">
        <input
          ref={emailRef}
          type="text"
          readOnly
          className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
          value="arcibyte@gmail.com"
          onCopy={() => setCopied(true)}
        />
        <button
          onClick={copyToClipboard}
          className="absolute top-0 right-0 px-3 py-1 bg-blue-500 h-full w-20 rounded-md font-poppins text-sm hover:bg-blue-600 focus:outline-none cursor-pointer"
          aria-label="Copy Email to Clipboard"
        >
          Copiar
        </button>
      </div>
      {copied && (
        <div className="absolute top-2.5 right-4 md:right-32 bg-green-500 font-poppins py-2 px-2 text-sm rounded-md">
          ¡Copiado!
        </div>
      )}
      {error && (
        <div className="absolute top-[-2.5em] right-0 md:right-32 bg-red-500 text-white py-2 px-2 text-sm rounded-md font-poppins">
          {error}
        </div>
      )}
      <div>
        <ul className="flex font-poppins text-sm space-x-4 mt-6">
          <li className="flex items-center">
            <a
              href="https://www.linkedin.com/in/jhon-arciniegas"
              className=" flex items-center hover:text-blue-400"
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
              className=" flex items-center hover:text-blue-400"
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
