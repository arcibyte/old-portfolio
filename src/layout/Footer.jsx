import React from 'react';

const Footer = () => {
  const spanClass = "hover:text-emerald-600";

  const generateLink = (url, text) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-900 dark:text-neutral-100"
    >
      <span className={spanClass}>{text}</span>
    </a>
  );

  return (
    <footer className="mx-auto max-w-xl px-4 py-6 text-center font-poppins text-sm text-neutral-700 dark:text-neutral-300">
      <p>
        Desarrollado en {generateLink("https://code.visualstudio.com/", "Visual Studio Code")} con {generateLink("https://reactjs.org/", "React")} y {generateLink("https://tailwindcss.com/", "Tailwind CSS")}. Fuentes: <span className={`${spanClass} font-montserrat`}>Montserrat</span> y <span className={`${spanClass} font-poppins`}>Poppins</span>. Desplegado en {generateLink("https://vercel.com/", "Vercel")}.
      </p>
      <p className="text-sm mt-4 dark:text-neutral-200">Jhon Arciniegas &copy; 2023</p>
    </footer>
  );
};

export default Footer;
