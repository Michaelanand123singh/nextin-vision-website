import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Code, Film, Globe } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { smma } from '../data/smma';
import { techData } from '../data/techdata';

const portfolioData = {
  media: { items: portfolio?.items || [], stats: portfolio?.stats || [] },
  tech: { items: techData?.items || [], stats: techData?.stats || [] },
  smma: { items: smma?.items || [], stats: smma?.stats || [] }
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
      const items = portfolioData[activeService]?.items || [];
      if (!Array.isArray(items)) {
        console.error('Items is not an array for service:', activeService);
        return [];
      }
      return activeCategory === 'All' 
        ? items 
        : items.filter(item => item.category === activeCategory);
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

  return (
    <div className="pt-24 px-6 pb-6 max-w-7xl mx-auto">
      {/* Service Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.entries(serviceCategories).map(([service, data]) => (
          <button
            key={service}
            onClick={() => handleServiceChange(service)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeService === service 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <data.icon className="w-5 h-5" />
            <span>{service.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {serviceCategories[activeService].categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeCategory === category 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

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
              className="group bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:bg-gray-700 transition-colors duration-200"
              onClick={() => handleOpenDialog(item)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden">
                {item.youtubeUrl ? (
                  <img 
                    src={`https://img.youtube.com/vi/${getYouTubeID(item.youtubeUrl)}/maxresdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : item.image ? (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <Film className="w-12 h-12 text-gray-500" />
                  </div>
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-8">
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleCloseDialog}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-gray-900 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800"
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
                <div className="relative aspect-video w-full">
                  <iframe
                    src={selectedItem.youtubeUrl}
                    title={selectedItem.title}
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>
              )}
              {activeService === "tech" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedItem.technologies && (
                    <div className="bg-gray-800 p-4 rounded-lg">
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
                    <div className="bg-gray-800 p-4 rounded-lg">
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;