import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Eye, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/portfolio' },
  { name: 'Testimonial', path: '/testimonial' },
  { name: 'Pricing', path: '/pricing' },
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
    <div className={`fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 lg:px-6 z-50 transition-all duration-700 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <header className={`relative transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-black/90 border-orange-500/40 shadow-2xl shadow-orange-500/15' 
          : 'bg-gradient-to-r from-black/70 to-gray-900/70 border-orange-500/25 shadow-xl'
      } backdrop-blur-xl rounded-2xl lg:rounded-3xl border overflow-hidden`}>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/8 via-transparent to-amber-500/8 opacity-60"></div>
        
        {/* Enhanced animated border glow */}
        <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-70'
        }`} style={{
          background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.4), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 4s infinite'
        }}></div>

        <nav className="relative container py-3 lg:py-4 px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Enhanced Premium Logo */}
            <Link to="/" className="group relative flex items-center">
              <div className="relative">
                <span className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                  <span className="text-white group-hover:text-gray-100 transition-colors duration-300">NEXTIN</span>
                </span>
                <span className="text-2xl lg:text-3xl font-extrabold ml-2 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-amber-400 transition-all duration-300">
                  VISION
                </span>
                {/* Enhanced logo underline effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-500"></div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-r from-orange-400/20 to-amber-500/20 -z-10"></div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative group px-4 xl:px-5 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === item.path 
                      ? 'text-orange-400 bg-orange-500/15 shadow-lg shadow-orange-500/20' 
                      : 'text-gray-300 hover:text-orange-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10'
                  }`}
                >
                  <span className="relative z-10 font-medium tracking-wide">{item.name}</span>
                  
                  {/* Enhanced active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/25 to-amber-500/25 rounded-xl animate-pulse"></div>
                  )}
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  
                  {/* Subtle border on hover */}
                  <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/30 rounded-xl transition-all duration-300"></div>
                </Link>
              ))}
              
              {/* Secondary CTA - Portfolio */}
              <Link 
                to="/portfolio" 
                className="group relative ml-2 px-4 xl:px-6 py-2.5 border-2 border-orange-500/50 text-orange-400 rounded-xl font-medium transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Eye size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Work
                </span>
              </Link>
              
              {/* Primary CTA Button - Enhanced */}
              <Link 
                to="/contact" 
                className="group relative ml-2 px-6 xl:px-8 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Phone size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Get Started
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2 text-gray-300 hover:text-orange-400 transition-all duration-300 rounded-xl hover:bg-white/10 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Enhanced Premium Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-orange-500/30 shadow-2xl shadow-orange-500/10 overflow-hidden">
              {/* Mobile Navigation Items */}
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative block transition-all duration-300 transform hover:scale-[1.02] ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-orange-500/25 to-amber-500/25 text-orange-400 shadow-lg shadow-orange-500/20' 
                      : 'text-gray-300 hover:bg-gradient-to-r hover:from-orange-500/15 hover:to-amber-500/15 hover:text-orange-300 hover:shadow-lg hover:shadow-orange-500/10'
                  } ${index === navigation.length - 1 ? '' : 'border-b border-gray-800/50'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="font-medium tracking-wide">{item.name}</span>
                    <ChevronRight 
                      size={16} 
                      className={`transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'text-orange-400 translate-x-1 scale-110' 
                          : 'text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 group-hover:scale-110'
                      }`} 
                    />
                  </div>
                  
                  {/* Enhanced active indicator line */}
                  {location.pathname === item.path && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-amber-500 animate-pulse"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="p-4 bg-gradient-to-r from-gray-900/50 to-black/50 border-t border-gray-800/50">
                <div className="flex flex-col gap-3">
                  {/* Secondary CTA */}
                  <Link 
                    to="/portfolio"
                    className="group flex items-center justify-center px-4 py-3 border-2 border-orange-500/50 text-orange-400 rounded-xl font-medium transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-300 hover:scale-105"
                  >
                    <Eye size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    View Our Work
                  </Link>
                  
                  {/* Primary CTA */}
                  <Link 
                    to="/contact"
                    className="group flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    <Phone size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Get Started
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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