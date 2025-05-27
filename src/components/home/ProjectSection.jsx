import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Smartphone, Bot, Users } from 'lucide-react';

const projects = [
  {
    name: 'Neobank App for Freelancers',
    description: 'A mobile-first platform to manage finances with AI-driven spending insights.',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    tags: ['Mobile App', 'AI/ML', 'Fintech'],
    metrics: { users: '50K+', rating: '4.8★', growth: '+180%' },
    challenge: 'Traditional banking apps lack freelancer-specific features and real-time insights',
    solution: 'Built AI-powered expense categorization and cash flow predictions for gig workers'
  },
  {
    name: 'AI Customer Assistant for E-Commerce',
    description: 'A multilingual agent that handles product queries, returns, and support 24/7.',
    icon: Bot,
    color: 'from-orange-500 to-yellow-500',
    tags: ['AI/ML', 'NLP', 'E-commerce'],
    metrics: { queries: '1M+', languages: '12', uptime: '99.9%' },
    challenge: 'High customer service costs and inconsistent multilingual support quality',
    solution: 'Deployed advanced NLP models with cultural context awareness and seamless handoffs'
  },
  {
    name: 'HR Automation Suite for Mid-Size Enterprises',
    description: 'Streamlined hiring, onboarding, and evaluation using intelligent workflows.',
    icon: Users,
    color: 'from-orange-500 to-purple-500',
    tags: ['Enterprise', 'Automation', 'HR Tech'],
    metrics: { efficiency: '+65%', time: '-40%', satisfaction: '4.9★' },
    challenge: 'Manual HR processes creating bottlenecks and inconsistent candidate experiences',
    solution: 'Automated workflows with smart matching algorithms and integrated communication tools'
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real solutions for real challenges. See how we've transformed businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 cursor-pointer ${
                expandedProject === index ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className={`bg-gradient-to-r ${project.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="text-white" size={20} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-800/30 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-orange-400 font-semibold text-sm">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Expanded Content */}
                {expandedProject === index && (
                  <div className="mt-6 pt-6 border-t border-gray-700 animate-in slide-in-from-top duration-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2">Our Solution</h4>
                        <p className="text-gray-300 text-sm">{project.solution}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="flex items-center justify-between mt-6">
                  <button className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors group/btn">
                    <span className="text-sm font-medium">
                      {expandedProject === index ? 'Show Less' : 'Learn More'}
                    </span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  {hoveredProject === index && (
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-orange-400 transition-colors opacity-0 group-hover:opacity-100">
                      <ExternalLink size={14} />
                      <span className="text-xs">View Project</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to see your project featured here?
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}