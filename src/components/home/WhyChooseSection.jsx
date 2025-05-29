import React from 'react';
import {
  Handshake,
  Target,
  MessageCircle,
  Package,
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Handshake,
      text: 'Long-Term Collaboration',
      description: 'We build lasting partnerships, not just projects.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      text: 'Business-Focused Development',
      description: 'Every line of code serves your strategic goals.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MessageCircle,
      text: 'Transparent Communication',
      description: 'Clear updates and honest dialogue throughout.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Package,
      text: 'Full Lifecycle Support',
      description: 'From concept to scale, we grow with you.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
              Why Teams Choose{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium">
                NEXTIN VISION
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Your technology partner for sustainable growth
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:bg-gray-800/30 hover:border-gray-600/50 transition-all duration-700 cursor-pointer"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`bg-gradient-to-r ${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}
                  >
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-orange-400 transition-colors duration-500 leading-tight">
                      {benefit.text}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-12 p-8 bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm border border-gray-700/20 rounded-2xl max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm font-light tracking-wide">Client Retention</div>
            </div>
            <div className="w-px h-12 bg-gray-700/50"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400 mb-2">4.9★</div>
              <div className="text-gray-400 text-sm font-light tracking-wide">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-700/50"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400 mb-2">3+ Years</div>
              <div className="text-gray-400 text-sm font-light tracking-wide">Partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;