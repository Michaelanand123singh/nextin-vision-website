// src/components/layout/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ExternalLink, Linkedin, Github, Twitter, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-amber-400/6 to-orange-500/6 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-orange-400/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-amber-400/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-orange-500/35 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
                  NEXTIN VISION
                </h3>
                <p className="text-lg text-gray-300/90 leading-relaxed font-light mb-6">
                  Transforming Corporate Stories into Visual Impact through cutting-edge technology solutions.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="tel:+917667925604" 
                  className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} className="text-orange-400" />
                  </div>
                  <span className="font-medium">+91 7667925604</span>
                </a>
                
                <a 
                  href="mailto:official@nextinvision.in" 
                  className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={16} className="text-orange-400" />
                  </div>
                  <span className="font-medium">official@nextinvision.in</span>
                </a>
                
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center">
                    <MapPin size={16} className="text-orange-400" />
                  </div>
                  <span className="font-medium">New Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide">FOLLOW US</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="group w-10 h-10 bg-gradient-to-br from-gray-800/80 to-black/80 border border-orange-500/20 rounded-xl flex items-center justify-center hover:border-orange-400/50 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-amber-500/10 transition-all duration-300">
                    <Linkedin size={16} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </a>
                  <a href="#" className="group w-10 h-10 bg-gradient-to-br from-gray-800/80 to-black/80 border border-orange-500/20 rounded-xl flex items-center justify-center hover:border-orange-400/50 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-amber-500/10 transition-all duration-300">
                    <Github size={16} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </a>
                  <a href="#" className="group w-10 h-10 bg-gradient-to-br from-gray-800/80 to-black/80 border border-orange-500/20 rounded-xl flex items-center justify-center hover:border-orange-400/50 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-amber-500/10 transition-all duration-300">
                    <Twitter size={16} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Web & Mobile Development', to: '/services' },
                  { name: 'Agentic AI Solutions', to: '/services' },
                  { name: 'Cloud Infrastructure', to: '/services' },
                  { name: 'Product Design & UX', to: '/services' },
                  { name: 'Tech Consulting', to: '/services' }
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.to} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm font-medium"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', to: '/about' },
                  { name: 'Portfolio', to: '/portfolio' },
                  { name: 'Our Process', to: '/process' },
                  { name: 'Careers', to: '/careers' },
                  { name: 'Contact', to: '/contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm font-medium"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 relative">
                Stay Updated
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Subscribe to our newsletter for the latest insights, tech trends, and project updates.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-gray-800/80 to-black/80 text-white border border-orange-500/20 focus:outline-none focus:border-orange-400/50 focus:bg-gradient-to-br focus:from-orange-500/5 focus:to-amber-500/5 transition-all duration-300 text-sm backdrop-blur-sm"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubscribing}
                  className="group relative w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="relative z-10">Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="relative z-10" />
                      <span className="relative z-10">Subscribe</span>
                    </>
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-gray-800/50">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-transparent via-orange-500/20 to-transparent">
          <div className="container mx-auto px-6 lg:px-8 py-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Nextin Vision. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Crafted with passion in New Delhi, India
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <Link to="/privacy" className="hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-orange-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <a 
                  href="#top" 
                  className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-300"
                >
                  <span>Back to top</span>
                  <ArrowRight size={12} className="rotate-[-90deg] group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}