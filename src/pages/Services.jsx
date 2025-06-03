import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, Award, TrendingUp, ChevronDown, Shield } from 'lucide-react';
import { categories } from '../data/servicesData';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('core');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) observer.observe(section);

    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCurrentServices = () => {
    return categories.find(cat => cat.id === activeCategory)?.services || categories[0].services;
  };

  const getCurrentCategory = () => {
    return categories.find(cat => cat.id === activeCategory) || categories[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background with Tech Elements */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/6 via-amber-500/8 to-orange-600/6 rounded-full blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02 - scrollY * 0.1}%`,
            transform: `rotate(${scrollY * 0.1}deg)`
          }}
        ></div>
        
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-purple-500/4 via-pink-500/6 to-purple-600/4 rounded-full blur-3xl"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${25 + mousePosition.y * 0.015 + scrollY * 0.05}%`,
            transform: `rotate(${-scrollY * 0.08}deg)`
          }}
        ></div>

        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-blue-500/3 via-cyan-500/5 to-teal-500/3 rounded-full blur-3xl"
          style={{
            left: `${50 + mousePosition.x * 0.01}%`,
            top: `${60 + mousePosition.y * 0.01 - scrollY * 0.03}%`,
            transform: `rotate(${scrollY * 0.05}deg)`
          }}
        ></div>

        {/* Tech-inspired floating elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Code-like grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '60px 60px',
            color: getCurrentCategory().color === 'orange' ? '#f97316' : 
                   getCurrentCategory().color === 'purple' ? '#a855f7' :
                   getCurrentCategory().color === 'blue' ? '#3b82f6' : '#22c55e'
          }}
        ></div>
      </div>

      <section 
        id="services-section"
        className="relative overflow-hidden"
      >
        {/* Hero Section with Tech Company Branding */}
        <div className="relative container mt-10 mx-auto px-6 lg:px-8 max-w-7xl z-10 pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${getCurrentCategory().gradient}/8 border backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                   style={{ 
                     borderColor: getCurrentCategory().color === 'orange' ? '#f97316' + '20' : 
                                 getCurrentCategory().color === 'purple' ? '#a855f7' + '20' :
                                 getCurrentCategory().color === 'blue' ? '#3b82f6' + '20' : '#22c55e' + '20'
                   }}>
                <div className={`w-2 h-2 bg-gradient-to-r ${getCurrentCategory().gradient} rounded-full mr-3 animate-pulse`}></div>
                <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">Enterprise Solutions</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="block text-white mb-2">Next-Gen</span>
                <span className={`block bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift`}>
                  Software
                </span>
                <span className="block text-white">Solutions</span>
              </h1>
              
              <p className={`text-lg text-gray-300/90 leading-relaxed font-light max-w-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Empowering businesses with cutting-edge technology, innovative software development, and digital transformation solutions that drive growth and competitive advantage.
              </p>

              {/* Tech Stats */}
              <div className={`flex flex-wrap gap-6 pt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent`}>500+</div>
                  <div className="text-xs text-gray-400 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent`}>99.9%</div>
                  <div className="text-xs text-gray-400 font-medium">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent`}>24/7</div>
                  <div className="text-xs text-gray-400 font-medium">Technical Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Element */}
            <div className={`relative transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${getCurrentCategory().gradient} rounded-3xl blur-xl opacity-10`}></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCurrentCategory().gradient} rounded-xl flex items-center justify-center`}>
                      <Play className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Watch Our Process</h3>
                      <p className="text-gray-400">See how we build solutions</p>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl flex items-center justify-center border border-gray-700/30">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getCurrentCategory().gradient}/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300`}>
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Development Process Overview</span>
                    <span className="text-white font-medium">4:32 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Navigation - Redesigned */}
          <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Our Service Portfolio</h2>
                <p className="text-sm text-gray-400">Comprehensive solutions across all technology domains</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-500 backdrop-blur-sm border overflow-hidden ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.gradient}/10 border-current/30 text-white shadow-xl`
                        : 'bg-gray-900/40 border-gray-700/40 text-gray-400 hover:text-white hover:border-gray-600/60 hover:bg-gray-800/50'
                    }`}
                    style={{ 
                      color: activeCategory === category.id ? 'white' : undefined,
                      borderColor: activeCategory === category.id ? 
                        (category.color === 'orange' ? '#f97316' : 
                         category.color === 'purple' ? '#a855f7' :
                         category.color === 'blue' ? '#3b82f6' : '#22c55e') + '30' : undefined
                    }}
                  >
                    {activeCategory === category.id && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}/5`}></div>
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {category.name}
                      {activeCategory === category.id && <ChevronDown size={14} />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid - Enhanced Layout */}
        <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl z-10 pb-20">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {getCurrentServices().map((service, index) => (
              <div 
                key={`${activeCategory}-${index}`}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${1200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-all duration-700`}></div>
                
                {/* Service Card */}
                <div className={`relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-600/60 transition-all duration-700 hover:-translate-y-1 min-h-[320px] flex flex-col group-hover:bg-gradient-to-br group-hover:from-gray-900/80 group-hover:via-gray-800/60 group-hover:to-gray-900/80`}>
                  
                  {/* Header with enhanced styling */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 flex-shrink-0`}>
                      <service.icon className="text-white" size={20} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                          style={{ 
                            backgroundImage: hoveredCard === index ? `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})` : undefined 
                          }}>
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-300/90 leading-snug">
                        {service.headline}
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400/90 leading-relaxed text-sm mb-6 group-hover:text-gray-300/95 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features with enhanced styling */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm group/feature">
                        <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient}/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:${service.gradient}/25 transition-all duration-300 border border-gray-700/30`}
                             style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                          <feature.icon className="text-gray-300 group-hover:text-white transition-colors duration-300" size={12} />
                        </div>
                        <span className="text-gray-400/90 group-hover:text-gray-300/95 transition-colors duration-300 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced CTA */}
                  <div className={`flex items-center justify-between pt-4 border-t border-gray-700/30 group-hover:border-gray-600/40 transition-all duration-300`}>
                    <div className={`flex items-center text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2`}>
                      <span className="tracking-wide">Explore Solution</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                  style={{ color: 'currentColor' }} />
                    </div>
                    <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      Learn More →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto relative">
              <div className={`absolute -inset-3 bg-gradient-to-r ${getCurrentCategory().gradient} rounded-2xl blur-xl opacity-5`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Build the 
                  <span className={`block bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent mt-1`}>
                    Future Together?
                  </span>
                </h2>
                <p className="text-lg text-gray-400/90 mb-8 leading-relaxed max-w-xl mx-auto">
                  Let's discuss how our enterprise-grade solutions can accelerate your digital transformation and drive unprecedented growth for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className={`group relative bg-gradient-to-r ${getCurrentCategory().gradient} text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-xl flex items-center justify-center backdrop-blur-sm overflow-hidden min-w-[180px]`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={16} />
                  </button>
                  
                  <button className="group relative bg-transparent text-white px-8 py-4 rounded-xl text-base font-bold border-2 hover:border-current/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm min-w-[180px]"
                          style={{ 
                            borderColor: getCurrentCategory().color === 'orange' ? '#f97316' + '40' : 
                                        getCurrentCategory().color === 'purple' ? '#a855f7' + '40' :
                                        getCurrentCategory().color === 'blue' ? '#3b82f6' + '40' : '#22c55e' + '40'
                          }}>
                    <span className="relative z-10 flex items-center gap-2">
                      <Users size={16} />
                      Schedule Consultation
                    </span>
                  </button>
                </div>
                
                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-700/30">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Award size={14} />
                    <span className="text-xs">Industry Leader</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Shield size={14} />
                    <span className="text-xs">ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <TrendingUp size={14} />
                    <span className="text-xs">97% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;