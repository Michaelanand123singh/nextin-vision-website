import React, { useState, useEffect } from 'react';
import { Globe, Brain, Code, Cpu, Database, Layers, ArrowRight, X } from 'lucide-react';

const OnlineOdyssey = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    // Load Calendly widget script when dialog opens
    if (isCalendlyOpen) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      script.setAttribute('type', 'text/javascript');
      head.appendChild(script);

      return () => {
        head.removeChild(script);
      };
    }
  }, [isCalendlyOpen]);

  useEffect(() => {
    // Prevent body scroll when dialog is open
    if (isCalendlyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCalendlyOpen]);

  const services = [
    {
      title: "Metaverse Solutions",
      description: "Pioneering virtual environments that transform business interactions and training through immersive technology.",
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      features: [
        "Enterprise metaverse training platforms",
        "VR product visualization suite",
        "Digital twin ecosystems"
      ],
      stats: [
        { label: "Success Rate", value: "98%" },
        { label: "Clients", value: "50+" }
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "AI & Automation",
      description: "Intelligent solutions powering next-generation business processes and decision-making systems.",
      icon: <Brain className="w-5 h-5 text-blue-500" />,
      features: [
        "Predictive analytics engines",
        "Process automation suite",
        "Cognitive AI solutions"
      ],
      stats: [
        { label: "Data Points", value: "1M+" },
        { label: "Accuracy", value: "99.9%" }
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Custom Software",
      description: "Tailored development solutions that drive innovation and sustainable business growth.",
      icon: <Code className="w-5 h-5 text-blue-500" />,
      features: [
        "Enterprise SaaS platforms",
        "Cloud-native architecture",
        "E-commerce solutions"
      ],
      stats: [
        { label: "Deployments", value: "200+" },
        { label: "Uptime", value: "99.99%" }
      ],
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div 
        className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg w-full max-w-[600px] h-[80vh] relative"
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  };

  const CalendlyDialog = () => (
    <>
      <button 
        onClick={() => setIsCalendlyOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        <span className="font-medium">Schedule Consultation</span>
      </button>

      <Dialog 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Schedule a Consultation</h2>
          <button 
            onClick={() => setIsCalendlyOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="w-full h-[calc(80vh-65px)]">
          <iframe
            src="https://calendly.com/d/12345-consultation"  // Replace with your actual Calendly URL
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </Dialog>
    </>
  );

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-blue-500" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Odyssey
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Shaping the future through innovative technology solutions that define tomorrow's digital landscape
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                <Database className="w-4 h-4" />
                <span className="font-medium">Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Layers className="w-4 h-4" />
                <span className="font-medium">Our Process</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-6 text-base leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-blue-500" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-blue-400 mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="rounded-lg w-full object-cover h-64 md:h-72"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/50 to-transparent rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Transform Your <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Digital Future</span>
            </h2>
            <p className="text-gray-300 mb-8 text-base max-w-xl mx-auto leading-relaxed">
              Join industry leaders revolutionizing their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CalendlyDialog />
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                <span className="font-medium">View Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineOdyssey;