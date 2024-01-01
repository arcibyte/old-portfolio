import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.webp";

const Hero = () => {
  return (
    <div className="mx-auto max-w-xl mt-28 px-4">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex-shrink-0">
          <img
            src={Profile}
            alt="Jhon Arciniegas"
            className="w-24 h-24 object-cover border-spacing-2 border-2 dark:border-neutral-200 overflow-hidden rounded-full mb-4 sm:mb-0 mr-4 shape-outside transition-transform duration-500 transform hover:scale-105 border-neutral-700"
          />
        </div>
        <div className="text-center sm:text-left max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold font-montserrat text-neutral-700 dark:text-neutral-200">
            Jhon Arciniegas
          </h1>
          <h2 className="text-xl font-bold font-montserrat bg-gradient-to-r from-emerald-500 to-emerald-200 text-transparent bg-clip-text">
            Desarrollador FullStack
          </h2>
          <p className="mb-2 text-sm font-poppins dark:text-neutral-400">
            Codifico para impulsar negocios.{" "}
            <span style={{ fontSize: "1.2em" }}>🚀</span>
          </p>
          <ul className="flex font-poppins text-sm space-x-4 justify-center sm:justify-start">
            <li>
              <a
                href="https://www.linkedin.com/in/jhon-arciniegas"
                className="flex items-center text-neutral-800 dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-200 hover:bg-emerald-600 rounded-full p-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-base" />
                <span className="text-sm ml-2">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arcibyte"
                className="flex items-center text-neutral-800 dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-200 rounded-full p-2 hover:bg-emerald-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-base" />
                <span className="text-sm ml-2">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
