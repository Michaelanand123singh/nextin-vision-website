import React from 'react';
import {
  Bot,
  Brain,
  Zap,
  Shield,
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Bot,
      text: 'Autonomous AI Agents',
      description: 'AI that works 24/7 without human intervention, learning and improving continuously.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Brain,
      text: 'Intelligent Decision Making',
      description: 'AI agents that understand context and make smart decisions in real-time.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      text: 'Lightning-Fast Automation',
      description: 'Process thousands of tasks in seconds with intelligent automation workflows.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      text: 'Enterprise-Grade Security',
      description: 'Bank-level security with AI-powered threat detection and compliance.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="relative overflow-hidden">

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium">
                AI Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Your AI partner for intelligent automation and business transformation
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

          {/* AI Performance Indicators */}
          <div className="flex justify-center items-center space-x-12 p-8 bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm border border-gray-700/20 rounded-2xl max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm font-light tracking-wide">AI Accuracy</div>
            </div>
            <div className="w-px h-12 bg-gray-700/50"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm font-light tracking-wide">AI Operations</div>
            </div>
            <div className="w-px h-12 bg-gray-700/50"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400 mb-2">85%</div>
              <div className="text-gray-400 text-sm font-light tracking-wide">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;