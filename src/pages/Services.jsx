import React, { useState, useEffect } from 'react';
import { Code, Bot, Settings, Cloud, Palette, Users, ArrowRight, Zap, Shield, Smartphone, Globe, Cpu, Target, Camera, Megaphone, Lightbulb, Briefcase, Play, Layers, Sparkles, TrendingUp, Eye, Award } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('core');

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

  const coreServices = [
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
      title: "Product Design & UX/UI",
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
      title: "Tech Consulting & Support",
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

  const mediaServices = [
    {
      icon: Camera,
      title: "Enterprise Video Production",
      headline: "Cinematic Quality — Brand Films & Corporate Documentaries",
      description: "High-budget production with top-tier teams for industry-leading content",
      features: [
        { icon: Award, text: "Multi-location shoot capabilities" },
        { icon: Layers, text: "Film studio partnerships" },
        { icon: Sparkles, text: "Cinematic advertising campaigns" }
      ],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple-500/20"
    },
    {
      icon: Layers,
      title: "3D & VFX Solutions",
      headline: "Hyper-Realistic CGI — AR/VR & Advanced Visual Effects",
      description: "Cutting-edge 3D visualization for corporate and entertainment industries",
      features: [
        { icon: Eye, text: "Photorealistic 3D modeling" },
        { icon: Zap, text: "AR/VR immersive experiences" },
        { icon: Globe, text: "Large-scale visualization projects" }
      ],
      gradient: "from-pink-500 to-purple-600",
      glowColor: "pink-500/20"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Content Production",
      headline: "Automated Excellence — AI-Driven Video & Digital Content",
      description: "Revolutionary AI tools for automated editing and synthetic media creation",
      features: [
        { icon: Bot, text: "AI-driven video editing" },
        { icon: Target, text: "Generative content creation" },
        { icon: Users, text: "AI avatars & synthetic media" }
      ],
      gradient: "from-purple-600 to-indigo-500",
      glowColor: "purple-600/20"
    }
  ];

  const digitalMarketingServices = [
    {
      icon: Megaphone,
      title: "Social Media Management",
      headline: "Strategic Social Presence — Content Planning & Community Growth",
      description: "Comprehensive social media strategy with performance-driven results",
      features: [
        { icon: Target, text: "Strategic content planning" },
        { icon: Users, text: "Community engagement optimization" },
        { icon: TrendingUp, text: "Analytics & performance tracking" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "blue-500/20"
    },
    {
      icon: Palette,
      title: "Content Creation & Strategy",
      headline: "Visual Storytelling — Photography, Design & Trending Content",
      description: "Professional content creation that captures attention and drives engagement",
      features: [
        { icon: Camera, text: "Professional photography & videography" },
        { icon: Sparkles, text: "Graphic design & visual content" },
        { icon: TrendingUp, text: "Trending content research" }
      ],
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan-500/20"
    },
    {
      icon: Award,
      title: "Brand Development",
      headline: "Complete Brand Identity — From Concept to Market Leadership",
      description: "Strategic brand development with influencer partnerships and market positioning",
      features: [
        { icon: Lightbulb, text: "Comprehensive brand identity" },
        { icon: Globe, text: "Social media optimization" },
        { icon: Users, text: "Influencer collaboration management" }
      ],
      gradient: "from-blue-600 to-indigo-500",
      glowColor: "blue-600/20"
    }
  ];

  const additionalServices = [
    {
      icon: Bot,
      title: "AI Solutions Hub",
      headline: "Custom AI Agents — Automation Tools & System Integration",
      description: "Bespoke AI solutions designed to integrate seamlessly with your existing systems",
      features: [
        { icon: Settings, text: "Custom AI agent development" },
        { icon: Zap, text: "System integration services" },
        { icon: TrendingUp, text: "Performance optimization & scaling" }
      ],
      gradient: "from-green-500 to-emerald-500",
      glowColor: "green-500/20"
    },
    {
      icon: Code,
      title: "Dev Market Solutions",
      headline: "Ready-to-Deploy — Templates, Components & Development Resources",
      description: "Professional development resources and ready-to-use software solutions",
      features: [
        { icon: Layers, text: "Ready-to-use software components" },
        { icon: Palette, text: "Custom landing page templates" },
        { icon: Briefcase, text: "Professional development tools" }
      ],
      gradient: "from-emerald-500 to-green-600",
      glowColor: "emerald-500/20"
    },
    {
      icon: Briefcase,
      title: "Premium Business Solutions",
      headline: "Enterprise Services — Presentations, Partnerships & Collaboration",
      description: "High-end business solutions including corporate presentations and partnership opportunities",
      features: [
        { icon: Award, text: "High-end corporate presentations" },
        { icon: Users, text: "Influencer-brand matching platform" },
        { icon: Globe, text: "Enterprise collaboration opportunities" }
      ],
      gradient: "from-green-600 to-teal-500",
      glowColor: "green-600/20"
    }
  ];

  const categories = [
    { id: 'core', name: 'Core Tech Services', services: coreServices, color: 'orange' },
    { id: 'media', name: 'Media & Production', services: mediaServices, color: 'purple' },
    { id: 'marketing', name: 'Digital Marketing', services: digitalMarketingServices, color: 'blue' },
    { id: 'additional', name: 'Additional Services', services: additionalServices, color: 'green' }
  ];

  const getCurrentServices = () => {
    return categories.find(cat => cat.id === activeCategory)?.services || coreServices;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <section 
        id="services-section"
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-gradient-to-l from-amber-400/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 lg:w-56 h-32 sm:h-48 lg:h-56 bg-gradient-to-r from-purple-500/4 to-blue-500/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
          
          <div className="absolute top-16 sm:top-20 left-16 sm:left-24 w-1 h-1 bg-orange-400/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-1/3 right-20 sm:right-32 w-1 h-1 bg-amber-400/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-500/25 rounded-full animate-ping delay-1500"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-500/25 rounded-full animate-ping delay-2000"></div>
        </div>

        <div className="relative container mt-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
          {/* Enhanced Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-300/90 text-sm font-medium tracking-wide">COMPREHENSIVE SOLUTIONS</span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-white mb-2">Transform Your Business</span>
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                With Our Services
              </span>
            </h1>
            
            <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300/90 leading-relaxed font-light mb-8">
                From cutting-edge technology solutions to creative media production and strategic digital marketing — we deliver comprehensive services that drive real business growth.
              </p>
            </div>

            {/* Service Category Navigation */}
            <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 backdrop-blur-sm border ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r from-${category.color}-500/20 to-${category.color}-600/20 border-${category.color}-500/40 text-${category.color}-300 shadow-lg shadow-${category.color}-500/10`
                      : 'bg-gray-900/50 border-gray-700/50 text-gray-400 hover:text-gray-300 hover:border-gray-600/50 hover:bg-gray-800/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Dynamic Services Grid */}
          <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
            {getCurrentServices().map((service, index) => (
              <div 
                key={`${activeCategory}-${index}`}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-8 transition-all duration-700 scale-105`}></div>
                
                {/* Enhanced Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-orange-500/15 rounded-2xl p-6 sm:p-7 lg:p-8 hover:border-orange-400/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col">
                  {/* Enhanced Icon & Title */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 flex-shrink-0`}>
                      <service.icon className="text-white" size={20} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight group-hover:text-orange-100 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-orange-300/80 leading-snug group-hover:text-orange-200/90 transition-colors duration-300">
                        {service.headline}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced Description */}
                  <p className="text-gray-300/80 leading-relaxed text-sm sm:text-base mb-5 sm:mb-6 group-hover:text-gray-200/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Enhanced Feature Points */}
                  <div className="flex-1 space-y-3 sm:space-y-3.5 mb-5 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="text-orange-400" size={12} />
                        </div>
                        <span className="text-gray-400/90 group-hover:text-gray-300/95 transition-colors duration-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Hover Indicator */}
                  <div className={`flex items-center text-orange-400/80 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2`}>
                    <span className="tracking-wide">Learn More</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className={`mt-16 sm:mt-20 lg:mt-24 text-center transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg text-gray-400/80 mb-6 sm:mb-8 leading-relaxed">
                Let's discuss how our comprehensive services can drive your business forward with cutting-edge technology solutions, creative media production, and strategic digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 sm:px-10 py-4 sm:py-4 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 flex items-center justify-center backdrop-blur-sm border border-orange-400/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={16} />
                </button>
                <button className="group relative bg-transparent text-white px-8 sm:px-10 py-4 sm:py-4 rounded-xl text-base font-semibold border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm hover:bg-gray-900/50">
                  <span className="relative z-10">View Portfolio</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Accent */}
          <div className={`mt-12 sm:mt-16 lg:mt-20 flex justify-center transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg shadow-orange-500/30"></div>
          </div>
        </div>

        {/* Enhanced Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
        
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
    </div>
  );
};

export default ServicesPage;