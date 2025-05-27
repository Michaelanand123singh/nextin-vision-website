import React, { useState } from 'react';
import { Rocket, Building, Globe, Heart, Users } from 'lucide-react';

// Who We Work With Section
const WhoWeWorkWith = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const clients = [
    { 
      icon: Rocket, 
      title: "Startup Founders", 
      color: "from-orange-500 to-red-500",
      description: "MVP development, rapid prototyping, and scalable architecture for early-stage startups",
      link: "/startups"
    },
    { 
      icon: Building, 
      title: "Growth-Stage Businesses", 
      color: "from-orange-500 to-yellow-500",
      description: "Platform optimization, team augmentation, and infrastructure scaling solutions",
      link: "/growth-stage"
    },
    { 
      icon: Globe, 
      title: "Enterprises Going Digital", 
      color: "from-orange-500 to-pink-500",
      description: "Digital transformation, legacy system modernization, and enterprise integration",
      link: "/enterprises"
    },
    { 
      icon: Heart, 
      title: "NGOs & Government Teams", 
      color: "from-orange-500 to-purple-500",
      description: "Mission-driven solutions, accessibility compliance, and public sector technology",
      link: "/public-sector"
    },
    { 
      icon: Users, 
      title: "International Clients", 
      color: "from-orange-500 to-blue-500",
      description: "Cross-timezone collaboration, multi-language platforms, and global deployment",
      link: "/international"
    }
  ];

  const handleClientClick = (link) => {
    // In a real application, this would navigate to the specific page
    console.log(`Navigating to: ${link}`);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Visionaries Who{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Build Boldly
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer relative"
              onMouseEnter={() => setHoveredClient(index)}
              onMouseLeave={() => setHoveredClient(null)}
              onClick={() => handleClientClick(client.link)}
            >
              <div className={`bg-gradient-to-r ${client.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                <client.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors duration-300">
                {client.title}
              </h3>
              
              {/* Tooltip */}
              {hoveredClient === index && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-800 border border-gray-700 rounded-lg p-4 w-64 z-10 shadow-2xl animate-in fade-in duration-200">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-l border-t border-gray-700 rotate-45"></div>
                  <h4 className="text-orange-400 font-semibold mb-2 text-sm">{client.title}</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{client.description}</p>
                  <div className="mt-3 pt-2 border-t border-gray-700">
                    <span className="text-orange-400 text-xs font-medium hover:text-orange-300 transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
          No matter your stage, we align with your mission and become an extension of your team.
        </p>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;