import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Bot, Settings, Cloud, Palette, Users, Star, ArrowRight, Play, CheckCircle, Globe, Rocket, Building, Heart, Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const texts = ['Build Tech', 'Build Partnerships', 'Build Future'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-400/15 to-red-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-600/10 to-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400/40 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-ping delay-1500"></div>
      </div>
      
      {/* Content */}
      <div className="container mt-20 mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-300/90 text-sm font-medium tracking-wide">ENTERPRISE SOFTWARE SOLUTIONS</span>
          </div>

          {/* Main heading */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[0.95] tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block mb-2">We Don't Just</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent transition-all duration-1000 bg-300% animate-gradient-shift relative">
              {texts[currentText]}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transform scale-x-0 animate-expand origin-left"></div>
            </span>
          </h1>

          {/* Description */}
          <div className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-6 leading-relaxed font-light">
              NEXTIN VISION helps companies launch, scale, and automate through custom software and agentic AI.
            </p>
            <p className="text-base md:text-lg text-gray-400/80 leading-relaxed font-light">
              Think of us as your long-term tech team—committed, capable, and always evolving with you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center min-w-[220px] backdrop-blur-sm border border-orange-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <span className="relative z-10">Start Your Project</span>
              <ChevronRight className="ml-3 group-hover:translate-x-2 transition-all duration-300 relative z-10" size={22} />
            </button>
            
            <button className="group relative border-2 border-orange-500/50 text-orange-400 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10 hover:border-orange-400 hover:text-orange-300 transition-all duration-500 flex items-center justify-center min-w-[200px] backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <Play className="mr-3 group-hover:scale-110 transition-all duration-300 relative z-10" size={20} />
              <span className="relative z-10">See Our Work</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className={`mt-16 pt-8 border-t border-gray-800/50 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500/80">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-400" size={20} />
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-orange-400" size={20} />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="text-orange-400" size={20} />
                <span className="text-sm font-medium">Rapid Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="text-orange-400" size={20} />
                <span className="text-sm font-medium">Fortune 500 Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes expand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        .animate-expand {
          animation: expand 0.8s ease-out 0.5s forwards;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;