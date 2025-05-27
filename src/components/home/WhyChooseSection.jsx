import React from 'react';
import {
  Handshake,
  Target,
  MessageCircle,
  Package,
  Globe,
  ArrowRight,
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Handshake,
      text: 'Long-Term Collaboration > One-Off Delivery',
      description:
        'We build lasting partnerships, not just projects. Your success is our success.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      text: 'Focused on Business Value, Not Just Code',
      description:
        'Every line of code serves your business goals. We think like founders, not just developers.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MessageCircle,
      text: 'Clear, Honest Communication—No Jargon',
      description:
        'Transparent updates, plain language, and proactive communication every step of the way.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Package,
      text: 'Full Lifecycle Support (From MVP to Scale)',
      description:
        'From initial concept to enterprise scale. We grow with you at every stage.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      text: 'Globally Distributed, Locally Aligned',
      description:
        'World-class talent pool with deep understanding of your local market needs.',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Why Teams Stick with{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                NEXTIN VISION
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We're not just another dev shop. We're your technology partner for the long haul.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-4 sm:gap-6 mb-12 lg:mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-orange-500/50 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className={`bg-gradient-to-r ${benefit.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="text-white" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                      {benefit.text}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  <ArrowRight className="text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">95%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">4.9★</div>
              <div className="text-gray-300 text-xs sm:text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">3+ Years</div>
              <div className="text-gray-300 text-xs sm:text-sm">Avg Partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;