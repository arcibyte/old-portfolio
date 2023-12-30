import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleBtn';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full fixed left-0 top-6 z-20">
      <ul className="flex justify-center items-center bg-surface/70 rounded-full backdrop-blur-md  border dark:border-neutral-200 border-neutral-700 ring-iris/10 px-1.5 py-1 gap-x-2.5 shadow-iris/10 shadow-xl dark:text-white">
        <NavItem to="/">inicio</NavItem>
        <NavRouterItem to="/blog">blog</NavRouterItem>
      </ul>
      <div className="ml-2 sm:ml-4" role="button">
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

const NavItem = ({ children, to }) => {
  return (
    <li className="bg-transparent sm:hover:bg-muted/20 px-1.5 sm:px-1.5 py-1 rounded-md">
      <RouterLink
        to={to}
        className="text-xs sm:text-sm sm:hover:cursor-pointer sm:hover:text-emerald-600 focus:outline-none"
        role="link"
      >
        <span className="font-poppins">{children}</span>
      </RouterLink>
    </li>
  );
};

const NavRouterItem = ({ children, to }) => {
  return (
    <li className="bg-transparent sm:hover:bg-muted/20 px-1.5 sm:px-1.5 py-1 rounded-md">
      <RouterLink
        to={to}
        className="text-xs sm:text-sm sm:hover:cursor-pointer sm:hover:text-emerald-600 focus:outline-none"
        role="link"
      >
        <span className="font-poppins">{children}</span>
      </RouterLink>
    </li>
  );
};

export default Navbar;
