import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Code, Film, Globe } from 'lucide-react';
import YouTubeThumbnail from '../components/YouTubeThumbnail';
import { portfolioItems } from '../data/portfolio';
import { smma } from '../data/smma';
import { techData } from '../data/techdata';

const portfolioData = {
  media: { items: portfolioItems, stats: [] },
  tech: { items: techData, stats: [] },
  smma: { items: smma, stats: [] }
};

const serviceCategories = {
  media: { icon: Film, color: 'amber-500', categories: ['All', 'Video Editing', 'VFX', 'Motion Graphics', 'Animation'] },
  tech: { icon: Code, color: 'blue-500', categories: ['All', 'Web Development', 'Mobile Apps', 'Software Solutions', 'Cloud Services'] },
  smma: { icon: Globe, color: 'green-500', categories: ['All', 'Social Media', 'Digital Marketing', 'Content Strategy', 'Analytics'] }
};

const Portfolio = () => {
  const [activeService, setActiveService] = useState('media');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    const items = portfolioData[activeService].items;
    return activeCategory === 'All' ? items : items.filter(item => item.category === activeCategory);
  }, [activeService, activeCategory]);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.entries(serviceCategories).map(([service, data]) => (
          <button key={service} onClick={() => setActiveService(service)} className={`px-4 py-2 rounded-lg ${activeService === service ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
            <data.icon className="w-5 h-5" />
            <span>{service.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {serviceCategories[activeService].categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>{category}</button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div key={index} layout className="group bg-gray-800 rounded-xl p-4 cursor-pointer" onClick={() => handleOpenDialog(item)}>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {openDialog && selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={handleCloseDialog}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative bg-gray-900 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleCloseDialog} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedItem.title}</h3>
              <p className="text-gray-400 mb-6">{selectedItem.description}</p>
              {activeService === "media" && <iframe src={selectedItem.youtubeUrl} title={selectedItem.title} className="w-full aspect-video rounded-xl" />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
