import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
      {/* Animated Background Elements - Refined */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/4 via-amber-500/6 to-orange-600/4 rounded-full blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02 - scrollY * 0.1}%`,
            transform: `rotate(${scrollY * 0.1}deg)`
          }}
        ></div>
        
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-purple-500/3 via-pink-500/5 to-purple-600/3 rounded-full blur-3xl"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${25 + mousePosition.y * 0.015 + scrollY * 0.05}%`,
            transform: `rotate(${-scrollY * 0.08}deg)`
          }}
        ></div>

        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-blue-500/2 via-cyan-500/4 to-teal-500/2 rounded-full blur-3xl"
          style={{
            left: `${50 + mousePosition.x * 0.01}%`,
            top: `${60 + mousePosition.y * 0.01 - scrollY * 0.03}%`,
            transform: `rotate(${scrollY * 0.05}deg)`
          }}
        ></div>

        {/* Refined floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            color: getCurrentCategory().color === 'orange' ? '#f97316' : 
                   getCurrentCategory().color === 'purple' ? '#a855f7' :
                   getCurrentCategory().color === 'blue' ? '#3b82f6' : '#22c55e'
          }}
        ></div>
      </div>

      <section 
        id="services-section"
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl z-10">
          {/* Premium Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${getCurrentCategory().gradient}/5 border backdrop-blur-sm mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                 style={{ 
                   borderColor: getCurrentCategory().color === 'orange' ? '#f97316' + '15' : 
                               getCurrentCategory().color === 'purple' ? '#a855f7' + '15' :
                               getCurrentCategory().color === 'blue' ? '#3b82f6' + '15' : '#22c55e' + '15'
                 }}>
              <div className={`w-2 h-2 bg-gradient-to-r ${getCurrentCategory().gradient} rounded-full mr-3 animate-pulse`}></div>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Premium Solutions</span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-white mb-3">Transform Your</span>
              <span className={`block bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift`}>
                Business Vision
              </span>
            </h1>
            
            <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-xl text-gray-300/90 leading-relaxed font-light mb-12">
                From cutting-edge technology to creative excellence — we deliver premium solutions that define industry standards.
              </p>
            </div>

            {/* Enhanced Category Navigation */}
            <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 backdrop-blur-sm border overflow-hidden ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.gradient}/8 border-current/25 text-white shadow-xl`
                      : 'bg-gray-900/30 border-gray-700/30 text-gray-400 hover:text-white hover:border-gray-600/50 hover:bg-gray-800/40'
                  }`}
                  style={{ 
                    color: activeCategory === category.id ? 'white' : undefined,
                    borderColor: activeCategory === category.id ? 
                      (category.color === 'orange' ? '#f97316' : 
                       category.color === 'purple' ? '#a855f7' :
                       category.color === 'blue' ? '#3b82f6' : '#22c55e') + '25' : undefined
                  }}
                >
                  {activeCategory === category.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}/5`}></div>
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Premium Services Grid */}
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
            {getCurrentServices().map((service, index) => (
              <div 
                key={`${activeCategory}-${index}`}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Refined 3D Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-8 transition-all duration-700`}></div>
                
                {/* Premium Card */}
                <div className={`relative bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:shadow-xl hover:border-gray-600/50 transition-all duration-700 hover:-translate-y-1 min-h-[320px] flex flex-col`}>
                  
                  {/* Icon & Title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient}/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 flex-shrink-0`}>
                      <service.icon className="text-white" size={20} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                          style={{ 
                            backgroundImage: hoveredCard === index ? `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})` : undefined 
                          }}>
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-300/80 leading-snug">
                        {service.headline}
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400/90 leading-relaxed text-sm mb-6 group-hover:text-gray-300/95 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Feature Points */}
                  <div className="flex-1 space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm">
                        <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient}/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                             style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                          <feature.icon className="text-gray-300" size={12} />
                        </div>
                        <span className="text-gray-400/90 group-hover:text-gray-300/95 transition-colors duration-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Premium CTA */}
                  <div className={`flex items-center text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2`}>
                    <span className="tracking-wide">Explore Service</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                style={{ color: 'currentColor' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Create 
                <span className={`block bg-gradient-to-r ${getCurrentCategory().gradient} bg-clip-text text-transparent`}>
                  Something Extraordinary?
                </span>
              </h2>
              <p className="text-lg text-gray-400/80 mb-10 leading-relaxed">
                Let's discuss how our premium services can transform your vision into reality with cutting-edge solutions and creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className={`group relative bg-gradient-to-r ${getCurrentCategory().gradient} text-white px-10 py-5 rounded-2xl text-base font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-xl flex items-center justify-center backdrop-blur-sm overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={16} />
                </button>
                <button className="group relative bg-transparent text-white px-10 py-5 rounded-2xl text-base font-bold border border-gray-700/50 hover:border-current/40 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
                        style={{ 
                          borderColor: getCurrentCategory().color === 'orange' ? '#f97316' + '30' : 
                                      getCurrentCategory().color === 'purple' ? '#a855f7' + '30' :
                                      getCurrentCategory().color === 'blue' ? '#3b82f6' + '30' : '#22c55e' + '30'
                        }}>
                  <span className="relative z-10">View Portfolio</span>
                </button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;