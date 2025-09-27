import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'features', label: 'Courses' },
    { to: 'testimonials', label: 'Success Stories' },
    { to: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu when link is clicked
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="text-2xl font-bold text-blue-600 cursor-pointer"
              >
                IELTSPro
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70} // Adjust for fixed navbar height
                duration={500}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300"
                activeClass="text-blue-600 font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300"
                  activeClass="text-blue-600 font-semibold"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-blue-600 text-white w-full mt-2 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;