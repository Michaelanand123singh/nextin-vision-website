import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, Bot, Settings, Cloud, Palette, Users, Star, ArrowRight, Play, CheckCircle, Globe, Rocket, Building, Heart, Phone, Mail, MapPin, Linkedin, Github, Twitter, Zap, Shield, TrendingUp } from 'lucide-react';

// Premium Quick Intro Section
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
          const boxes = Array.from({length: 4}, (_, i) => i);
          boxes.forEach((box, index) => {
            setTimeout(() => {
              setAnimatedBoxes(prev => new Set([...prev, box]));
            }, index * 150);
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
    { icon: Zap, label: "Faster Delivery", value: "3x" },
    { icon: Shield, label: "Security First", value: "100%" },
    { icon: TrendingUp, label: "ROI Growth", value: "300%" }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-black via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Subtle ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-500/3 to-amber-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-gradient-to-l from-orange-400/2 to-red-500/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Centered Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Refined section badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/8 to-amber-500/8 border border-orange-500/15 backdrop-blur-sm mb-8">
              <Globe className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-300/80 text-sm font-medium tracking-wider">GLOBAL EXPERTISE</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              Smart Tech—
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                Built to Last
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300/70 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
              We partner with growing companies to deliver digital products and intelligent systems that drive lasting results.
            </p>
          </div>

          {/* Simplified Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Streamlined Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              {/* Single highlight card */}
              <div className="bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/15 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Latest Success</h3>
                    <p className="text-gray-300/80 mb-3 leading-relaxed">
                      Scaled a platform from <span className="text-orange-400 font-semibold">5K to 150K users</span> 
                      while reducing costs by 40%.
                    </p>
                    <div className="flex items-center text-sm text-orange-400/80">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>3+ years of stable performance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean stats row */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-700 delay-${index * 200 + 400} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/20">
                        <stat.icon className="w-5 h-5 text-orange-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Refined CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-105">
                  <span>View Process</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500/8 to-amber-500/8 border border-orange-500/20 rounded-2xl text-orange-300 font-semibold hover:from-orange-500/15 hover:to-amber-500/15 hover:border-orange-400/30 transition-all duration-500 backdrop-blur-sm">
                  <span>Case Studies</span>
                  <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Minimalist Visual */}
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              {/* Simplified main card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30 shadow-2xl">
                {/* Subtle floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-400/5 to-red-500/5 rounded-3xl blur-xl"></div>
                
                {/* Clean grid visualization */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Array.from({length: 4}, (_, i) => (
                      <div 
                        key={i} 
                        className={`h-16 rounded-xl transition-all duration-700 delay-${i * 150} transform ${
                          animatedBoxes.has(i) 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-95'
                        } ${
                          i === 1 || i === 2
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20' 
                            : 'bg-gradient-to-r from-gray-600/30 to-gray-500/30 border border-gray-600/20'
                        }`}
                      >
                        {(i === 1 || i === 2) && (
                          <div className="w-full h-full rounded-xl bg-gradient-to-r from-white/10 to-transparent"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Minimal progress display */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-500 delay-${dot * 200 + 600} ${
                            isVisible ? 'bg-orange-400' : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">Performance</div>
                      <div className={`text-2xl font-bold transition-all duration-1000 delay-800 ${
                        isVisible ? 'text-orange-400' : 'text-gray-500'
                      }`}>
                        99.2%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined floating accent cards */}
              <div className={`absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-2xl shadow-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 rotate-3'}`}>
                <Code className="w-5 h-5 text-white" />
              </div>
              
              <div className={`absolute -bottom-3 -right-5 bg-gradient-to-r from-slate-700/90 to-gray-700/90 backdrop-blur-xl p-4 rounded-2xl border border-gray-600/30 shadow-xl transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 -rotate-3'}`}>
                <Bot className="w-5 h-5 text-orange-400" />
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
          animation: gradient-shift 6s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default QuickIntro;