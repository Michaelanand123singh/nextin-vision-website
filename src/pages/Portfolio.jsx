import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Code, Film, Globe, ExternalLink } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { smma } from '../data/smma';
import { techData } from '../data/techdata';

// Add service type to each item in the original data
const mediaItems = portfolio?.items?.map(item => ({
  ...item,
  serviceType: 'media'
})) || [];

const techItems = techData?.items?.map(item => ({
  ...item,
  serviceType: 'tech'
})) || [];

const smmaItems = smma?.items?.map(item => ({
  ...item,
  serviceType: 'smma'
})) || [];

const portfolioData = {
  media: { 
    items: mediaItems, 
    stats: portfolio?.stats || [] 
  },
  tech: { 
    items: techItems, 
    stats: techData?.stats || [] 
  },
  smma: { 
    items: smmaItems, 
    stats: smma?.stats || [] 
  }
};

const serviceCategories = {
  media: { 
    icon: Film, 
    color: 'amber-500', 
    categories: ['All', 'Video Editing', 'VFX', 'Motion Graphics', 'Animation', 'CGIs'] 
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

const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const Portfolio = () => {
  const [activeService, setActiveService] = useState('media');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    try {
      // First filter by service type
      const serviceItems = portfolioData[activeService]?.items.filter(
        item => item.serviceType === activeService
      ) || [];

      // Then filter by category if not 'All'
      return activeCategory === 'All'
        ? serviceItems
        : serviceItems.filter(item => item.category === activeCategory);
    } catch (error) {
      console.error('Error filtering items:', error);
      return [];
    }
  }, [activeService, activeCategory]);

  const handleOpenDialog = (item) => {
    if (item) {
      setSelectedItem(item);
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const handleServiceChange = (service) => {
    if (serviceCategories[service]) {
      setActiveService(service);
      setActiveCategory('All');
    }
  };

  // Function to handle external link navigation
  const handleExternalLink = (e, url) => {
    e.stopPropagation(); // Prevent opening the modal
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_0%,transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,0,0.05)_0%,transparent_50%)]" />
      
      {/* Main Content */}
      <div className="relative pt-24 px-6 pb-6 max-w-7xl mx-auto">
        {/* Service Selection */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {Object.entries(serviceCategories).map(([service, data]) => (
            <button
              key={service}
              onClick={() => handleServiceChange(service)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                activeService === service 
                  ? 'bg-orange-500/90 text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700/90 hover:text-gray-200'
              }`}
            >
              <data.icon className="w-5 h-5" />
              <span>{service.toUpperCase()}</span>
            </button>
          ))}
        </motion.div>

        {/* Category Selection */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {serviceCategories[activeService].categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                activeCategory === category 
                  ? 'bg-orange-500/90 text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700/90 hover:text-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id || index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="group relative bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-gray-700/90 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
                onClick={() => handleOpenDialog(item)}
              >
                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden">
                  {activeService === 'media' && item.youtubeUrl ? (
                    <img 
                      src={`https://img.youtube.com/vi/${getYouTubeID(item.youtubeUrl)}/maxresdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : item.image ? (
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700/90 flex items-center justify-center">
                      {activeService === 'tech' ? (
                        <Code className="w-12 h-12 text-blue-500" />
                      ) : activeService === 'smma' ? (
                        <Globe className="w-12 h-12 text-green-500" />
                      ) : (
                        <Film className="w-12 h-12 text-gray-500" />
                      )}
                    </div>
                  )}
                  
                  {/* Play/View Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {activeService === 'tech' && item.url ? (
                        <button 
                          onClick={(e) => handleExternalLink(e, item.url)}
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
                        >
                          <span>View</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <Play className="w-12 h-12 text-white" />
                      )}
                    </motion.div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* View Button for Tech items with URL */}
                  {activeService === 'tech' && item.url && (
                    <div className="mt-4 flex justify-end">
                      <button 
                        onClick={(e) => handleExternalLink(e, item.url)}
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-8 backdrop-blur-sm bg-gray-800/50 rounded-xl">
              No items found for this category
            </div>
          )}
        </motion.div>

        {/* Modal Dialog */}
        <AnimatePresence>
          {openDialog && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCloseDialog}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseDialog}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-400 mb-6">{selectedItem.description}</p>
                
                {activeService === "media" && selectedItem.youtubeUrl && (
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={selectedItem.youtubeUrl}
                      title={selectedItem.title}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
                
                {activeService === "tech" && (
                  <div className="space-y-6">
                    {/* Software screenshot or preview */}
                    {selectedItem.image && (
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={selectedItem.image} 
                          alt={selectedItem.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedItem.technologies && (
                        <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="text-white font-semibold mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.technologies.map((tech, index) => (
                              <span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {selectedItem.metrics && (
                        <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="text-white font-semibold mb-2">Metrics</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(selectedItem.metrics).map(([key, value]) => (
                              <div key={key} className="text-gray-400">
                                <span className="text-sm capitalize">{key}: </span>
                                <span className="text-white">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* View Project Button */}
                    {selectedItem.url && (
                      <div className="mt-6 flex justify-center">
                        <a 
                          href={selectedItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
                        >
                          <span>Visit Project</span>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;