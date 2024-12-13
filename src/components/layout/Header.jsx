import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/portfolio' },
  { name: 'Testimonial', path: '/testimonial' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
  
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-50">
      <header className="bg-gradient-to-br from-white/80 to-white/95 backdrop-blur-lg rounded-full shadow-2xl">
        <nav className="container py-1 px-5">
          <div className="flex items-center justify-between">
            {/* Logo with split color */}
            <Link to="/" className="text-2xl font-bold">
              <span className="text-black">NEXTIN</span>
              <span className="text-orange-600 ml-2">VISION</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative group transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'text-orange-500' 
                      : 'text-gray-700 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full hover:from-orange-600 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-6 transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-orange-50 to-white text-orange-600' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
                  } ${item.name === 'Contact' ? 'border-t border-gray-200' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;