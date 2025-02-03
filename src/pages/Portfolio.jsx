import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, X, Clock, Eye, Heart, Share2, TrendingUp, 
  Code, Rocket, Film, Brush, Users, MessageSquare,
  BarChart, Globe, Terminal, Cpu, LineChartIcon, Layout,
  Menu, Star, Award, ArrowDown, ChevronRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import YouTubeThumbnail from '../components/YouTubeThumbnail';
import { portfolioItems } from '../data/portfolio';
import { smma } from '../data/smma';
import { techData } from '../data/techdata';

const portfolioData = {
  media: portfolioItems,
  tech: techData,
  smma: smma
};

// Service configuration
const serviceCategories = {
  media: {
    icon: Film,
    color: 'amber-500',
    categories: ['All', 'Video Editing', 'VFX', 'Motion Graphics', 'Animation']
  },
  tech: {
    icon: Code,
    color: 'blue-500',
    categories: ['All', 'Web Development', 'Mobile Apps', 'Software Solutions', 'Cloud Services']
  },
  smma: {
    icon: Globe,
    color: 'green-500',
    categories: ['All', 'Social Media', 'Digital Marketing', 'Content Strategy', 'Analytics']
  }
};

// Components

const StatsCard = ({ icon: Icon, title, value, trend, color = 'amber-500' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 backdrop-blur-lg border border-gray-700/50"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className={`p-2 sm:p-3 bg-gray-700/50 rounded-xl`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}`} />
        </div>
        <div>
          <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
          <h4 className="text-xl sm:text-2xl font-bold text-white">{value}</h4>
        </div>
      </div>
      <div className={`flex items-center space-x-1 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        <TrendingUp className={`w-3 h-3 sm:w-4 sm:h-4 ${trend < 0 && 'transform rotate-180'}`} />
        <span className="text-xs sm:text-sm font-medium">{Math.abs(trend)}%</span>
      </div>
    </div>
  </motion.div>
);

const ServiceHeader = ({ service, stats }) => {
  const ServiceIcon = serviceCategories[service].icon;
  const color = serviceCategories[service].color;
  
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-4">
        <ServiceIcon className={`w-8 h-8 text-${color}`} />
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          {service.charAt(0).toUpperCase() + service.slice(1)} Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} color={color} />
        ))}
      </div>
    </div>
  );
};

const MediaPortfolioItem = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
        <YouTubeThumbnail
          videoUrl={item.youtubeUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="bg-amber-500 rounded-full p-4"
              >
                <Play className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center space-x-4 mb-3">
            <span className="flex items-center space-x-2 text-amber-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{item.duration}</span>
            </span>
            <span className="flex items-center space-x-2 text-blue-500">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{item.views}</span>
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TechPortfolioItem = ({ item, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl cursor-pointer p-6"
    onClick={onClick}
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="p-3 bg-blue-500/10 rounded-xl">
        <Terminal className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
    </div>
    <p className="text-gray-400 mb-4">{item.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {item.technologies.map((tech, index) => (
        <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
          {tech}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3">
      {Object.entries(item.metrics).map(([key, value]) => (
        <div key={key} className="bg-gray-700/30 rounded-lg p-3">
          <p className="text-gray-400 text-xs mb-1">{key}</p>
          <p className="text-white font-bold">{value}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const SmmaPortfolioItem = ({ item, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl cursor-pointer p-6"
    onClick={onClick}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-green-500/10 rounded-xl">
          <BarChart className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.client}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-green-500">
        <TrendingUp className="w-4 h-4" />
        <span className="text-sm font-medium">{item.growth}%</span>
      </div>
    </div>
    <p className="text-gray-400 mb-4">{item.description}</p>
    <div className="grid grid-cols-2 gap-4">
      {item.metrics.map((metric, index) => (
        <div key={index} className="bg-gray-700/30 rounded-lg p-3">
          <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
          <p className="text-white font-bold">{metric.value}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, color }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-2 rounded-lg transition-all ${
          activeCategory === category
            ? `bg-${color} text-white`
            : 'bg-gray-800 text-gray-400 hover:text-white'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// Main Portfolio Component
export default function Portfolio() {
  const [activeService, setActiveService] = useState('media');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const filteredItems = useMemo(() => {
    const items = portfolioData[activeService].items;
    return activeCategory === 'All'
      ? items
      : items.filter(item => item.category === activeCategory);
  }, [activeService, activeCategory]);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

 
  
    const renderDialog = () => {
      if (!selectedItem) return null;
  
      const dialogContent = {
        media: (
          <div className="space-y-6">
            <iframe
              src={selectedItem.youtubeUrl}
              title={selectedItem.title}
              className="w-full aspect-video rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2 text-amber-500">
                <Clock className="w-4 h-4" />
                <span>{selectedItem.duration}</span>
              </span>
              <span className="flex items-center space-x-2 text-blue-500">
                <Eye className="w-4 h-4" />
                <span>{selectedItem.views} views</span>
              </span>
            </div>
          </div>
        ),
        tech: (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedItem.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Project Metrics</h4>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(selectedItem.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-700/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">{key}</p>
                    <p className="text-white font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
        smma: (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Client</p>
                  <h4 className="text-xl font-bold text-white">{selectedItem.client}</h4>
                </div>
                <div className="flex items-center space-x-2 text-green-500">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg font-bold">{selectedItem.growth}%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedItem.metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                    <p className="text-white font-bold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }[activeService];
  
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
          onClick={handleCloseDialog}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-4">{selectedItem.title}</h3>
            <p className="text-gray-400 mb-6">{selectedItem.description}</p>
            
            {dialogContent}
            
            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-800">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white"
              >
                <Heart className="w-4 h-4" />
                <span>Like</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      );
    };
  
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Portfolio</h1>
            <p className="text-gray-400">Explore our work across different domains</p>
          </div>
  
          {/* Service Navigation */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
            {Object.entries(serviceCategories).map(([service, data]) => (
              <motion.button
                key={service}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveService(service);
                  setActiveCategory('All');
                }}
                className={`px-6 py-3 rounded-xl flex items-center space-x-2 transition-all whitespace-nowrap ${
                  activeService === service
                    ? `bg-${data.color} text-white`
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <data.icon className="w-5 h-5" />
                <span className="font-medium">{service.toUpperCase()}</span>
              </motion.button>
            ))}
          </div>
  
          {/* Service Header with Stats */}
          <ServiceHeader
            service={activeService}
            stats={portfolioData[activeService].stats}
          />
  
          {/* Category Filter */}
          <CategoryFilter
            categories={serviceCategories[activeService].categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            color={serviceCategories[activeService].color}
          />
  
          {/* Portfolio Grid */}
          {renderPortfolioItems()}
  
          {/* Portfolio Dialog */}
          <AnimatePresence>
            {openDialog && selectedItem && renderDialog()}
          </AnimatePresence>
        </div>
      </div>
    );
  }