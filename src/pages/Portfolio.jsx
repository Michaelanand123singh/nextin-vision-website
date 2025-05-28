import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, X, Code, Globe, ExternalLink, Monitor, Smartphone, 
  Cloud, Database, Search, BarChart3, Target, TrendingUp,
  Palette, Settings, Award, Clock, Users, Star
} from 'lucide-react';

// Mock data - replace with your actual data imports
const portfolioData = {
  development: {
    items: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration and admin dashboard",
        category: "Web Development",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        url: "https://example.com",
        metrics: { users: "10K+", uptime: "99.9%", performance: "A+" },
        duration: "3 months",
        client: "RetailCorp"
      },
      {
        id: 2,
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication",
        category: "Mobile Development",
        technologies: ["React Native", "Firebase", "Node.js"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        url: "https://example.com",
        metrics: { downloads: "50K+", rating: "4.8/5", transactions: "1M+" },
        duration: "6 months",
        client: "FinanceBank"
      },
      {
        id: 3,
        title: "Cloud Infrastructure",
        description: "Scalable cloud infrastructure setup with automated deployment pipelines",
        category: "Cloud Solutions",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        metrics: { servers: "100+", cost_savings: "40%", deployment_time: "80% faster" },
        duration: "4 months",
        client: "TechStartup"
      }
    ],
    stats: [
      { label: "Projects Completed", value: "150+", icon: Award },
      { label: "Happy Clients", value: "98%", icon: Users },
      { label: "Code Quality", value: "A+", icon: Star },
      { label: "Support Response", value: "< 2hrs", icon: Clock }
    ]
  },
  marketing: {
    items: [
      {
        id: 4,
        title: "SaaS Growth Campaign",
        description: "Complete digital marketing strategy that increased MRR by 300%",
        category: "Growth Marketing",
        platforms: ["Google Ads", "Facebook", "LinkedIn", "Content Marketing"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        metrics: { mrr_growth: "300%", cac_reduction: "45%", roas: "4.2x" },
        duration: "8 months",
        client: "SaaS Startup"
      },
      {
        id: 5,
        title: "E-commerce SEO Strategy",
        description: "SEO optimization that drove 500% increase in organic traffic",
        category: "SEO & Content",
        platforms: ["Google Search", "Content Strategy", "Technical SEO"],
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
        metrics: { traffic_growth: "500%", keyword_rankings: "Top 3", conversion_rate: "12%" },
        duration: "6 months",
        client: "Online Store"
      },
      {
        id: 6,
        title: "Social Media Management",
        description: "Full social media strategy and management for B2B tech company",
        category: "Social Media",
        platforms: ["LinkedIn", "Twitter", "Instagram", "YouTube"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        metrics: { followers_growth: "250%", engagement_rate: "8.5%", leads_generated: "400+" },
        duration: "12 months",
        client: "Tech Agency"
      }
    ],
    stats: [
      { label: "Campaigns Launched", value: "200+", icon: Target },
      { label: "Average ROAS", value: "3.8x", icon: TrendingUp },
      { label: "Client Retention", value: "95%", icon: Users },
      { label: "Traffic Generated", value: "10M+", icon: BarChart3 }
    ]
  }
};

const serviceCategories = {
  development: {
    icon: Code,
    color: 'blue-500',
    title: 'IT Development',
    categories: ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'Enterprise Software']
  },
  marketing: {
    icon: Target,
    color: 'green-500',
    title: 'Digital Marketing',
    categories: ['All', 'Growth Marketing', 'SEO & Content', 'Social Media', 'Paid Advertising']
  }
};

const Portfolio = () => {
  const [activeService, setActiveService] = useState('development');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    const serviceItems = portfolioData[activeService]?.items || [];
    return activeCategory === 'All'
      ? serviceItems
      : serviceItems.filter(item => item.category === activeCategory);
  }, [activeService, activeCategory]);

  const currentStats = portfolioData[activeService]?.stats || [];

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
    setActiveCategory('All');
  };

  const handleExternalLink = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative pt-24 px-6 pb-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="mt-20 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our expertise in cutting-edge IT development and results-driven digital marketing solutions
          </p>
        </motion.div>

        {/* Service Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {Object.entries(serviceCategories).map(([service, data]) => (
            <motion.button
              key={service}
              onClick={() => handleServiceChange(service)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-md ${
                activeService === service
                  ? `bg-gradient-to-r from-${data.color}/20 to-${data.color}/10 text-white border-2 border-${data.color}/50 shadow-lg shadow-${data.color}/20`
                  : 'bg-gray-800/60 text-gray-300 border-2 border-gray-700/50 hover:bg-gray-700/60 hover:text-white hover:border-gray-600/50'
              }`}
            >
              <data.icon className={`w-6 h-6 ${activeService === service ? `text-${data.color}` : 'text-gray-400 group-hover:text-gray-200'}`} />
              <span>{data.title}</span>
              {activeService === service && (
                <motion.div
                  layoutId="activeServiceIndicator"
                  className={`absolute inset-0 bg-gradient-to-r from-${data.color}/10 to-transparent rounded-2xl -z-10`}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {currentStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-8 h-8 text-${serviceCategories[activeService].color} group-hover:scale-110 transition-transform duration-300`} />
                <div className={`w-2 h-2 rounded-full bg-${serviceCategories[activeService].color} opacity-60`} />
              </div>
              <div className={`text-3xl font-bold text-white mb-1 bg-gradient-to-r from-${serviceCategories[activeService].color} to-purple-400 bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {serviceCategories[activeService].categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                activeCategory === category
                  ? `bg-gradient-to-r from-${serviceCategories[activeService].color}/20 to-${serviceCategories[activeService].color}/10 text-white border border-${serviceCategories[activeService].color}/50 shadow-md`
                  : 'bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60 hover:text-white hover:border-gray-600/50'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className={`absolute inset-0 bg-gradient-to-r from-${serviceCategories[activeService].color}/5 to-transparent rounded-xl -z-10`}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-3xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl"
                  onClick={() => handleOpenDialog(item)}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${serviceCategories[activeService].color}/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center gap-3"
                      >
                        {item.url ? (
                          <button
                            onClick={(e) => handleExternalLink(e, item.url)}
                            className={`flex items-center gap-2 bg-gradient-to-r from-${serviceCategories[activeService].color} to-purple-500 hover:from-${serviceCategories[activeService].color}/80 hover:to-purple-500/80 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg`}
                          >
                            <span>View Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        ) : (
                          <div className={`p-4 rounded-full bg-gradient-to-r from-${serviceCategories[activeService].color} to-purple-500 shadow-lg`}>
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-${serviceCategories[activeService].color} to-purple-500 text-white text-sm font-semibold backdrop-blur-sm`}>
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Technologies/Platforms */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(item.technologies || item.platforms || []).slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r from-${serviceCategories[activeService].color}/20 to-purple-500/20 text-${serviceCategories[activeService].color} border border-${serviceCategories[activeService].color}/30`}
                        >
                          {tech}
                        </span>
                      ))}
                      {(item.technologies || item.platforms || []).length > 3 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-400">
                          +{(item.technologies || item.platforms || []).length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Metrics Preview */}
                    {item.metrics && (
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{item.duration}</span>
                        </div>
                        <div className={`text-${serviceCategories[activeService].color} font-semibold`}>
                          {Object.values(item.metrics)[0]}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-3xl p-12 border border-gray-700/50">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    We couldn't find any projects in this category. Try selecting a different category or service.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modal Dialog */}
        <AnimatePresence>
          {openDialog && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCloseDialog}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-3xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseDialog}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                      {selectedItem.title}
                    </h2>
                    <span className={`px-4 py-2 rounded-full bg-gradient-to-r from-${serviceCategories[activeService].color} to-purple-500 text-white text-sm font-semibold`}>
                      {selectedItem.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Project Image */}
                  {selectedItem.image && (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Technologies/Platforms */}
                    {(selectedItem.technologies || selectedItem.platforms) && (
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                          <Settings className={`w-5 h-5 text-${serviceCategories[activeService].color}`} />
                          {activeService === 'development' ? 'Technologies' : 'Platforms'}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {(selectedItem.technologies || selectedItem.platforms || []).map((tech, index) => (
                            <span
                              key={index}
                              className={`px-4 py-2 rounded-lg bg-gradient-to-r from-${serviceCategories[activeService].color}/20 to-purple-500/20 text-${serviceCategories[activeService].color} border border-${serviceCategories[activeService].color}/30 font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Metrics */}
                    {selectedItem.metrics && (
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                          <BarChart3 className={`w-5 h-5 text-${serviceCategories[activeService].color}`} />
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          {Object.entries(selectedItem.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center p-3 bg-gray-800/40 rounded-lg">
                              <span className="text-gray-400 capitalize font-medium">
                                {key.replace(/_/g, ' ')}
                              </span>
                              <span className={`text-${serviceCategories[activeService].color} font-bold text-lg`}>
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Meta Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {selectedItem.duration && (
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl border border-gray-700/50">
                        <Clock className={`w-6 h-6 text-${serviceCategories[activeService].color}`} />
                        <div>
                          <div className="text-gray-400 text-sm">Duration</div>
                          <div className="text-white font-semibold">{selectedItem.duration}</div>
                        </div>
                      </div>
                    )}
                    {selectedItem.client && (
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl border border-gray-700/50">
                        <Users className={`w-6 h-6 text-${serviceCategories[activeService].color}`} />
                        <div>
                          <div className="text-gray-400 text-sm">Client</div>
                          <div className="text-white font-semibold">{selectedItem.client}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  {selectedItem.url && (
                    <div className="mt-8 flex justify-center">
                      <a
                        href={selectedItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-3 bg-gradient-to-r from-${serviceCategories[activeService].color} to-purple-500 hover:from-${serviceCategories[activeService].color}/80 hover:to-purple-500/80 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
                      >
                        <span>View Live Project</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;