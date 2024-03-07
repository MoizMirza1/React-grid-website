import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-4 sticky top-0 z-50 transition-colors duration-300  ${isScrolled ? 'bg-amber-500 bg-opacity-80 backdrop-blur-md  text-white' : 'bg-white text-black'}`}>
      <div className="grid grid-cols-3 container mx-auto gap-4 items-center">
        <div className="col-start-1">
          <div className={`font-bold text-2xl capitalize flex items-center ${isScrolled ? 'text-white' : 'text-black'}`}>LOGO</div>
        </div>
        <div className='col-start-2 flex items-center justify-center'>
          <Link to="/" className={`px-4 hover:text-orange-500 hover:border-b-2 ${isScrolled ? 'text-white' : 'text-black'}`}>Home</Link>
          <Link to="/about" className={`px-4 hover:text-orange-500 hover:border-b-2 ${isScrolled ? 'text-white' : 'text-black'}`}>About</Link>
          <Link to="/services" className={`px-4 hover:text-orange-500 hover:border-b-2 ${isScrolled ? 'text-white' : 'text-black'}`}>Services</Link>
          <Link to="/contact" className={`px-4 hover:text-orange-500 hover:border-b-2 ${isScrolled ? 'text-white' : 'text-black'}`}>Contact</Link>
        </div>
        <div className="col-start-3 flex justify-end items-center relative">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center bg-gray-900 bg-opacity-45 text-white hover:text-gray-200 px-3 py-2 rounded-md cursor-pointer">
              <MdAccountCircle className="w-6 h-6 mr-2" />
              <span className="text-sm">Account</span>
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 bg-white shadow-md py-2 w-48 rounded-md mt-1">
                <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</Link>
                <Link to="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign In</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
