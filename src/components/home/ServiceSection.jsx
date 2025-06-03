import React, { useState, useEffect, useRef } from 'react';
import { Code, Bot, Settings, Cloud, Palette, Users, ArrowRight, Zap, Shield, Smartphone, Globe, Cpu, Target, Database, CheckCircle, TrendingUp, Workflow, Building2, Layout, Server, Play, BarChart3, Layers, Boxes, Network, GitBranch, Activity } from 'lucide-react';

// Compact Service Card Component
const CompactServiceCard = ({ service, index, isVisible, activeCard, setActiveCard }) => {
  const [stats, setStats] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (activeCard === index) {
      const timer = setTimeout(() => {
        const target = service.stat?.value || 95;
        const duration = 1200;
        const steps = 30;
        const increment = target / steps;
        
        let current = 0;
        const statTimer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setStats(target);
            clearInterval(statTimer);
          } else {
            setStats(Math.floor(current));
          }
        }, duration / steps);
      }, 200);
      
      return () => clearTimeout(timer);
    } else {
      setStats(0);
    }
  }, [activeCard, index, service.stat]);

  const isMainCard = service.featured;

  return (
    <div 
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isMainCard ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${600 + index * 100}ms` }}
      onMouseEnter={() => {
        setActiveCard(index);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setActiveCard(null);
        setIsHovered(false);
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl scale-105 opacity-10`}></div>
      </div>

      {/* Main Card Container - Reduced Size */}
      <div className={`relative bg-gradient-to-br from-gray-900/90 via-slate-900/95 to-black/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-400/40 hover:shadow-xl hover:shadow-orange-500/10 ${
        isMainCard ? 'min-h-[320px]' : 'min-h-[280px]'
      } group-hover:-translate-y-1 group-hover:scale-[1.01]`}>
        
        {/* Content Container */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          
          {/* Header Section - Compact */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              {/* Icon Container - Smaller */}
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500`}>
                  <service.icon className="text-white" size={20} />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-orange-400 rounded-full border border-gray-900 animate-pulse">
                  <div className="w-full h-full bg-orange-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-orange-400 tracking-wide uppercase">
                    {service.category}
                  </span>
                </div>
                
                <h3 className={`font-bold text-white mb-1 group-hover:text-orange-100 transition-colors duration-300 ${
                  isMainCard ? 'text-lg' : 'text-base'
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.tagline}
                </p>
              </div>
            </div>
            
            {/* Live Metrics - Compact */}
            {service.stat && activeCard === index && (
              <div className="text-right animate-fadeIn">
                <div className={`font-bold text-orange-400 ${isMainCard ? 'text-2xl' : 'text-xl'}`}>
                  {stats}{service.stat.suffix}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {service.stat.label}
                </div>
              </div>
            )}
          </div>
          
          {/* Main Content - Condensed */}
          <div className="flex-1 space-y-4">
            {/* Description */}
            <div>
              <p className={`text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ${
                isMainCard ? 'text-sm' : 'text-xs'
              }`}>
                {service.description}
              </p>
            </div>
            
            {/* Technology Stack - Compact */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Layers size={12} className="text-orange-400" />
                <span className="text-xs font-medium text-orange-300 tracking-wide">
                  TECH
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {service.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-300 font-medium backdrop-blur-sm hover:from-orange-500/20 hover:to-amber-500/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Key Features Grid - Compact */}
            <div className="grid grid-cols-2 gap-2">
              {service.features.slice(0, 4).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-gray-800/40 to-gray-700/20 border border-gray-700/40 hover:border-orange-500/30 transition-all duration-300">
                  <div className="w-4 h-4 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-orange-400" size={10} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* ROI Indicator - Compact */}
            {service.roi && (
              <div className="flex items-center justify-between p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-1">
                  <TrendingUp className="text-green-400" size={12} />
                  <span className="text-xs font-medium text-green-300">ROI</span>
                </div>
                <div className="text-sm font-bold text-green-400">
                  {service.roi}
                </div>
              </div>
            )}
          </div>
          
          {/* Action Area - Compact */}
          <div className="mt-4 space-y-2">
            {/* Primary Action */}
            <button className="w-full group/btn relative bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-orange-300 py-2.5 rounded-xl text-xs font-semibold hover:from-orange-500/25 hover:to-amber-500/25 hover:border-orange-400/50 transition-all duration-400 flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-600"></div>
              
              <span className="relative z-10 group-hover/btn:translate-x-[-2px] transition-transform duration-300">
                Get Started
              </span>
              <ArrowRight size={12} className="relative z-10 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
            
            {/* Secondary Actions */}
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-400 transition-colors duration-300">
                <Play size={10} />
                Demo
              </button>
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-amber-400 transition-colors duration-300">
                <BarChart3 size={10} />
                Case Study
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute bottom-1 left-3 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 right-4 w-0.5 h-0.5 bg-amber-400/60 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

// Main Services Section Component
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Bot,
      title: "AI Process Automation",
      shortTitle: "AI Automation",
      category: "ARTIFICIAL INTELLIGENCE",
      tagline: "Smart automation that scales",
      description: "Deploy AI agents that handle complex business processes, reduce costs by 60%, and operate 24/7 without human intervention.",
      technologies: ["OpenAI GPT-4", "LangChain", "Python ML", "TensorFlow"],
      features: [
        { icon: Cpu, text: "Smart processing" },
        { icon: Activity, text: "Real-time decisions" },
        { icon: Workflow, text: "Multi-system sync" },
        { icon: Target, text: "Auto optimization" }
      ],
      gradient: "from-purple-500 to-pink-500",
      stat: { value: 87, suffix: "%", label: "Efficiency" },
      roi: "340% ROI",
      featured: true
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      shortTitle: "Enterprise",
      category: "BUSINESS SYSTEMS",
      tagline: "Complete business digitization",
      description: "Custom enterprise platforms connecting every business aspect with intelligent automation at every touchpoint.",
      technologies: ["Microsoft D365", "SAP", "Power Platform", "Azure"],
      features: [
        { icon: Network, text: "Full integration" },
        { icon: Shield, text: "Enterprise secure" },
        { icon: BarChart3, text: "Advanced analytics" },
        { icon: Globe, text: "Multi-location" }
      ],
      gradient: "from-blue-600 to-cyan-500",
      stat: { value: 45, suffix: "%", label: "Cost Cut" },
      roi: "280% ROI"
    },
    {
      icon: Code,
      title: "Custom Software",
      shortTitle: "Custom Dev",
      category: "SOFTWARE DEVELOPMENT",
      tagline: "Tailored solutions that scale",
      description: "Full-stack applications with modern architecture, AI integration, and seamless scalability for your unique needs.",
      technologies: ["React", "Node.js", "Python", "AWS"],
      features: [
        { icon: Zap, text: "Lightning fast" },
        { icon: Smartphone, text: "Mobile-first" },
        { icon: Database, text: "Smart data" },
        { icon: GitBranch, text: "Auto deploy" }
      ],
      gradient: "from-orange-500 to-red-500",
      stat: { value: 99, suffix: "%", label: "Uptime" },
      roi: "220% ROI"
    },
    {
      icon: Cloud,
      title: "Smart Cloud Infrastructure",
      shortTitle: "Cloud",
      category: "CLOUD ARCHITECTURE",
      tagline: "Self-managing infrastructure",
      description: "AI-driven cloud architecture that automatically scales, optimizes costs, and prevents issues before impact.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Monitoring"],
      features: [
        { icon: Target, text: "Auto-scaling" },
        { icon: Shield, text: "Zero-trust" },
        { icon: Activity, text: "Predictive alerts" },
        { icon: TrendingUp, text: "Cost optimization" }
      ],
      gradient: "from-teal-500 to-green-500",
      stat: { value: 99, suffix: "%", label: "Available" },
      roi: "195% ROI"
    },
    {
      icon: Layout,
      title: "Digital Experience",
      shortTitle: "UX Platform",
      category: "USER EXPERIENCE",
      tagline: "Conversion-focused journeys",
      description: "Data-driven experiences with AI personalization and conversion optimization that increases revenue per visitor.",
      technologies: ["Next.js", "Tailwind", "Analytics AI", "A/B Testing"],
      features: [
        { icon: Target, text: "Conversion boost" },
        { icon: Users, text: "Personalization" },
        { icon: BarChart3, text: "Behavior tracking" },
        { icon: Zap, text: "Real-time adapt" }
      ],
      gradient: "from-indigo-500 to-purple-500",
      stat: { value: 73, suffix: "%", label: "Conv Lift" },
      roi: "425% ROI"
    },
    {
      icon: Users,
      title: "Tech Consulting",
      shortTitle: "Strategy",
      category: "DIGITAL STRATEGY",
      tagline: "Strategic tech advantage",
      description: "Technology strategy and implementation planning that aligns with business objectives for maximum ROI.",
      technologies: ["Strategy", "Architecture", "ROI Analysis", "Change Mgmt"],
      features: [
        { icon: Target, text: "Digital roadmap" },
        { icon: TrendingUp, text: "ROI optimization" },
        { icon: Shield, text: "Risk mitigation" },
        { icon: CheckCircle, text: "Implementation" }
      ],
      gradient: "from-emerald-500 to-teal-500",
      stat: { value: 24, suffix: "/7", label: "Support" },
      roi: "310% ROI"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-black via-slate-950 to-gray-900 overflow-hidden"
    >
      {/* Background Effects - Matching HeroSection theme */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-orange-400/6 to-red-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-6xl z-10">
        {/* Header - Compact and Premium */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Bot className="w-4 h-4 text-orange-400 mr-2 animate-pulse" />
            <span className="text-orange-300/90 text-sm font-medium tracking-wide">Enterprise Automation Solutions</span>
          </div>
          
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-white mb-2 font-light">We Don't Just Build.</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift font-bold">
              We Automate Everything
            </span>
          </h2>
          
          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg text-gray-300/90 leading-relaxed font-light mb-4">
              Transform your business with intelligent automation systems that deliver measurable ROI through seamless technology integration.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-400" size={14} />
                <span>Fortune 500 Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-orange-400" size={14} />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-orange-400" size={14} />
                <span>Proven ROI</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Compact Services Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <CompactServiceCard 
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        {/* Call to Action Section - Compact */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 via-slate-900/80 to-black/90 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Ready to Automate Your Business?
                </h3>
                <p className="text-lg text-gray-300/90 mb-6 max-w-2xl mx-auto">
                  Schedule a consultation and discover how AI can transform your operations, reduce costs, and accelerate growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
                    <span className="relative z-10">Start Automation Project</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={18} />
                  </button>
                  
                  <button className="group relative border-2 border-orange-500/50 text-orange-300 px-8 py-3 rounded-xl text-base font-semibold hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10 hover:border-orange-400/70 hover:text-orange-200 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <Play className="mr-2 group-hover:scale-110 transition-all duration-300" size={16} />
                    <span>Watch Demo</span>
                  </button>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500/80">
                  <span>🚀 Free ROI Analysis</span>
                  <span>⚡ 30-Day Setup</span>
                  <span>🔒 Enterprise Security</span>
                </div>
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;