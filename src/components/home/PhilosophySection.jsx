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
      label: 'Faster Response Time',
      description: 'Through streamlined processes and proactive communication',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Clock,
      value: counters.stat2,
      suffix: '+',
      label: 'Hours Saved Monthly',
      description: 'By automating repetitive tasks and optimizing workflows',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      value: counters.stat3,
      suffix: '%',
      label: 'Ops Efficiency Boost',
      description: 'Through intelligent systems and strategic optimization',
      gradient: 'from-orange-600 to-amber-500'
    }
  ];

  return (
    <section 
      id="philosophy-section"
      className="relative py-16 lg:py-20 bg-gradient-to-br from-black via-slate-950 to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary glow effects */}
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-gradient-to-l from-amber-400/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-gradient-to-r from-orange-600/5 to-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-2/3 right-20 w-1 h-1 bg-amber-400/30 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-orange-500/25 rounded-full animate-ping delay-1800"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-orange-300/90 text-xs font-medium tracking-wide">OUR PHILOSOPHY</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-white mb-3">We're Not Just Vendors.</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
              We're Technology Partners.
            </span>
          </h2>
        </div>
        
        {/* Philosophy Content */}
        <div className={`max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 lg:p-8 shadow-2xl">
            <p className="text-lg lg:text-xl text-gray-300/90 leading-relaxed font-light mb-6">
              We believe the best results come from long-term collaboration. That's why we integrate deeply with your team—learning your business, 
              co-owning your goals, and evolving your systems over time.
            </p>
            <p className="text-lg lg:text-xl text-gray-300/90 leading-relaxed font-light">
              Whether it's launching an MVP, scaling your infrastructure, or introducing AI—
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-semibold"> we grow with you.</span>
            </p>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/12 to-amber-500/12 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 lg:p-7 hover:border-orange-400/40 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/8 min-h-[240px] flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 group-hover:rotate-2 transition-all duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <stat.icon className="text-white relative z-10" size={22} />
                </div>
                
                {/* Counter */}
                <div className="mb-3">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300/80 leading-relaxed text-sm group-hover:text-gray-200/90 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 lg:mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/20 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <p className="text-base lg:text-lg text-gray-300/90 leading-relaxed mb-4">
              "Partnership isn't just a buzzword for us—it's how we operate. When you succeed, we succeed."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3"></div>
              <span className="text-orange-400 font-semibold text-xs tracking-wide">NEXTIN VISION TEAM</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full ml-3"></div>
            </div>
          </div>
        </div>

        {/* Decorative accent line */}
        <div className={`mt-12 lg:mt-16 flex justify-center transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md shadow-orange-500/20"></div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
      
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

export default PhilosophySection;