import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Eye, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'Testimonial', path: '/testimonial' },
  { name: 'Career', path: '/careers' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Enhanced sticky behavior - always visible when scrolling up
      setScrolled(currentScrollY > 50);
      
      // Improved visibility logic - hide only when scrolling down fast
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className={`fixed top-3 lg:top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-3 lg:px-4 z-50 transition-all duration-700 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <header className={`relative transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-black/90 border-orange-500/40 shadow-2xl shadow-orange-500/15' 
          : 'bg-gradient-to-r from-black/70 to-gray-900/70 border-orange-500/25 shadow-xl'
      } backdrop-blur-xl rounded-xl lg:rounded-2xl border overflow-hidden`}>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/6 via-transparent to-amber-500/6 opacity-50"></div>
        
        {/* Enhanced animated border glow */}
        <div className={`absolute inset-0 rounded-xl lg:rounded-2xl transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-60'
        }`} style={{
          background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 4s infinite'
        }}></div>

        <nav className="relative container py-2 lg:py-2.5 px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Premium Compact Logo */}
            <Link to="/" className="group relative flex items-center">
              <div className="relative">
                <span className="text-xl lg:text-2xl font-bold tracking-tight">
                  <span className="text-white group-hover:text-gray-100 transition-colors duration-300">NEXTIN</span>
                </span>
                <span className="text-xl lg:text-2xl font-bold ml-1.5 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-amber-400 transition-all duration-300">
                  VISION
                </span>
                {/* Refined logo underline effect */}
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-500"></div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-r from-orange-400/15 to-amber-500/15 -z-10"></div>
              </div>
            </Link>

            {/* Refined Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative group px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === item.path 
                      ? 'text-orange-400 bg-orange-500/12 shadow-md shadow-orange-500/15' 
                      : 'text-gray-300 hover:text-orange-300 hover:bg-white/8 hover:shadow-md hover:shadow-white/8'
                  }`}
                >
                  <span className="relative z-10 font-medium text-sm tracking-wide">{item.name}</span>
                  
                  {/* Enhanced active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg animate-pulse"></div>
                  )}
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  
                  {/* Subtle border on hover */}
                  <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/25 rounded-lg transition-all duration-300"></div>
                </Link>
              ))}
              
              {/* Compact Secondary CTA - Portfolio */}
              <Link 
                to="/portfolio" 
                className="group relative ml-1.5 px-3 xl:px-4 py-2 border border-orange-500/40 text-orange-400 rounded-lg font-medium text-sm transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/8 hover:text-orange-300 hover:scale-105 hover:shadow-md hover:shadow-orange-500/15 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/8 to-amber-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Eye size={14} className="mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                  Work
                </span>
              </Link>
              
              {/* Compact Primary CTA Button */}
              <Link 
                to="/contact" 
                className="group relative ml-1.5 px-4 xl:px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Phone size={14} className="mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                  Contact
                  <ChevronRight size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Compact Mobile Menu Button */}
            <button
              className="lg:hidden relative p-1.5 text-gray-300 hover:text-orange-400 transition-all duration-300 rounded-lg hover:bg-white/8 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                  }`} 
                />
                <X 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Refined Premium Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-xl border border-orange-500/25 shadow-xl shadow-orange-500/8 overflow-hidden">
              {/* Mobile Navigation Items */}
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative block transition-all duration-300 transform hover:scale-[1.01] ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 shadow-md shadow-orange-500/15' 
                      : 'text-gray-300 hover:bg-gradient-to-r hover:from-orange-500/12 hover:to-amber-500/12 hover:text-orange-300 hover:shadow-md hover:shadow-orange-500/8'
                  } ${index === navigation.length - 1 ? '' : 'border-b border-gray-800/40'}`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="px-4 py-3 flex items-center justify-between">
                    <span className="font-medium text-sm tracking-wide">{item.name}</span>
                    <ChevronRight 
                      size={14} 
                      className={`transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'text-orange-400 translate-x-0.5 scale-110' 
                          : 'text-gray-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:scale-110'
                      }`} 
                    />
                  </div>
                  
                  {/* Refined active indicator line */}
                  {location.pathname === item.path && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-amber-500 animate-pulse"></div>
                  )}
                </Link>
              ))}
              
              {/* Compact Mobile CTAs */}
              <div className="p-3 bg-gradient-to-r from-gray-900/40 to-black/40 border-t border-gray-800/40">
                <div className="flex gap-2">
                  
                  {/* Compact Primary CTA */}
                  <Link 
                    to="/contact"
                    className="group flex-1 flex items-center justify-center px-3 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <Phone size={14} className="mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                    Contact
                    <ChevronRight size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

export default Header;