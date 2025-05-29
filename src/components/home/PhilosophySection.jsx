import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Zap } from 'lucide-react';

// Philosophy Section
const PhilosophySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ stat1: 0, stat2: 0, stat3: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('philosophy-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { stat1: 67, stat2: 60, stat3: 35 };
    const increment = 50;
    
    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key];
      const step = target / (duration / increment);
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, increment);
    });
  };

  const stats = [
    {
      icon: Zap,
      value: counters.stat1,
      suffix: '%',
      label: 'Faster Response',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Clock,
      value: counters.stat2,
      suffix: '+',
      label: 'Hours Saved',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      value: counters.stat3,
      suffix: '%',
      label: 'Efficiency Boost',
      gradient: 'from-orange-600 to-amber-500'
    }
  ];

  return (
    <section 
      id="philosophy-section"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-black via-slate-950 to-gray-900 overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/4 to-amber-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-l from-amber-400/3 to-orange-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-8 lg:px-12 text-center z-10">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/8 to-amber-500/8 border border-orange-500/15 backdrop-blur-sm mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-orange-300/80 text-xs font-medium tracking-wide">OUR PHILOSOPHY</span>
        </div>
        
        {/* Main Heading */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white/95 mb-2">We're Not Just Vendors.</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              We're Technology Partners.
            </span>
          </h2>
        </div>
        
        {/* Philosophy Content */}
        <div className={`max-w-3xl mx-auto mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm border border-orange-500/10 rounded-3xl p-8 lg:p-12">
            <p className="text-xl lg:text-2xl text-gray-300/90 leading-relaxed font-light mb-6">
              We believe the best results come from long-term collaboration.
            </p>
            <p className="text-lg lg:text-xl text-gray-400/80 leading-relaxed font-light">
              Whether it's launching an MVP, scaling infrastructure, or introducing AI—
              <span className="text-orange-400/90 font-medium"> we grow with you.</span>
            </p>
          </div>
        </div>
        
        {/* Stats Grid - More Compact */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-3 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm border border-orange-500/15 rounded-2xl p-6 lg:p-8 hover:border-orange-400/25 transition-all duration-500 hover:-translate-y-1 text-center">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-105 transition-all duration-300`}>
                  <stat.icon className="text-white" size={20} />
                </div>
                
                {/* Counter */}
                <div className="mb-2">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </div>
                </div>
                
                {/* Label */}
                <h3 className="text-base font-medium text-white/90">
                  {stat.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-gray-300/90 leading-relaxed mb-6 font-light italic">
              "Partnership isn't just a buzzword for us—it's how we operate."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-6 h-px bg-gradient-to-r from-orange-500 to-amber-500 mr-3"></div>
              <span className="text-orange-400/80 font-medium text-sm tracking-wide">NEXTIN VISION</span>
              <div className="w-6 h-px bg-gradient-to-r from-amber-500 to-orange-500 ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;