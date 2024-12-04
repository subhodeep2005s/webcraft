import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Users, Mail, Settings,ArrowBigRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true); // Set initial state to true so header is visible

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Services', to: 'services', icon: <Briefcase className="flex-shrink-0 h-6 w-6 text-indigo-600" /> },
    { name: 'Portfolio', to: 'portfolio', icon: <Home className="flex-shrink-0 h-6 w-6 text-indigo-600" /> },
    { name: 'Testimonials', to: 'testimonials', icon: <Users className="flex-shrink-0 h-6 w-6 text-indigo-600" /> },
    { name: 'Contact', to: 'contact', icon: <Mail className="flex-shrink-0 h-6 w-6 text-indigo-600" /> },
    { name: 'Admin', to: '/admin', icon: <Settings className="flex-shrink-0 h-6 w-6 text-indigo-600" /> },
    { name: 'Satpros', to: '/satpros', icon: <ArrowBigRight className="flex-shrink-0 h-6 w-6 text-indigo-600" /> },


  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent '}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* <ScrollLink to="hero" smooth={true} duration={800} className="cursor-pointer">
              <span className="sr-only  ">WebCraft Agency</span>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-indigo-600'}`}>WebCraft</span>
            </ScrollLink> */}
              <RouterLink to="/" className="cursor-pointer">
    <span className="sr-only">WebCraft Agency</span> {/* Hidden for screen readers */}
    <span className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-indigo-600'}`}>WebCraft</span>
  </RouterLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className={`bg-transparent rounded-md p-2 inline-flex items-center justify-center ${isScrolled ? 'text-indigo-600' : 'text-white'} hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
               item.name === 'Admin' || item.name === 'Satpros' ? (
                <RouterLink
                  key={item.name}
                  to={item.to}
                  className={`text-base font-medium ${
                    isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-gray-500  hover:text-gray-300'
                  } cursor-pointer transition-colors duration-300 hover:underline`}
                >
                  {item.name}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  className={`text-base font-medium ${
                    isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-gray-500  hover:text-gray-300'
                  } cursor-pointer transition-colors duration-300 hover:underline`}
                >
                  {item.name}
                </ScrollLink>
              )
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <ScrollLink to="hero" smooth={true} duration={800} className="text-2xl font-bold text-indigo-600" onClick={toggleMenu}>
                WebCraft
              </ScrollLink>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              {navItems.map((item) => (
                item.name === 'Admin' || item.name === 'Satpros'   ? (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                  </RouterLink>
                ) : (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={800}
                    className="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                  </ScrollLink>
                )
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
