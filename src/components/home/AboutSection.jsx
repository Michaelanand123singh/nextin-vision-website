import React, { useState, useEffect } from 'react';
import { Zap, BarChart3, Users, Calendar, Target, Rocket } from 'lucide-react';

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
    { icon: Users, title: "Initial Partnership", desc: "We integrate with your team and understand your vision", time: "Week 1-2" },
    { icon: Zap, title: "Proactive Collaboration", desc: "Early engagement with rapid ideation and fast execution", time: "Ongoing" },
    { icon: BarChart3, title: "Long-Term Focus", desc: "Building scalable systems that grow with your business", time: "Month 1+" },
    { icon: Rocket, title: "Sustained Success", desc: "Continuous evolution and optimization for lasting impact", time: "Partnership" }
  ];

  const values = [
    {
      icon: Zap,
      title: "Proactive Collaboration",
      desc: "We engage early and often to bring ideas to life and move fast with clarity, ensuring every decision drives meaningful progress.",
      badge: { icon: Calendar, text: "Real-time engagement" }
    },
    {
      icon: BarChart3,
      title: "Long-Term Focus", 
      desc: "We build scalable systems and sustainable code, architecting solutions that grow with your business and adapt to future needs.",
      badge: { icon: Target, text: "Scalable architecture" }
    },
    {
      icon: Users,
      title: "Real Partnership",
      desc: "We work with you, not for you—acting as an embedded extension of your team, fully invested in your vision and success.",
      badge: { icon: Rocket, text: "Embedded integration" }
    }
  ];

  const fadeClass = (delay = 0) => 
    `transition-all duration-1000 ${delay ? `delay-${delay}` : ''} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

  return (
    <section 
      id="about-section"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-black via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/12 to-amber-500/12 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-l from-amber-400/8 to-orange-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, orange 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6 ${fadeClass()}`}>
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse" />
            <span className="text-orange-300 text-sm font-medium tracking-wide">PARTNERSHIP EXCELLENCE</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${fadeClass(200)}`}>
            <span className="block text-white mb-2">We Become Your</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Tech Partner
            </span>
          </h2>
          
          <div className={`max-w-2xl mx-auto ${fadeClass(400)}`}>
            <p className="text-xl text-gray-300 leading-relaxed mb-3">
              We go beyond typical agency-client relationships. We collaborate as long-term partners—deeply integrated with your teams.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Think of us as your embedded tech team—committed, capable, and always evolving with you.
            </p>
          </div>
        </div>

        {/* Partnership Steps */}
        <div className={`mb-16 ${fadeClass(600)}`}>
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/30 via-amber-500/30 to-orange-500/30 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 -translate-y-1/2 transition-all duration-1000 rounded-full shadow-lg shadow-orange-500/30"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
              
              <div className="flex justify-between items-center relative">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i <= activeStep;
                  const isCurrent = i === activeStep;
                  
                  return (
                    <div key={i} className="flex flex-col items-center group cursor-pointer" onClick={() => setActiveStep(i)}>
                      <div className={`relative w-14 h-14 rounded-full mb-4 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30 scale-110' 
                          : 'bg-gray-800 border-2 border-orange-500/20 group-hover:border-orange-400/40'
                      }`}>
                        <Icon className={`w-7 h-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-orange-300'
                        }`} />
                        {isCurrent && <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping" />}
                      </div>
                      
                      <div className="text-center max-w-xs">
                        <div className={`text-xs font-medium mb-2 px-2 py-1 rounded-full transition-colors duration-300 ${
                          isActive ? 'text-orange-300 bg-orange-500/10' : 'text-gray-500'
                        }`}>
                          {step.time}
                        </div>
                        <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-gray-300' : 'text-gray-500'
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

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;
              
              return (
                <div key={i} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20' 
                      : 'bg-gray-800 border border-orange-500/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-xs font-medium mb-1 px-2 py-1 rounded-full inline-block ${
                      isActive ? 'text-orange-300 bg-orange-500/10' : 'text-gray-500 bg-gray-800/50'
                    }`}>
                      {step.time}
                    </div>
                    <h4 className={`text-lg font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            const BadgeIcon = value.badge.icon;
            
            return (
              <div key={i} className={`group relative ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''} ${fadeClass(800 + i * 100)}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 hover:border-orange-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {value.desc}
                  </p>
                  <div className="flex items-center text-orange-300 text-sm font-medium">
                    <BadgeIcon className="w-4 h-4 mr-2" />
                    {value.badge.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className={`mt-16 flex justify-center ${fadeClass(1200)}`}>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg shadow-orange-500/30" />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default AboutSection;