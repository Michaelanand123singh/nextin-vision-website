import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, Bot, Settings, Cloud, Palette, Users, Star, ArrowRight, Play, CheckCircle, Globe, Rocket, Building, Heart, Phone, Mail, MapPin, Linkedin, Github, Twitter, Zap, Shield, TrendingUp, Cpu, Terminal, Workflow, Database, Server, Monitor } from 'lucide-react';

// Minimalist Tech Stack Component
const AnimatedTechStack = () => {
  const [activeStack, setActiveStack] = useState(0);
  
  const stacks = [
    { name: 'Frontend', icons: [Code, Monitor, Palette], color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icons: [Server, Database, Cloud], color: 'from-green-500 to-emerald-500' },
    { name: 'AI/ML', icons: [Bot, Cpu, Workflow], color: 'from-purple-500 to-pink-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStack((prev) => (prev + 1) % stacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white/80 font-medium text-sm">Tech Stack</h3>
        <div className="flex gap-1.5">
          {stacks.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                index === activeStack ? 'bg-orange-400' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {stacks.map((stack, stackIndex) => (
          <div
            key={stackIndex}
            className={`transition-all duration-500 ${
              stackIndex === activeStack ? 'opacity-100 scale-100' : 'opacity-30 scale-98'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/60 font-medium">{stack.name}</span>
              <div className="flex gap-2">
                {stack.icons.map((Icon, iconIndex) => (
                  <div
                    key={iconIndex}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-r ${stack.color} opacity-90`}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-0.5">
              <div
                className={`h-0.5 bg-gradient-to-r ${stack.color} rounded-full transition-all duration-1000 ${
                  stackIndex === activeStack ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Refined Live Metrics Component
const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    uptime: 99.9,
    requests: 2400,
    users: 1250
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        uptime: Math.min(99.99, prev.uptime + Math.random() * 0.01),
        requests: prev.requests + Math.floor(Math.random() * 50),
        users: prev.users + Math.floor(Math.random() * 10)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="text-center">
        <div className="text-base font-semibold text-green-400 mb-1">{metrics.uptime.toFixed(2)}%</div>
        <div className="text-xs text-white/50">Uptime</div>
      </div>
      <div className="text-center">
        <div className="text-base font-semibold text-blue-400 mb-1">{metrics.requests.toLocaleString()}</div>
        <div className="text-xs text-white/50">Requests/h</div>
      </div>
      <div className="text-center">
        <div className="text-base font-semibold text-orange-400 mb-1">{metrics.users.toLocaleString()}</div>
        <div className="text-xs text-white/50">Active Users</div>
      </div>
    </div>
  );
};

// Minimal Code Terminal Component
const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  
  const codeLines = [
    { text: "$ npm run deploy", color: "text-green-400" },
    { text: "✓ Building production bundle...", color: "text-blue-400" },
    { text: "✓ Optimizing assets...", color: "text-yellow-400" },
    { text: "✓ Deployed to production", color: "text-green-400" },
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
    <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-5 border border-white/10 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <Terminal className="w-4 h-4 text-green-400" />
        <span className="text-white/60 text-xs">deployment.sh</span>
      </div>
      {codeLines.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            index < visibleLines ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className={`py-1 ${line.color}`}>
            {line.text}
          </div>
        </div>
      ))}
      <div className="mt-3 flex items-center">
        <span className="text-white/40">$</span>
        <span className="ml-2 w-2 h-4 bg-green-400 animate-pulse"></span>
      </div>
    </div>
  );
};

// Premium Quick Intro Section
const QuickIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBoxes, setAnimatedBoxes] = useState(new Set());
  const [currentFeature, setCurrentFeature] = useState(0);
  const sectionRef = useRef(null);

  const features = [
    'Software Solutions',
    'AI Integration',
    'Cloud Architecture',
    'Digital Transformation'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate boxes with staggered delay
          const boxes = Array.from({length: 6}, (_, i) => i);
          boxes.forEach((box, index) => {
            setTimeout(() => {
              setAnimatedBoxes(prev => new Set([...prev, box]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Feature rotation
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(featureInterval);
    };
  }, []);

  const achievements = [
    { icon: Rocket, label: "Projects", value: "200+", color: "from-orange-500 to-red-500" },
    { icon: Users, label: "Clients", value: "150+", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, label: "Success", value: "98%", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-gradient-to-b from-black via-slate-950 to-gray-900 relative overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-orange-400/3 to-red-500/3 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Refined Header Section */}
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Minimal Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10">
              <Code className="w-3.5 h-3.5 text-orange-400 mr-2" />
              <span className="text-white/70 text-sm font-medium">Enterprise Solutions</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8 leading-[1.1] tracking-tight">
              Premium
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift block font-normal">
                {features[currentFeature]}
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed mb-16 font-light max-w-3xl mx-auto">
              We craft exceptional software experiences that transform businesses and elevate digital presence through thoughtful design and innovative technology.
            </p>
          </div>

          {/* Spacious Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            {/* Left Column - Refined Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              {/* Clean Project Showcase */}
              <div className="bg-white/3 border border-white/10 rounded-3xl p-8 mb-16 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/8 to-transparent rounded-bl-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-5 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-3">Latest Project</h3>
                      <p className="text-white/70 mb-6 leading-relaxed text-sm">
                        Delivered a comprehensive fintech platform processing 
                        <span className="text-orange-400 font-medium"> $50M+ monthly</span> with exceptional reliability.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center text-sm text-green-400">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>6 months</span>
                        </div>
                        <div className="flex items-center text-sm text-blue-400">
                          <Zap className="w-4 h-4 mr-2" />
                          <span>40% savings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Refined Metrics */}
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="text-xs text-white/50 mb-4 text-center font-medium">Live Metrics</div>
                    <LiveMetrics />
                  </div>
                </div>
              </div>

              {/* Minimal Achievement Stats */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-700 delay-${index * 200 + 400} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-15`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-xl font-medium text-white mb-2">{achievement.value}</div>
                    <div className="text-sm text-white/50 font-light">{achievement.label}</div>
                  </div>
                ))}
              </div>

              {/* Refined CTAs */}
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-white font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-500 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] transform">
                  <span>Start Project</span>
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white/80 font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-500 backdrop-blur-md">
                  <Play className="mr-3 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Work</span>
                </button>
              </div>
            </div>

            {/* Right Column - Refined Tech Visualization */}
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <div className="space-y-8">
                {/* Code Terminal */}
                <CodeTerminal />

                {/* Tech Stack */}
                <AnimatedTechStack />

                {/* Minimal Process Visualization */}
                <div className="bg-white/3 backdrop-blur-md p-6 rounded-3xl border border-white/10 relative">
                  <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl blur-lg"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-white/80 font-medium mb-6 text-center text-sm">Development Flow</h3>
                    
                    {/* Clean Process Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {Array.from({length: 6}, (_, i) => (
                        <div 
                          key={i} 
                          className={`h-10 rounded-xl transition-all duration-700 delay-${i * 150} transform ${
                            animatedBoxes.has(i) 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-95'
                          } ${
                            i < 2
                              ? 'bg-gradient-to-r from-green-500/80 to-emerald-500/80' 
                              : i < 4
                              ? 'bg-gradient-to-r from-orange-500/80 to-amber-500/80'
                              : 'bg-gradient-to-r from-blue-500/80 to-purple-500/80'
                          } flex items-center justify-center`}
                        >
                          {i < 2 && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                          {i >= 2 && i < 4 && <Code className="w-3.5 h-3.5 text-white" />}
                          {i >= 4 && <Rocket className="w-3.5 h-3.5 text-white" />}
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4].map((dot) => (
                          <div 
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-${dot * 200 + 600} ${
                              isVisible ? 'bg-orange-400' : 'bg-white/20'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/50 mb-1">Status</div>
                        <div className={`text-sm font-medium transition-all duration-1000 delay-800 ${
                          isVisible ? 'text-green-400' : 'text-white/30'
                        }`}>
                          Active
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - More Subtle */}
              <div className={`absolute -top-6 -left-6 bg-gradient-to-r from-orange-500/90 to-amber-500/90 p-3 rounded-2xl shadow-lg transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 rotate-3'}`}>
                <Bot className="w-4 h-4 text-white" />
              </div>
              
              <div className={`absolute -bottom-4 -right-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 -rotate-3'}`}>
                <Server className="w-4 h-4 text-blue-400" />
              </div>
              
              <div className={`absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500/90 to-pink-500/90 p-2.5 rounded-xl shadow-lg transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-2 -rotate-2'}`}>
                <Database className="w-3.5 h-3.5 text-white" />
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
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default QuickIntro;