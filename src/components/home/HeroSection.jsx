import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, CheckCircle, Globe, Rocket, Building, Zap, Code, Terminal, Cpu, Bot, Workflow, TrendingUp } from 'lucide-react';

// Animated Code Lines Component
const AnimatedCodeLines = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  
  const codeLines = [
    { text: "const automateWorkflow = async () => {", indent: 0, color: "text-purple-400" },
    { text: "const processes = await analyze(operations);", indent: 1, color: "text-blue-400" },
    { text: "const aiAgent = deploy(intelligence, tasks);", indent: 1, color: "text-green-400" },
    { text: "return optimize(efficiency, performance);", indent: 1, color: "text-yellow-400" },
    { text: "};", indent: 0, color: "text-purple-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700/50">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2 text-xs">automation.ai</span>
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
            <span className="text-gray-600 w-6 text-right mr-3 text-xs">{index + 1}</span>
            <span style={{ marginLeft: `${line.indent * 16}px` }} className={line.color}>
              {line.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Floating Tech Icons Component
const FloatingTechIcons = () => {
  const icons = [
    { Icon: Bot, delay: '0s', position: 'top-16 right-16' },
    { Icon: Workflow, delay: '2s', position: 'top-32 right-32' },
    { Icon: TrendingUp, delay: '4s', position: 'top-48 right-16' },
  ];

  return (
    <>
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} w-6 h-6 text-orange-400/30 animate-float`}
          style={{ animationDelay: delay }}
        >
          <Icon size={24} />
        </div>
      ))}
    </>
  );
};

// Stats Animation Component
const AnimatedStats = () => {
  const [stats, setStats] = useState({ processes: 0, efficiency: 0, hours: 0 });
  
  useEffect(() => {
    const animateStats = () => {
      const targets = { processes: 850, efficiency: 85, hours: 24 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          processes: Math.floor(targets.processes * progress),
          efficiency: Math.floor(targets.efficiency * progress),
          hours: Math.floor(targets.hours * progress),
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepTime);
    };
    
    const delayTimer = setTimeout(animateStats, 1000);
    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-xl font-bold text-orange-400">{stats.processes}+</div>
        <div className="text-xs text-gray-400">Automated</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-orange-400">{stats.efficiency}%</div>
        <div className="text-xs text-gray-400">Efficiency</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-orange-400">{stats.hours}/7</div>
        <div className="text-xs text-gray-400">AI Works</div>
      </div>
    </div>
  );
};

// Main Hero Section Component
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const texts = ['Automate Everything', 'Scale Operations', 'Power Growth'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950 relative overflow-hidden flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-400/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Main Content Container - Smaller and Centered */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - More Spacious */}
          <div className="space-y-10 lg:pr-8">
            {/* Premium Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Bot className="w-4 h-4 text-orange-400 mr-2 animate-pulse" />
              <span className="text-orange-300/90 text-sm font-medium tracking-wide">AI-Powered Automation</span>
            </div>

            {/* Main Heading - Condensed */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                <span className="block mb-3 font-light text-gray-200">We Don't Just Code.</span>
                <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent transition-all duration-1000 bg-300% animate-gradient-shift relative font-bold">
                  We {texts[currentText]}
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transform scale-x-0 animate-expand origin-left"></div>
                </span>
              </h1>
            </div>

            {/* Description - Condensed */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-lg text-gray-300/90 leading-relaxed">
                Transform your business with intelligent automation. We build custom software solutions and AI agents that handle repetitive tasks, optimize workflows, and let your team focus on what matters most.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-7 py-3 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <span className="relative z-10">Automate Now</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={18} />
              </button>
              
              <button className="group relative border-2 border-orange-500/50 text-orange-300 px-7 py-3 rounded-xl text-base font-semibold hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10 hover:border-orange-400/70 hover:text-orange-200 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                <Play className="mr-2 group-hover:scale-110 transition-all duration-300" size={16} />
                <span>See AI in Action</span>
              </button>
            </div>

            {/* Trust Indicators - Simplified */}
            <div className={`pt-6 border-t border-gray-800/40 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex flex-wrap gap-6 text-gray-500/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-400/80" size={14} />
                  <span className="text-sm">100% Custom Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="text-orange-400/80" size={14} />
                  <span className="text-sm">ROI in 30 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Section - Compact */}
          <div className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative space-y-6">
              {/* Main Code Animation */}
              <AnimatedCodeLines />

              {/* Stats Section */}
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
                <h3 className="text-white font-semibold mb-3 text-center text-sm">Automation Impact</h3>
                <AnimatedStats />
              </div>

              {/* Process Visualization - Smaller */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-lg p-3 border border-orange-500/20">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-md flex items-center justify-center mb-2">
                    <Bot className="w-3 h-3 text-orange-400" />
                  </div>
                  <h4 className="text-white font-medium text-xs mb-1">AI Agents</h4>
                  <p className="text-gray-400 text-xs">24/7 automation</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center mb-2">
                    <Workflow className="w-3 h-3 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium text-xs mb-1">Workflows</h4>
                  <p className="text-gray-400 text-xs">Smart processes</p>
                </div>
              </div>

              {/* Floating Elements */}
              <FloatingTechIcons />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-2xl blur-2xl -z-10"></div>
            </div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.8s forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;