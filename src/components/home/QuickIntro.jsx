import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, Bot, Settings, Cloud, Palette, Users, Star, ArrowRight, Play, CheckCircle, Globe, Rocket, Building, Heart, Phone, Mail, MapPin, Linkedin, Github, Twitter, Zap, Shield, TrendingUp } from 'lucide-react';

// Quick Intro Section
const QuickIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBoxes, setAnimatedBoxes] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate boxes with staggered delay
          const boxes = Array.from({length: 6}, (_, i) => i);
          boxes.forEach((box, index) => {
            setTimeout(() => {
              setAnimatedBoxes(prev => new Set([...prev, box]));
            }, index * 120);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Zap, label: "Fast Delivery", value: "2-3x" },
    { icon: Shield, label: "Enterprise Security", value: "100%" },
    { icon: TrendingUp, label: "ROI Improvement", value: "300%" }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-gradient-to-b from-black via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/4 to-amber-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-orange-400/6 to-red-500/6 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Section badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <Globe className="w-3.5 h-3.5 text-orange-400 mr-2" />
              <span className="text-orange-300/90 text-xs font-medium tracking-wide">GLOBAL EXPERTISE</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Smart, Scalable Tech—
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                Built for the Long Haul
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-300/90 leading-relaxed mb-8 font-light max-w-3xl mx-auto">
              Based in India and working globally, NEXTIN VISION partners with growing companies to deliver digital products, 
              automate workflows, and integrate intelligent systems that drive real results—year after year.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Case Study & Stats */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              {/* Case study highlight */}
              <div className="bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/20 rounded-xl p-5 mb-8 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">Recent Success Story</h3>
                    <p className="text-gray-300/90 text-sm mb-2">
                      Scaled a fintech platform from <span className="text-orange-400 font-semibold">5K to 150K users</span> in 18 months 
                      while maintaining 99.9% uptime and reducing infrastructure costs by 40%.
                    </p>
                    <div className="flex items-center text-xs text-orange-400">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                      <span>System still running strong after 3 years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-700 delay-${index * 200 + 400} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2.5 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                        <stat.icon className="w-5 h-5 text-orange-400" />
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 text-sm">
                  <span>View Our Process</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
                <button className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-xl text-orange-300 font-semibold hover:from-orange-500/20 hover:to-amber-500/20 hover:border-orange-400/50 transition-all duration-500 backdrop-blur-sm text-sm">
                  <span>See Case Studies</span>
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 shadow-xl">
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-xl blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-r from-orange-400/8 to-red-500/8 rounded-2xl blur-xl"></div>
                
                {/* Grid visualization */}
                <div className="relative z-10">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {Array.from({length: 6}, (_, i) => (
                      <div 
                        key={i} 
                        className={`h-12 rounded-lg transition-all duration-700 delay-${i * 120} transform ${
                          animatedBoxes.has(i) 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-95'
                        } ${
                          i === 1 || i === 4 
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/25' 
                            : 'bg-gradient-to-r from-gray-600/40 to-gray-500/40 border border-gray-600/30'
                        }`}
                      >
                        {(i === 1 || i === 4) && (
                          <div className="w-full h-full rounded-lg bg-gradient-to-r from-white/15 to-transparent"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Progress indicators */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1.5">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-${dot * 200 + 600} ${
                            isVisible ? 'bg-orange-400 scale-100' : 'bg-gray-600 scale-75'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 mb-0.5">System Performance</div>
                      <div className={`text-lg font-bold transition-all duration-1000 delay-800 ${
                        isVisible ? 'text-orange-400' : 'text-gray-500'
                      }`}>
                        98.7%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className={`absolute -top-3 -left-3 bg-gradient-to-r from-orange-500/90 to-amber-500/90 p-3 rounded-xl shadow-lg transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 rotate-6'}`}>
                <Code className="w-4 h-4 text-white" />
              </div>
              
              <div className={`absolute -bottom-2 -right-4 bg-gradient-to-r from-slate-700/90 to-gray-700/90 backdrop-blur-xl p-3 rounded-xl border border-gray-600/50 shadow-lg transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 -rotate-6'}`}>
                <Bot className="w-4 h-4 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default QuickIntro;