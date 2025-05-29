import React, { useState, useEffect } from 'react';
import { Code, Bot, Settings, Cloud, Palette, Users, ArrowRight, Zap, Shield, Smartphone, Globe, Cpu, Target } from 'lucide-react';

// Services Section
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web & Mobile Development",
      headline: "Custom Web Apps — From MVP to Enterprise",
      description: "Scalable applications tailored to your business needs with modern architecture",
      features: [
        { icon: Smartphone, text: "Mobile-first responsive design" },
        { icon: Zap, text: "High-performance architecture" },
        { icon: Shield, text: "Enterprise-grade security" }
      ],
      gradient: "from-orange-500 to-amber-500",
      glowColor: "orange-500/20"
    },
    {
      icon: Bot,
      title: "Agentic AI Assistants",
      headline: "Smart AI That Works — No Hype, Just Results",
      description: "Intelligent automation handling tasks, support, and research efficiently",
      features: [
        { icon: Target, text: "Task-specific AI solutions" },
        { icon: Cpu, text: "Advanced NLP processing" },
        { icon: Zap, text: "Real-time decision making" }
      ],
      gradient: "from-amber-500 to-orange-600",
      glowColor: "amber-500/20"
    },
    {
      icon: Settings,
      title: "Business Operations Software",
      headline: "Internal Tools That Save Time — ERP, CRMs, HR & More",
      description: "Custom platforms designed to streamline your business processes",
      features: [
        { icon: Target, text: "Workflow automation" },
        { icon: Globe, text: "Real-time dashboards" },
        { icon: Shield, text: "Role-based access control" }
      ],
      gradient: "from-orange-600 to-red-500",
      glowColor: "orange-600/20"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Infrastructure",
      headline: "Bulletproof Cloud Setup — AWS, Azure & GCP",
      description: "Secure cloud architecture with seamless migration and maintenance",
      features: [
        { icon: Shield, text: "Security-first architecture" },
        { icon: Zap, text: "Auto-scaling infrastructure" },
        { icon: Globe, text: "Multi-cloud expertise" }
      ],
      gradient: "from-orange-500 to-amber-600",
      glowColor: "orange-500/25"
    },
    {
      icon: Palette,
      title: "Product Design & UX/ UI",
      headline: "Interfaces People Love — Functional & Beautiful",
      description: "User-centered design that converts visitors into loyal customers",
      features: [
        { icon: Target, text: "User research & testing" },
        { icon: Smartphone, text: "Conversion-optimized flows" },
        { icon: Zap, text: "Rapid prototyping" }
      ],
      gradient: "from-amber-400 to-orange-500",
      glowColor: "amber-400/20"
    },
    {
      icon: Users,
      title: "Tech Consulting & Support and Maintainance",
      headline: "Your Tech Strategy Partners — Planning to Scale",
      description: "Strategic guidance and ongoing support for technology decisions",
      features: [
        { icon: Target, text: "Technology roadmapping" },
        { icon: Cpu, text: "Performance optimization" },
        { icon: Shield, text: "24/7 technical support" }
      ],
      gradient: "from-orange-600 to-amber-500",
      glowColor: "orange-600/20"
    }
  ];

  return (
    <section 
      id="services-section"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-gradient-to-l from-amber-400/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="absolute top-16 sm:top-20 left-16 sm:left-24 w-1 h-1 bg-orange-400/20 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/3 right-20 sm:right-32 w-1 h-1 bg-amber-400/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-orange-500/25 rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-orange-300/90 text-xs font-medium tracking-wide">COMPREHENSIVE SOLUTIONS</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-white mb-1">What We Do</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
              Best
            </span>
          </h2>
          
          <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed font-light">
              From first launch to global scale, we help you build the right tech at every step.
            </p>
          </div>
        </div>
        
        {/* Responsive Services Grid */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-5 transition-all duration-700 scale-105`}></div>
              
              {/* Refined Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-orange-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-orange-400/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/5 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500 flex-shrink-0`}>
                    <service.icon className="text-white" size={18} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-tight group-hover:text-orange-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-orange-300/80 leading-snug group-hover:text-orange-200/90 transition-colors duration-300">
                      {service.headline}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300/80 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-5 group-hover:text-gray-200/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Feature Points */}
                <div className="flex-1 space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="text-orange-400" size={10} />
                      </div>
                      <span className="text-gray-400/90 group-hover:text-gray-300/95 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Subtle Hover Indicator */}
                <div className={`flex items-center text-orange-400/80 font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-1`}>
                  <span className="tracking-wide">Learn More</span>
                  <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Refined CTA */}
        <div className={`mt-12 sm:mt-16 lg:mt-18 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-gray-400/80 mb-4 sm:mb-6">
              Ready to transform your business with cutting-edge technology solutions?
            </p>
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 flex items-center justify-center mx-auto backdrop-blur-sm border border-orange-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl"></div>
              <span className="relative z-10">Discuss Your Project</span>
              <ArrowRight className="ml-2 sm:ml-2.5 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={14} />
            </button>
          </div>
        </div>

        {/* Subtle Accent */}
        <div className={`mt-8 sm:mt-12 lg:mt-14 flex justify-center transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-sm shadow-orange-500/20"></div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
      
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

export default ServicesSection;