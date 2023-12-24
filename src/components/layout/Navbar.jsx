import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggleButton from '../layout/toggleBtn/ThemeToggleBtn';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full fixed left-0 top-6 z-20">
      <ul className="flex justify-center items-center bg-surface/70 rounded-full backdrop-blur-md ring-2 ring-iris/10 px-1.5 py-1 gap-x-2.5 shadow-iris/10 shadow-xl dark:text-white">
        <NavItem to="home">Inicio</NavItem>
        <NavItem to="experience">Experiencia</NavItem>
        <NavItem to="projects">Proyectos</NavItem>
      </ul>
      <div className="ml-2 sm:ml-4" role="button">
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

const NavItem = ({ children, to }) => {
  return (
    <li className="bg-transparent hover:bg-muted/20 px-0.2 sm:px-1.5 py-1 rounded-md transition-all ease-in-out duration-500">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-xs sm:text-sm hover:cursor-pointer hover:text-blue-500 focus:outline-none"
        role="link"
      >
        <span className="font-poppins">{children}</span>
      </Link>
    </li>
  );
};

export default Navbar;
