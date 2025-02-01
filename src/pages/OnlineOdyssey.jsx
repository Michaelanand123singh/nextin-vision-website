import React from 'react';
import { Globe, Brain, Code, Cpu, Database, Layers, ArrowRight } from 'lucide-react';

const OnlineOdyssey = () => {
  const services = [
    {
      title: "Metaverse & Immersive",
      description: "Revolutionary virtual environments powering next-gen business interactions",
      icon: <Globe className="w-5 h-5 text-orange-400" />,
      features: [
        "Metaverse training and virtual events",
        "VR product visualization suite",
        "Digital twin implementation"
      ],
      stats: [
        { label: "Success Rate", value: "98%" },
        { label: "Clients", value: "50+" }
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "AI & Automation",
      description: "Intelligent solutions driving enterprise efficiency and innovation",
      icon: <Brain className="w-5 h-5 text-orange-400" />,
      features: [
        "AI-powered analytics & predictions",
        "Enterprise-scale automation",
        "NLP & chatbot solutions"
      ],
      stats: [
        { label: "Data Points", value: "1M+" },
        { label: "Accuracy", value: "99.9%" }
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Custom Software",
      description: "Tailored development solutions for sustainable growth",
      icon: <Code className="w-5 h-5 text-orange-400" />,
      features: [
        "AI-enhanced SaaS development",
        "Enterprise solution architecture",
        "Custom E-Commerce platforms"
      ],
      stats: [
        { label: "Deployments", value: "200+" },
        { label: "Uptime", value: "99.99%" }
      ],
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 to-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-orange-400" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Odyssey
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Pioneering the future of technology with innovative solutions
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-gray-800/80 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 text-sm">
                <Layers className="w-4 h-4" />
                Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-500 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-800/50 rounded-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-orange-400 rounded-full mt-2" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-4 mt-4 p-3 bg-gray-800/30 rounded-lg">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-orange-400">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
                    <div className="relative">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="rounded-lg w-full object-cover h-56 md:h-64"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg" />
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
            Ready to Transform Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Digital Infrastructure?</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto">
            Let's collaborate to build innovative solutions that drive your business forward
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-all duration-300 text-sm">
              Schedule Consultation
            </button>
            <button className="bg-gray-800/80 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineOdyssey;