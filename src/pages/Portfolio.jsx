import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, X, Code, Globe, ExternalLink, Monitor, Smartphone, 
  Cloud, Database, Search, BarChart3, Target, TrendingUp,
  Palette, Settings, Award, Clock, Users, Star, Terminal,
  Cpu, User, LineChartIcon, DollarSign
} from 'lucide-react';

// Import data files
import { developmentData, developmentCategories, techData } from '../data/techdata';
import { marketingData, marketingCategories, digitalMarketingData } from '../data/digitalMarketingdata';

// Portfolio data structure
const portfolioData = {
  development: {
    items: developmentData,
    stats: techData.stats,
    categories: developmentCategories
  },
  marketing: {
    items: marketingData,
    stats: digitalMarketingData.stats,
    categories: marketingCategories
  }
};

const serviceCategories = {
  development: {
    icon: Code,
    color: 'orange-500',
    title: 'IT Development',
    categories: developmentCategories
  },
  marketing: {
    icon: Target,
    color: 'amber-500',
    title: 'Digital Marketing',
    categories: marketingCategories
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
      {/* Enhanced Animated Background Effects */}
      <div className="fixed inset-0">
        {/* Primary moving gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-orange-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-l from-amber-500/15 via-orange-400/20 to-yellow-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -120, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-tr from-orange-600/10 via-amber-400/15 to-orange-500/20 rounded-full blur-3xl"
        />
        
        {/* Secondary floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Animated Grid Background */}
      <motion.div 
        className="fixed inset-0 opacity-[0.02]"
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              x: [0, Math.sin(i) * 50],
              y: [0, Math.cos(i) * 30],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative pt-16 px-4 pb-8 max-w-6xl mx-auto">
        {/* Enhanced Header Section with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.h1 
            className="mt-12 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300/85 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover our expertise in cutting-edge solutions and results-driven strategies
          </motion.p>
        </motion.div>

        {/* Enhanced Service Selection with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {Object.entries(serviceCategories).map(([service, data], index) => (
            <motion.button
              key={service}
              onClick={() => handleServiceChange(service)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className={`group relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-500 backdrop-blur-xl border ${
                activeService === service
                  ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/15 text-white border-orange-500/40 shadow-lg shadow-orange-500/20'
                  : 'bg-gray-800/30 text-gray-300 border-gray-700/30 hover:bg-gray-700/40 hover:text-white hover:border-gray-600/50'
              }`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <data.icon className={`w-4 h-4 ${activeService === service ? 'text-orange-400' : 'text-gray-400 group-hover:text-gray-200'}`} />
              </motion.div>
              <span className="text-sm">{data.title}</span>
              {activeService === service && (
                <motion.div
                  layoutId="activeServiceIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  background: activeService === service 
                    ? ['linear-gradient(0deg, rgba(249,115,22,0.3), rgba(245,158,11,0.3))',
                       'linear-gradient(90deg, rgba(249,115,22,0.3), rgba(245,158,11,0.3))',
                       'linear-gradient(180deg, rgba(249,115,22,0.3), rgba(245,158,11,0.3))',
                       'linear-gradient(270deg, rgba(249,115,22,0.3), rgba(245,158,11,0.3))',
                       'linear-gradient(360deg, rgba(249,115,22,0.3), rgba(245,158,11,0.3))']
                    : 'transparent'
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ padding: '1px', zIndex: -1 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Stats Section with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {currentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
              }}
              className="group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl p-5 rounded-xl border border-gray-700/40 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.5 }}
              />
              
              <div className="flex items-center justify-between mb-3 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <stat.icon className="w-5 h-5 text-orange-400" />
                </motion.div>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-orange-400/60"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <motion.div 
                className="text-xl font-bold text-white mb-1 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent relative z-10"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-500 relative z-10">
                {stat.title || stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Category Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {serviceCategories[activeService].categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.05 * index,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(249, 115, 22, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-400 backdrop-blur-xl border overflow-hidden ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/15 text-white border-orange-500/40 shadow-md shadow-orange-500/20'
                  : 'bg-gray-800/40 text-gray-300 border-gray-700/40 hover:bg-gray-700/50 hover:text-white hover:border-gray-600/50'
              }`}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={activeCategory === category ? {
                  translateX: ['100%', '-100%']
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  onClick={() => handleOpenDialog(item)}
                  style={{ perspective: '1000px' }}
                >
                  {/* Enhanced Gradient Border Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        'linear-gradient(0deg, rgba(249,115,22,0.1), rgba(245,158,11,0.1))',
                        'linear-gradient(90deg, rgba(249,115,22,0.1), rgba(245,158,11,0.1))',
                        'linear-gradient(180deg, rgba(249,115,22,0.1), rgba(245,158,11,0.1))',
                        'linear-gradient(270deg, rgba(249,115,22,0.1), rgba(245,158,11,0.1))',
                        'linear-gradient(360deg, rgba(249,115,22,0.1), rgba(245,158,11,0.1))'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Enhanced Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Enhanced Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
                      initial={false}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 15,
                          delay: 0.1
                        }}
                        className="flex items-center gap-2"
                      >
                        {item.url ? (
                          <motion.button
                            onClick={(e) => handleExternalLink(e, item.url)}
                            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-400 shadow-xl text-sm backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Project</span>
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.div>
                          </motion.button>
                        ) : (
                          <motion.div 
                            className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 shadow-xl backdrop-blur-sm"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Play className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Enhanced Category Badge */}
                    <motion.div 
                      className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium backdrop-blur-sm border border-white/20"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.category}
                    </motion.div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative p-5">
                    <motion.h3 
                      className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-500 line-clamp-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-500 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Enhanced Technologies/Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(item.technologies || item.services || []).slice(0, 2).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/30 backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {(item.technologies || item.services || []).length > 2 && (
                        <motion.span 
                          className="px-3 py-1.5 text-xs rounded-lg bg-gray-700/50 text-gray-400 backdrop-blur-sm border border-gray-600/30"
                          whileHover={{ scale: 1.05, color: '#fff' }}
                        >
                          +{(item.technologies || item.services || []).length - 2}
                        </motion.span>
                      )}
                    </div>

                    {/* Enhanced Metrics Preview */}
                    {item.metrics && (
                      <motion.div 
                        className="flex justify-between items-center text-xs bg-gray-800/30 rounded-lg p-3 backdrop-blur-sm border border-gray-700/30"
                        whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          >
                            <Clock className="w-3 h-3 text-gray-400" />
                          </motion.div>
                          <span className="text-gray-400">{item.metrics.timeframe || 'Completed'}</span>
                        </div>
                        <motion.div 
                          className="text-orange-400 font-semibold"
                          animate={{
                            color: ['#fb923c', '#f59e0b', '#fb923c']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {Object.values(item.metrics)[0]}
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-full text-center py-16"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-10 border border-gray-700/50 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition: ['0px 0px', '100px 100px', '0px 0px'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, white 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Search className="w-10 h-10 text-gray-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    We couldn't find any projects in this category. Try selecting a different category or service.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Modal Dialog */}
        <AnimatePresence>
          {openDialog && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={handleCloseDialog}
            >
              {/* Animated background particles in modal */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 5 + Math.random() * 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 3
                    }}
                    className="absolute w-1 h-1 bg-gradient-to-r from-orange-400/50 to-amber-400/50 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-2xl rounded-3xl p-8 w-full max-w-4xl max-h-[85vh] overflow-y-auto border border-gray-700/50 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Enhanced close button */}
                <motion.button
                  onClick={handleCloseDialog}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-300 p-3 hover:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/30"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="mb-8">
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        backgroundSize: '200% 100%',
                      }}
                    >
                      {selectedItem.title}
                    </motion.h2>
                    <motion.span 
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium shadow-lg backdrop-blur-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {selectedItem.category}
                    </motion.span>
                  </motion.div>
                  {selectedItem.client && (
                    <motion.p 
                      className="text-gray-400 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Client: <span className="text-white font-medium">{selectedItem.client}</span>
                    </motion.p>
                  )}
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6 text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedItem.description}
                  </motion.p>

                 {/* Enhanced Project Image */}
{selectedItem.image && (
  <motion.div 
    className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-8 border border-gray-700/30"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <img
      src={selectedItem.image}
      alt={selectedItem.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    
    {/* Animated border */}
    <motion.div
      className="absolute inset-0 rounded-2xl"
      animate={{
        background: [
          'linear-gradient(0deg, rgba(249,115,22,0.2), transparent)',
          'linear-gradient(90deg, rgba(249,115,22,0.2), transparent)',
          'linear-gradient(180deg, rgba(249,115,22,0.2), transparent)',
          'linear-gradient(270deg, rgba(249,115,22,0.2), transparent)',
          'linear-gradient(360deg, rgba(249,115,22,0.2), transparent)'
        ]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
)}


                  {/* Enhanced Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Technologies/Services */}
                    {(selectedItem.technologies || selectedItem.services) && (
                      <motion.div 
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ 
                          borderColor: 'rgba(249, 115, 22, 0.3)',
                          boxShadow: '0 10px 30px rgba(249, 115, 22, 0.1)'
                        }}
                      >
                        {/* Subtle animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <h4 className="text-white font-bold mb-4 flex items-center gap-3 relative z-10">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          >
                            <Settings className="w-5 h-5 text-orange-400" />
                          </motion.div>
                          {activeService === 'development' ? 'Technologies' : 'Services'}
                        </h4>
                        <div className="flex flex-wrap gap-3 relative z-10">
                          {(selectedItem.technologies || selectedItem.services || []).map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/30 font-medium text-sm backdrop-blur-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Metrics */}
                    {selectedItem.metrics && (
                      <motion.div 
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ 
                          borderColor: 'rgba(249, 115, 22, 0.3)',
                          boxShadow: '0 10px 30px rgba(249, 115, 22, 0.1)'
                        }}
                      >
                        {/* Subtle animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <h4 className="text-white font-bold mb-4 flex items-center gap-3 relative z-10">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <BarChart3 className="w-5 h-5 text-orange-400" />
                          </motion.div>
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-1 gap-4 relative z-10">
                          {Object.entries(selectedItem.metrics).map(([key, value], index) => (
                            <motion.div 
                              key={key} 
                              className="flex justify-between items-center p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm border border-gray-700/30"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              whileHover={{ 
                                backgroundColor: 'rgba(55, 65, 81, 0.6)',
                                scale: 1.02
                              }}
                            >
                              <span className="text-gray-400 capitalize font-medium">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                              </span>
                              <motion.span 
                                className="text-orange-400 font-bold text-lg"
                                animate={{
                                  color: ['#fb923c', '#f59e0b', '#fb923c']
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: index * 0.5
                                }}
                              >
                                {value}
                              </motion.span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Enhanced Action Button */}
                  {selectedItem.url && (
                    <motion.div 
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <motion.a
                        href={selectedItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 px-8 rounded-2xl font-medium transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                          animate={{
                            translateX: ['100%', '-100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <span className="relative z-10 text-lg">View Live Project</span>
                        <motion.div
                          className="relative z-10"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.div>
                      </motion.a>
                    </motion.div>
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