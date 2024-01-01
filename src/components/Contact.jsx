import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MdEmail } from 'react-icons/md';

const ContactLink = ({ href, label, icon, iconSize }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-neutral-300 text-neutral-800 dark:text-neutral-100  dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center px-2 py-2 mb-2 sm:w-auto hover:bg-emerald-600"
  >
    <IconContext.Provider value={{ size: iconSize }}>
      {icon}
    </IconContext.Provider>
    <span className="ml-2">{label}</span>
  </a>
);

const Contact = () => {
  return (
    <div
      name="contact"
      className="mx-auto max-w-xl px-4 dark:text-white  rounded-full"
    >
      <h1 className="text-lg font-montserrat font-bold mb-6 dark:text-neutral-300 text-neutral-800">Contacto</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm font-poppins">
        <ContactLink
          href="https://www.linkedin.com/in/jhon-arciniegas"
          label="LinkedIn"
          icon={<FaLinkedin />}
          iconSize={20}
        />

        <ContactLink
          href="https://github.com/arcibyte"
          label="GitHub"
          icon={<FaGithub />}
          iconSize={20}
        />

        <a
          href="mailto:arcibyte@gmail.com"
          className="border border-neutral-200 text-neutral-800 dark:text-neutral-100 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 flex items-center px-2 py-2 mb-2 w-full sm:w-auto rounded-full hover:bg-emerald-600"
        >
          <IconContext.Provider value={{ size: 20 }}>
            <MdEmail />
          </IconContext.Provider>
          <span className="ml-2">arcibyte@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
