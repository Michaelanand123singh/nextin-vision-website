import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Zap, Target, Shield, Cpu, Network, BarChart3, Users, CheckCircle, ArrowRight, Bot, Workflow, Play } from 'lucide-react';

// Animated Code Visualization Component
const AnimatedCodeBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  
  const codeLines = [
    { text: "// AI-First Development", indent: 0, color: "text-gray-500" },
    { text: "const buildSolution = async (requirements) => {", indent: 0, color: "text-purple-400" },
    { text: "const analysis = await analyzeNeeds(business);", indent: 1, color: "text-blue-400" },
    { text: "const architecture = designScalable(growth);", indent: 1, color: "text-green-400" },
    { text: "return deployIntelligent(automation);", indent: 1, color: "text-orange-400" },
    { text: "};", indent: 0, color: "text-purple-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          setTimeout(() => setVisibleLines(0), 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 font-mono text-xs">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700/50">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2 text-xs">philosophy.ai</span>
      </div>
      {codeLines.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            index < visibleLines ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center py-0.5">
            <span className="text-gray-600 w-4 text-right mr-2 text-xs">{index + 1}</span>
            <span style={{ marginLeft: `${line.indent * 12}px` }} className={line.color}>
              {line.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Performance Metrics Animation
const AnimatedMetrics = () => {
  const [metrics, setMetrics] = useState({ roi: 0, efficiency: 0, automation: 0, uptime: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isAnimating) {
      const targets = { roi: 89, efficiency: 340, automation: 75, uptime: 99.9 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setMetrics({
          roi: Math.floor(targets.roi * progress),
          efficiency: Math.floor(targets.efficiency * progress),
          automation: Math.floor(targets.automation * progress),
          uptime: Math.floor(targets.uptime * progress * 10) / 10,
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setMetrics(targets);
        }
      }, stepTime);
    }
  }, [isAnimating]);

  const metricsData = [
    { key: 'roi', value: metrics.roi, suffix: '%', label: 'ROI Boost', icon: TrendingUp, color: 'from-orange-500 to-amber-500' },
    { key: 'efficiency', value: metrics.efficiency, suffix: '%', label: 'Speed Up', icon: Zap, color: 'from-amber-500 to-yellow-500' },
    { key: 'automation', value: metrics.automation, suffix: '%', label: 'Automated', icon: Bot, color: 'from-orange-400 to-red-500' },
    { key: 'uptime', value: metrics.uptime, suffix: '%', label: 'Uptime', icon: Shield, color: 'from-red-500 to-orange-500' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-white font-semibold text-sm">Live Performance</h4>
        <button 
          onClick={() => setIsAnimating(!isAnimating)}
          className="text-xs text-orange-400 hover:text-orange-300 transition-colors duration-300"
        >
          {isAnimating ? 'Running...' : 'Start Demo'}
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {metricsData.map((item, index) => (
          <div key={item.key} className="text-center group">
            <div className={`w-10 h-10 bg-gradient-to-br ${item.color}/20 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-all duration-300`}>
              <item.icon className="text-orange-400" size={14} />
            </div>
            <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
              {item.value}{item.suffix}
            </div>
            <div className="text-xs text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Principle Progress Bars
const PrinciplesBars = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const principles = [
    { title: "AI-First", desc: "Intelligent automation core", progress: 95, color: "from-orange-500 to-amber-500" },
    { title: "Scalable", desc: "Growth-ready architecture", progress: 92, color: "from-amber-500 to-yellow-500" },
    { title: "Strategic", desc: "Business-aligned solutions", progress: 88, color: "from-orange-400 to-red-500" },
    { title: "Partnership", desc: "Long-term collaboration", progress: 90, color: "from-red-500 to-orange-500" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <h4 className="text-white font-semibold text-sm mb-4">Our Approach</h4>
      {principles.map((principle, index) => (
        <div key={index} className="group">
          <div className="flex justify-between items-center mb-1">
            <span className="text-white font-medium text-sm">{principle.title}</span>
            <span className="text-orange-400 text-xs font-bold">{principle.progress}%</span>
          </div>
          <div className="text-xs text-gray-400 mb-2">{principle.desc}</div>
          <div className="bg-gray-800/50 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${principle.color} rounded-full transition-all duration-1000 ease-out`}
              style={{ 
                width: isVisible ? `${principle.progress}%` : '0%',
                transitionDelay: `${index * 200}ms`
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Philosophy Section Component
const PhilosophySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Build Smart', 'Scale Fast', 'Deliver Value'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('philosophy-section');
    if (section) observer.observe(section);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section 
      id="philosophy-section"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects - Same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-orange-400/6 to-red-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Header Section - Matching Hero Style */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
            <Target className="w-4 h-4 text-orange-400 mr-2 animate-pulse" />
            <span className="text-orange-300/90 text-sm font-medium tracking-wide">Our Philosophy</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
            <span className="block mb-3 font-light text-gray-200">We Don't Just Build.</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent transition-all duration-1000 bg-300% animate-gradient-shift relative font-bold">
              We {texts[currentText]}
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transform scale-x-0 animate-expand origin-left"></div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-300/90 leading-relaxed max-w-3xl mx-auto">
            Every solution we create is designed with intelligence, built for scale, and optimized for your success.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Code and Philosophy */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Code Visualization */}
            <div className="relative">
              <AnimatedCodeBlock />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-xl blur-xl -z-10"></div>
            </div>

            {/* Principles Bars */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
              <PrinciplesBars />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-gray-400/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-400/80" size={14} />
                <span className="text-sm">Custom AI Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Workflow className="text-orange-400/80" size={14} />
                <span className="text-sm">Scalable Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Side - Metrics and Features */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Performance Metrics */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
              <AnimatedMetrics />
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20 group hover:border-orange-400/40 transition-all duration-300">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <Bot className="w-4 h-4 text-orange-400" />
                </div>
                <h4 className="text-white font-medium text-sm mb-2">AI Agents</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Intelligent automation that works 24/7</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 group hover:border-blue-400/40 transition-all duration-300">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <Network className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-white font-medium text-sm mb-2">Smart Systems</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Architecture that grows with you</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 group hover:border-green-400/40 transition-all duration-300">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="text-white font-medium text-sm mb-2">Analytics</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Data-driven insights and optimization</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 group hover:border-purple-400/40 transition-all duration-300">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-white font-medium text-sm mb-2">Partnership</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Your success is our commitment</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-black/30 via-orange-950/40 to-black/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-orange-400">50+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-orange-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-400">∞</div>
                  <div className="text-xs text-gray-400">Scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-7 py-3 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={16} />
            </button>
            
            <button className="group relative border-2 border-orange-500/50 text-orange-300 px-7 py-3 rounded-xl text-base font-semibold hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10 hover:border-orange-400/70 hover:text-orange-200 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
              <Play className="mr-2 group-hover:scale-110 transition-all duration-300" size={16} />
              <span>See Our Work</span>
            </button>
          </div>
        </div>

      </div>

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
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.8s forwards;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;