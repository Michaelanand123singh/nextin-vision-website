import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Clock, Code, TrendingUp, Globe } from 'lucide-react';

// Featured Projects Section
const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Lumera Finance",
      location: "Germany",
      solution: "Agentic AI for customer support",
      results: ["67% faster response time", "Saved 60+ hours/month", "24/7 multilingual support"],
      tech: "AI + Intercom + Custom Backend",
      duration: "Ongoing collaboration since 2023",
      category: "AI Solutions",
      flag: "🇩🇪",
      gradient: "from-orange-500 to-amber-500",
      glowColor: "orange-500/25"
    },
    {
      title: "SwiftMove Logistics",
      location: "UAE",
      solution: "Custom CRM + HR Software",
      results: ["35% boost in internal ops efficiency", "Streamlined hiring process", "Real-time analytics dashboard"],
      tech: "React + Node.js + PostgreSQL",
      duration: "8-month delivery + retained support plan",
      category: "Enterprise Software",
      flag: "🇦🇪",
      gradient: "from-amber-500 to-orange-600",
      glowColor: "amber-500/25"
    },
    {
      title: "UrbanTrend E-commerce",
      location: "USA",
      solution: "Online store with AI-driven recommendations",
      results: ["22% increase in conversions", "Real-time stock sync", "Personalized shopping experience"],
      tech: "Next.js + AI/ML + Stripe",
      duration: "Partnership Since 2022",
      category: "E-commerce Platform",
      flag: "🇺🇸",
      gradient: "from-orange-600 to-red-500",
      glowColor: "orange-600/25"
    }
  ];

  return (
    <section 
      id="projects-section"
      className="relative py-16 lg:py-20 bg-gradient-to-br from-black via-slate-950 to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary glow effects */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-gradient-to-l from-amber-400/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-orange-600/5 to-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-32 w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-2/3 right-40 w-1 h-1 bg-amber-400/40 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-orange-500/35 rounded-full animate-ping delay-1800"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-6xl z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-orange-300/90 text-xs font-medium tracking-wide">SUCCESS STORIES</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-white mb-2">Work That Speaks</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
              for Itself
            </span>
          </h2>
          
          <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg lg:text-xl text-gray-300/90 leading-relaxed font-light mb-3">
              Here's a look at what we've built—with companies who trust us for the long term.
            </p>
            <p className="text-base text-gray-400/80 leading-relaxed font-light">
              Real partnerships. Real results. Real impact on business growth.
            </p>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${project.glowColor} to-${project.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105`}></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 lg:p-7 hover:border-orange-400/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/12 min-h-[400px] flex flex-col">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{project.flag}</span>
                      <div className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white/90`}>
                        {project.category}
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-orange-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-orange-400/80 font-medium flex items-center gap-1.5 text-sm">
                      <Globe size={14} />
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="text-orange-500" size={16} />
                    <span className="text-orange-400 font-semibold text-base">Solution</span>
                  </div>
                  <p className="text-gray-300/90 text-base leading-relaxed pl-5">
                    {project.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-4 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400 font-semibold text-base">Results</span>
                  </div>
                  <ul className="space-y-2 pl-5">
                    {project.results.map((result, i) => (
                      <li key={i} className="text-gray-300/90 flex items-start gap-2 text-sm">
                        <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                    <span className="text-orange-400 font-semibold text-sm">Tech Stack</span>
                  </div>
                  <p className="text-gray-300/80 pl-5 font-mono text-xs bg-gray-800/50 rounded-lg px-2.5 py-1.5 border border-gray-700/50">
                    {project.tech}
                  </p>
                </div>

                {/* Duration */}
                <div className="mt-auto pt-3 border-t border-gray-800/50">
                  <div className="flex items-center gap-1.5 text-gray-400/80">
                    <Clock size={14} />
                    <span className="text-xs font-medium">{project.duration}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-xl mx-auto mb-8">
            <p className="text-base text-gray-400/80 mb-6 leading-relaxed">
              Ready to become our next success story? Let's discuss how we can transform your business with cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-orange-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 relative z-10" size={18} />
            </button>
            
            <button className="group text-orange-400 hover:text-orange-300 font-semibold text-base flex items-center transition-all duration-300 hover:gap-3 gap-2">
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
          </div>
        </div>

        {/* Decorative accent line */}
        <div className={`mt-12 lg:mt-16 flex justify-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md shadow-orange-500/20"></div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;