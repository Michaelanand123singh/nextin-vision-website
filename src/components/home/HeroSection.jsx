import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, CheckCircle, Globe, Rocket, Building } from 'lucide-react';

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
        {/* Primary glow effects - more subtle */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-l from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-600/8 to-amber-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Fewer, more subtle floating particles */}
        <div className="absolute top-32 left-32 w-1 h-1 bg-orange-400/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-amber-400/40 rounded-full animate-ping delay-1500"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Smaller, more refined subtitle badge */}
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/8 to-amber-500/8 border border-orange-500/15 backdrop-blur-sm mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-orange-300/80 text-xs font-medium tracking-wider uppercase">Enterprise Software Solutions</span>
          </div>

          {/* More refined main heading */}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-12 leading-[1.1] tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block mb-3 font-light">We Don't Just</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent transition-all duration-1000 bg-300% animate-gradient-shift relative font-semibold">
              {texts[currentText]}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transform scale-x-0 animate-expand origin-left"></div>
            </span>
          </h1>

          {/* More concise description with better spacing */}
          <div className={`max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg md:text-xl text-gray-300/85 mb-8 leading-relaxed font-light">
              NEXTIN VISION helps companies launch, scale, and automate through custom software and agentic AI.
            </p>
            <p className="text-base text-gray-400/70 leading-relaxed font-light">
              Think of us as your long-term tech team—committed, capable, and always evolving with you.
            </p>
          </div>

          {/* More refined CTA Buttons with better spacing */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-xl text-base font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 flex items-center justify-center min-w-[180px] backdrop-blur-sm border border-orange-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <span className="relative z-10">Start Your Project</span>
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={18} />
            </button>
            
            <button className="group relative border border-orange-500/40 text-orange-400 px-8 py-3.5 rounded-xl text-base font-medium hover:bg-gradient-to-r hover:from-orange-500/8 hover:to-amber-500/8 hover:border-orange-400/60 hover:text-orange-300 transition-all duration-500 flex items-center justify-center min-w-[160px] backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 to-amber-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <Play className="mr-2 group-hover:scale-110 transition-all duration-300 relative z-10" size={16} />
              <span className="relative z-10">See Our Work</span>
            </button>
          </div>

          {/* More minimal trust indicators */}
          <div className={`pt-8 border-t border-gray-800/30 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-wrap justify-center items-center gap-12 text-gray-500/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-400/70" size={16} />
                <span className="text-sm font-light">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-orange-400/70" size={16} />
                <span className="text-sm font-light">Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="text-orange-400/70" size={16} />
                <span className="text-sm font-light">Rapid Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="text-orange-400/70" size={16} />
                <span className="text-sm font-light">Fortune 500 Trusted</span>
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