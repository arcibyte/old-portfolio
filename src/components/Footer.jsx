import React from 'react';

const Footer = () => {
  const spanClass = "text-white hover:text-blue-500";

  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-6 text-center font-poppins text-sm text-[#AAB7B8]">
      <p>
        Desarrollado en{' '}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <span className={spanClass}>Visual Studio Code</span>
        </a>{' '}
        con{' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <span className={spanClass}>React</span>
        </a>{' '}
        y{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <span className={spanClass}>Tailwind CSS</span>
        </a>
        . Fuentes: <span className={`${spanClass} font-montserrat`}>Montserrat</span> y{' '}
        <span className={`${spanClass} font-poppins`}>Poppins</span>. Desplegado en{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <span className={spanClass}>Vercel</span>
        </a>
        .
      </p>
      <p className="text-sm mt-4">&copy; 2023 Jhon Arciniegas</p>
    </footer>
  );
};

export default Footer;
