import { useState } from 'react';
import logo from '../assets/logo-text.png';

const Navbar = () => {
    // State to manage mobile menu open/close
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggle function for mobile hamburger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-100">
            {/* Container with max-width 1300px */}
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#">
                            <img
                                src={logo}
                                alt="DevStack Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation Links (Visible on md and lg screens) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-pink-600 font-semibold transition-colors duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="#technologies"
                            className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
                        >
                            Technologies
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Right Side Buttons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#signin"
                            className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2 transition-colors duration-200"
                        >
                            Sign In
                        </a>
                        <a
                            href="#signup"
                            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 shadow-sm"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Hamburger Icon Button (Visible only on mobile) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-700 hover:text-pink-600 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                // Close Icon (X)
                                <svg
                                    className="w-7 h-7"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg
                                    className="w-7 h-7"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-3">
                    <a
                        href="#home"
                        className="block text-pink-600 font-semibold py-2 px-3 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#technologies"
                        className="block text-gray-700 hover:text-pink-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Technologies
                    </a>
                    <a
                        href="#projects"
                        className="block text-gray-700 hover:text-pink-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="block text-gray-700 hover:text-pink-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="block text-gray-700 hover:text-pink-600 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>

                    {/* Action Buttons in Mobile View */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
                        <a
                            href="#signin"
                            className="text-center text-gray-700 hover:text-pink-600 font-medium py-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </a>
                        <a
                            href="#signup"
                            className="text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium py-2 rounded-full shadow-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;