import React, { useState } from "react";
import { Link } from "react-scroll";
import myLogo from '../assets/Logo.png';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-x-0 top-0 bg-opacity-75 backdrop-blur-md z-10">
      <div className="mx-auto px-4 sm:px-8 md:px-14 lg:px-28 max-w-screen-md">
        <div className="flex justify-between items-center md:h-16">
          <div className="list-none sm:text-lg font-poppins md:mb-0">
            <Link
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={scrollToTop}
            >
              <img
                src={myLogo}
                alt="Jhon Arciniegas Logo"
                className="h-12 md:h-16 w-12 md:w-16 cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center list-none font-poppins text-sm">
            <NavItem to="experience">Experiencia</NavItem>
            <NavItem to="projects">Proyectos</NavItem>
            <NavItem to="contact">Contacto</NavItem>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              style={{
                outline: 'none',
                backgroundColor: 'transparent',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {isMenuOpen ? (
                <span className="text-lg font-montserrat">Cerrar</span>
              ) : (
                <span className="text-lg font-montserrat">Menu</span>
              )}
            </button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute right-4 top-16 bg-[#10131a] rounded-md shadow-md overflow-hidden"
              >
                <ul className="list-none p-0 m-0">
                  <NavItem to="experience" onClick={toggleMenu}>Experiencia</NavItem>
                  <NavItem to="projects" onClick={toggleMenu}>Proyectos</NavItem>
                  <NavItem to="contact" onClick={toggleMenu}>Contacto</NavItem>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ children, to, onClick }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <li className="my-5 mx-2">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`cursor-pointer py-2 px-4 md:px-2 w-full md:w-auto focus:outline-none 
          ${isHovered ? 'hover:text-blue-500' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
