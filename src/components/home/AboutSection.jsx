import React, { useState, useEffect } from 'react';
import { Bot, Workflow, TrendingUp, Users, Calendar, Target, Rocket, Cpu, Settings, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    { icon: Users, title: "Process Discovery", desc: "We analyze your current workflows and identify automation opportunities", time: "Week 1-2" },
    { icon: Bot, title: "AI Agent Development", desc: "Custom AI agents designed for your specific business processes", time: "Week 2-4" },
    { icon: Workflow, title: "System Integration", desc: "Seamlessly integrate automation into your existing systems", time: "Week 4-6" },
    { icon: TrendingUp, title: "Continuous Optimization", desc: "Monitor, learn, and improve automation performance over time", time: "Ongoing" }
  ];

  const fadeClass = (delay = 0) => 
    `transition-all duration-1000 ${delay ? `delay-${delay}` : ''} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

  return (
    <section 
      id="about-section"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Effects - Consistent with Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-orange-400/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern - Same as Hero */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-8 lg:px-12 max-w-6xl">
        {/* Header - More Refined */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/8 to-amber-500/8 border border-orange-500/15 backdrop-blur-sm mb-8 ${fadeClass()}`}>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 animate-pulse" />
            <span className="text-orange-300/80 text-xs font-medium tracking-wider uppercase">Automation Excellence</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight ${fadeClass(200)}`}>
            <span className="block text-white mb-2 font-light">Transform Your Business with</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent font-semibold">
              Smart Automation
            </span>
          </h2>
          
          <div className={`max-w-2xl mx-auto space-y-4 ${fadeClass(400)}`}>
            <p className="text-lg text-gray-300/90 leading-relaxed font-light">
              We don't just build software – we create intelligent systems that work tirelessly for your business. Our AI agents handle repetitive tasks, optimize workflows, and free your team to focus on growth.
            </p>
            <p className="text-base text-gray-400/80 leading-relaxed font-light">
              From simple task automation to complex business process optimization, we deliver solutions that scale with your ambitions.
            </p>
          </div>
        </div>

        {/* Automation Process Steps - Cleaner Layout */}
        <div className={`mb-24 ${fadeClass(600)}`}>
          {/* Desktop Flow - More Refined */}
          <div className="hidden lg:block">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 -translate-y-1/2 transition-all duration-1000 rounded-full"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
              
              <div className="flex justify-between items-center relative">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i <= activeStep;
                  const isCurrent = i === activeStep;
                  
                  return (
                    <div key={i} className="flex flex-col items-center group cursor-pointer" onClick={() => setActiveStep(i)}>
                      <div className={`relative w-12 h-12 rounded-full mb-6 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/25 scale-105' 
                          : 'bg-gray-800/80 border border-orange-500/20 group-hover:border-orange-400/40'
                      }`}>
                        <Icon className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-orange-300'
                        }`} />
                        {isCurrent && <div className="absolute inset-0 rounded-full bg-orange-500/15 animate-ping" />}
                      </div>
                      
                      <div className="text-center max-w-xs">
                        <div className={`text-xs font-medium mb-3 px-2 py-1 rounded-full transition-colors duration-300 ${
                          isActive ? 'text-orange-300/90 bg-orange-500/8' : 'text-gray-500/80'
                        }`}>
                          {step.time}
                        </div>
                        <h4 className={`text-base font-semibold mb-3 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-300 font-light ${
                          isActive ? 'text-gray-300/90' : 'text-gray-500/80'
                        }`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Flow - Cleaner */}
          <div className="lg:hidden space-y-8 max-w-md mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;
              
              return (
                <div key={i} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20' 
                      : 'bg-gray-800/80 border border-orange-500/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-xs font-medium mb-2 px-2 py-1 rounded-full inline-block ${
                      isActive ? 'text-orange-300/90 bg-orange-500/8' : 'text-gray-500/80 bg-gray-800/30'
                    }`}>
                      {step.time}
                    </div>
                    <h4 className={`text-base font-semibold mb-2 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm leading-relaxed font-light ${isActive ? 'text-gray-300/90' : 'text-gray-500/80'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        

        {/* Results Preview Section */}
        <div className={`mt-20 max-w-4xl mx-auto ${fadeClass(1000)}`}>
          <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-6">
              What Automation Delivers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  80%
                </div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  60%
                </div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Operation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent - More Subtle */}
        <div className={`mt-20 flex justify-center ${fadeClass(1200)}`}>
          <div className="w-16 h-px bg-gradient-to-r from-orange-500/60 to-amber-500/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;