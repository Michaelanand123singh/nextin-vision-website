import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Process', path: '/process' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-50">
      <header className="bg-white/90 backdrop-blur-lg rounded-full shadow-lg">
        <nav className="container py-2 px-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              NEXTIN VISION
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors hover:text-orange-400 ${
                    location.pathname === item.path ? 'text-orange-600' : 'text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="px-6 py-2 bg-black/90 text-white rounded-full hover:bg-blue-400 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-6 hover:bg-gray-50 ${
                    location.pathname === item.path ? 'text-blue-500' : 'text-gray-600'
                  } ${item.name === 'Contact' ? 'border-t border-gray-100' : ''}`}
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