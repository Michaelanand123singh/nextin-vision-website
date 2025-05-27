import React, { useState, useEffect } from 'react';
import { Star, Award, TrendingUp, Globe } from 'lucide-react';

export default function PartnerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { 
      name: 'Acme Inc.', 
      logo: 'A',
      industry: 'SaaS',
      description: 'Global productivity platform',
      metric: '2M+ users',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'BrightWave', 
      logo: 'B',
      industry: 'Marketing',
      description: 'AI-powered marketing automation',
      metric: '500% ROI',
      color: 'from-green-500 to-green-600'
    },
    { 
      name: 'Northbay Labs', 
      logo: 'N',
      industry: 'Research',
      description: 'Biotech research platform',
      metric: '$50M funding',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'FinBridge', 
      logo: 'F',
      industry: 'Fintech',
      description: 'Cross-border payment solutions',
      metric: '$1B processed',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      name: 'Owl Systems', 
      logo: 'O',
      industry: 'Security',
      description: 'Enterprise cybersecurity',
      metric: '99.9% uptime',
      color: 'from-red-500 to-red-600'
    }
  ];

  const testimonials = [
    {
      text: "They didn't just build our platform—they understood our vision and made it reality.",
      author: "Sarah Chen",
      role: "CTO, BrightWave",
      rating: 5
    },
    {
      text: "Exceptional technical expertise combined with genuine partnership approach.",
      author: "Marcus Rodriguez",
      role: "Founder, FinBridge",
      rating: 5
    },
    {
      text: "Our user engagement increased 300% after their platform redesign.",
      author: "Dr. Emily Watson",
      role: "Director, Northbay Labs",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="text-orange-400" size={20} />
            <p className="text-orange-400 uppercase text-sm font-semibold tracking-wider">
              Trusted by forward-thinking companies
            </p>
            <Award className="text-orange-400" size={20} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partners in{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-500 cursor-pointer text-center"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
              
              {/* Logo */}
              <div className={`bg-gradient-to-r ${partner.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">{partner.logo}</span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-semibold mb-1 group-hover:text-orange-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-400 text-xs mb-2">{partner.industry}</p>
                <p className="text-gray-300 text-xs mb-2">{partner.description}</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp size={12} className="text-orange-400" />
                  <span className="text-orange-400 text-xs font-medium">{partner.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">50+</div>
            <div className="text-gray-300 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">98%</div>
            <div className="text-gray-300 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
            <div className="text-gray-300 text-sm">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
            <div className="text-gray-300 text-sm">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Join the companies that chose excellence
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}