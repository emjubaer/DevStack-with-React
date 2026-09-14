import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  
  return (
    <nav className="border-b  border-gray-100 relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Mobile menu toggle button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 p-1"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <a href="#">
              <img
                src={logo}
                alt="DevStack Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-pink-600 font-semibold">
              Home
            </a>
            <a href="#technologies" className="text-gray-600 hover:text-pink-600 font-medium">
              Technologies
            </a>
            <a href="#projects" className="text-gray-600 hover:text-pink-600 font-medium">
              Projects
            </a>
            <a href="#about" className="text-gray-600 hover:text-pink-600 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 font-medium">
              Contact
            </a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="#signin"
              className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-1.5"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="btn btn-sm sm:btn-md border-none text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full font-medium text-xs sm:text-sm px-5 py-2 capitalize"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 z-50">
          <ul className="menu px-4 py-4 space-y-1 text-base font-medium">
            <li>
              <a href="#home" className="text-pink-600" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" className="text-gray-700 hover:text-pink-600" onClick={closeMenu}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-700 hover:text-pink-600" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-pink-600" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-pink-600" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;