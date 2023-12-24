import React from 'react';

const Footer = () => {
  const spanClass = "hover:text-blue-500";

  const generateLink = (url, text) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500"
    >
      <span className={spanClass}>{text}</span>
    </a>
  );

  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-6 text-center font-poppins text-sm dark:text-blue-200">
      <p>
        Desarrollado en {generateLink("https://code.visualstudio.com/", "Visual Studio Code")} con {generateLink("https://reactjs.org/", "React")} y {generateLink("https://tailwindcss.com/", "Tailwind CSS")}. Fuentes: <span className={`${spanClass} font-montserrat`}>Montserrat</span> y <span className={`${spanClass} font-poppins`}>Poppins</span>. Desplegado en {generateLink("https://vercel.com/", "Vercel")}.
      </p>
      <p className="text-sm mt-4 dark:text-white">&copy; 2023 Jhon Arciniegas</p>
    </footer>
  );
};

export default Footer;
