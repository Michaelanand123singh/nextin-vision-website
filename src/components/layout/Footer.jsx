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
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Refined glow effects */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/4 to-amber-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-l from-amber-400/3 to-orange-500/3 rounded-full blur-3xl"></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-[0.005]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">
                  NEXTIN VISION
                </h3>
                <p className="text-sm text-gray-300/80 leading-relaxed font-light mb-4">
                  Transforming Corporate Stories into Visual Impact through cutting-edge technology solutions.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+917667925604" 
                  className="group flex items-center gap-2.5 text-gray-400 hover:text-orange-400 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone size={14} className="text-orange-400" />
                  </div>
                  <span className="font-medium text-sm">+91 7667925604</span>
                </a>
                
                <a 
                  href="mailto:official@nextinvision.in" 
                  className="group flex items-center gap-2.5 text-gray-400 hover:text-orange-400 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={14} className="text-orange-400" />
                  </div>
                  <span className="font-medium text-sm">official@nextinvision.in</span>
                </a>
                
                <div className="flex items-center gap-2.5 text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-lg flex items-center justify-center">
                    <MapPin size={14} className="text-orange-400" />
                  </div>
                  <span className="font-medium text-sm">New Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-3 font-medium tracking-wide">FOLLOW US</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="group w-8 h-8 bg-gradient-to-br from-gray-800/60 to-black/60 border border-orange-500/15 rounded-lg flex items-center justify-center hover:border-orange-400/40 hover:bg-gradient-to-br hover:from-orange-500/8 hover:to-amber-500/8 transition-all duration-300">
                    <Linkedin size={14} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </a>
                  <a href="#" className="group w-8 h-8 bg-gradient-to-br from-gray-800/60 to-black/60 border border-orange-500/15 rounded-lg flex items-center justify-center hover:border-orange-400/40 hover:bg-gradient-to-br hover:from-orange-500/8 hover:to-amber-500/8 transition-all duration-300">
                    <Github size={14} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </a>
                  <a href="#" className="group w-8 h-8 bg-gradient-to-br from-gray-800/60 to-black/60 border border-orange-500/15 rounded-lg flex items-center justify-center hover:border-orange-400/40 hover:bg-gradient-to-br hover:from-orange-500/8 hover:to-amber-500/8 transition-all duration-300">
                    <Twitter size={14} className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
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
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Company
                <div className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
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
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Stay Updated
                <div className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Subscribe for the latest insights and tech trends.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2.5 rounded-lg bg-gradient-to-br from-gray-800/60 to-black/60 text-white border border-orange-500/15 focus:outline-none focus:border-orange-400/40 focus:bg-gradient-to-br focus:from-orange-500/5 focus:to-amber-500/5 transition-all duration-300 text-sm backdrop-blur-sm"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubscribing}
                  className="group relative w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  {isSubscribing ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="relative z-10">Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} className="relative z-10" />
                      <span className="relative z-10">Subscribe</span>
                    </>
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="mt-4 pt-4 border-t border-gray-800/40">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-transparent via-orange-500/15 to-transparent">
          <div className="container mx-auto px-4 lg:px-6 py-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Nextin Vision. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Crafted with passion in New Delhi, India
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <Link to="/privacy" className="hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-orange-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <a 
                  href="#top" 
                  className="group flex items-center gap-1.5 hover:text-orange-400 transition-all duration-300"
                >
                  <span>Back to top</span>
                  <ArrowRight size={10} className="rotate-[-90deg] group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}