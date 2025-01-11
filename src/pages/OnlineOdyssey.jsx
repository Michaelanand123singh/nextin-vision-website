import { Button } from '../components/common/Button';
import React from 'react';

const OnlineOdysseyPage = () => {
  // Custom Card Component
  const Card = ({ children, className }) => (
    <div className={`rounded-lg ${className}`}>
      {children}
    </div>
  );

  // Custom Icon Components
  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );

  const services = [
    {
      title: "Digital Strategy",
      description: "Expert guidance for your digital transformation journey",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      title: "Online Presence",
      description: "Build a powerful digital footprint that converts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      title: "Content Creation",
      description: "Professional multimedia production services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      title: "Growth Strategies",
      description: "Data-driven approaches to scale your business",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="bg-[#1C1C1C] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"/>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-[#FF5722]"> Online Odyssey</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Bridge the gap between offline success and digital excellence. Let us guide your business through its digital transformation journey.
            </p>
            <Button className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white px-8 py-6 rounded-full text-lg inline-flex items-center">
              Start Your Journey
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Comprehensive Digital Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#1C1C1C] p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-[#FF5722] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Online Odyssey?
              </h2>
              <ul className="space-y-6">
                {[
                  "Seamless integration of offline and online operations",
                  "Expert team with diverse digital expertise",
                  "Proven track record of successful transformations",
                  "Customized strategies for your unique business needs",
                  "Ongoing support and optimization",
                  "Result-driven approach with measurable outcomes"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-[#FF5722] mr-3">
                      <CheckCircleIcon />
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2A2A2A] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Start Your Transformation</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    className="w-full p-4 rounded-lg bg-[#1C1C1C] border border-gray-700 focus:border-[#FF5722] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-4 rounded-lg bg-[#1C1C1C] border border-gray-700 focus:border-[#FF5722] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-lg bg-[#1C1C1C] border border-gray-700 focus:border-[#FF5722] transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your business"
                    rows="4"
                    className="w-full p-4 rounded-lg bg-[#1C1C1C] border border-gray-700 focus:border-[#FF5722] transition-colors"
                  />
                </div>
                <Button className="w-full bg-[#FF5722] hover:bg-[#FF5722]/90 text-white py-4 rounded-lg text-lg">
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Transformation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current business model and identify digital opportunities"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a customized digital transformation roadmap"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the plan with our expert team"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and scaling"
              }
            ].map((process, index) => (
              <div key={index} className="relative p-6">
                <div className="text-[#FF5722] text-6xl font-bold opacity-20 absolute top-0 left-0">
                  {process.step}
                </div>
                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF5722] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join successful businesses that have already transformed with Online Odyssey.
          </p>
          <Button className="bg-white text-[#FF5722] hover:bg-gray-100 px-8 py-6 rounded-full text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </main>
  );
};

export default OnlineOdysseyPage;