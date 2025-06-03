import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  Image, 
  FileText, 
  Music, 
  Video, 
  Code, 
  BarChart3, 
  Shield,
  ExternalLink,
  Star,
  ArrowRight,
  Sparkles,
  Cpu,
  Network,
  Database
} from 'lucide-react';

const AIToolsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTool, setHoveredTool] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = [
    { id: 'all', name: 'All Tools', icon: <Bot /> },
    { id: 'nlp', name: 'NLP & Chat', icon: <MessageSquare /> },
    { id: 'vision', name: 'Vision', icon: <Eye /> },
    { id: 'content', name: 'Content', icon: <FileText /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 /> }
  ];

  const aiTools = [
    {
      id: 1,
      name: "ChatBot Assistant",
      description: "Advanced conversational AI with natural language understanding.",
      category: "nlp",
      status: "live",
      features: ["NLP", "Multi-language", "Context Aware", "24/7"],
      icon: <MessageSquare className="w-4 h-4" />,
      gradient: "from-blue-500 to-purple-600",
      rating: 4.8,
      users: "10K+"
    },
    {
      id: 2,
      name: "Vision Analyzer",
      description: "Image recognition and analysis with real-time detection.",
      category: "vision",
      status: "live",
      features: ["Object Detection", "Face Recognition", "Scene Analysis", "OCR"],
      icon: <Eye className="w-4 h-4" />,
      gradient: "from-green-500 to-teal-600",
      rating: 4.9,
      users: "5K+"
    },
    {
      id: 3,
      name: "Content Generator",
      description: "AI-powered content creation for blogs and social media.",
      category: "content",
      status: "live",
      features: ["Blog Writing", "Social Posts", "Ad Copy", "SEO"],
      icon: <FileText className="w-4 h-4" />,
      gradient: "from-orange-500 to-red-600",
      rating: 4.7,
      users: "15K+"
    },
    {
      id: 4,
      name: "Analytics AI",
      description: "Intelligent data analysis with predictive capabilities.",
      category: "analytics",
      status: "beta",
      features: ["Predictions", "Visualization", "Trends", "Reports"],
      icon: <BarChart3 className="w-4 h-4" />,
      gradient: "from-purple-500 to-pink-600",
      rating: 4.6,
      users: "3K+"
    },
    {
      id: 5,
      name: "Code Assistant",
      description: "Smart coding companion with generation and debugging.",
      category: "nlp",
      status: "live",
      features: ["Code Gen", "Bug Detection", "Optimization", "Multi-lang"],
      icon: <Code className="w-4 h-4" />,
      gradient: "from-indigo-500 to-blue-600",
      rating: 4.9,
      users: "8K+"
    },
    {
      id: 6,
      name: "Media Creator",
      description: "Generate images, videos, and audio with creative AI.",
      category: "content",
      status: "coming-soon",
      features: ["Image Gen", "Video Edit", "Audio Synthesis", "Style Transfer"],
      icon: <Image className="w-4 h-4" />,
      gradient: "from-pink-500 to-rose-600",
      rating: 4.5,
      users: "Soon"
    }
  ];

  const filteredTools = activeCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  const getStatusColor = (status) => {
    switch(status) {
      case 'live': return 'bg-green-500';
      case 'beta': return 'bg-yellow-500';
      case 'coming-soon': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'live': return 'Live';
      case 'beta': return 'Beta';
      case 'coming-soon': return 'Soon';
      default: return 'Unknown';
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black to-orange-800/5"></div>
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/5 blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 30}px`,
            top: `${mousePosition.y / 30}px`,
          }}
        ></div>
        
        {/* Minimal Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Brain, Cpu, Network].map((Icon, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${20 + i * 30}%`,
                top: `${15 + (i % 2) * 40}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: '6s'
              }}
            >
              <Icon className="text-orange-500/10 w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Compact Header */}
        <div className="container mt-20 mx-auto px-6 pt-12 pb-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-300 to-orange-500">
                  AI TOOLS
                </h1>
                <div className="flex items-center justify-center mt-1">
                  <Sparkles className="text-orange-400 w-3 h-3 mr-1" />
                  <span className="text-orange-400 font-mono text-xs">NEXTIN VISION</span>
                  <Sparkles className="text-orange-400 w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
              Precision-crafted AI tools powered by advanced machine learning algorithms.
            </p>

            {/* Compact Stats */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { number: "6+", label: "Tools" },
                { number: "40K+", label: "Users" },
                { number: "99.9%", label: "Uptime" },
                { number: "4.8", label: "Rating" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 bg-gray-900/30 backdrop-blur-md rounded-lg border border-orange-900/20">
                  <div className="text-lg font-bold text-orange-400 mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {React.cloneElement(category.icon, { className: "w-3 h-3" })}
                <span className="ml-1 font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Compact AI Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="group relative bg-gray-900/40 backdrop-blur-md rounded-xl p-4 border border-orange-900/20 hover:border-orange-500/30 transition-all duration-300 hover:scale-102 cursor-pointer"
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Compact Status Badge */}
                <div className="absolute -top-1 -right-1">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(tool.status)}`}>
                    {getStatusText(tool.status)}
                  </div>
                </div>

                {/* Compact Tool Header */}
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${tool.gradient} mr-3`}>
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1">{tool.name}</h3>
                    <div className="flex items-center text-xs text-gray-400">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="mr-2">{tool.rating}</span>
                      <span>{tool.users}</span>
                    </div>
                  </div>
                </div>

                {/* Compact Description */}
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {tool.description}
                </p>

                {/* Compact Features */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-orange-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    className={`flex-1 flex items-center justify-center py-2 px-3 rounded-lg bg-gradient-to-r ${tool.gradient} text-white text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      tool.status === 'coming-soon' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={tool.status === 'coming-soon'}
                  >
                    {tool.status === 'coming-soon' ? 'Soon' : 'Try'}
                    {tool.status !== 'coming-soon' && <ArrowRight className="w-3 h-3 ml-1" />}
                  </button>
                  <button className="p-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300">
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Subtle Hover Effect */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
                  hoveredTool === tool.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tool.gradient} opacity-5`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Call to Action */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-orange-900/10 to-orange-800/10 rounded-xl border border-orange-500/20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2">Transform Your Workflow</h2>
            <p className="text-gray-300 text-sm mb-4 max-w-xl mx-auto">
              Join thousands leveraging our AI tools for enhanced productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                Get Started
              </button>
              <button className="px-6 py-2 border border-orange-500 text-orange-400 text-sm font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;