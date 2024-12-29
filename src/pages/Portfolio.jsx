import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import YouTubeThumbnail from '../components/YouTubeThumbnail';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Play, 
  X, 
  ArrowDown, 
  ChevronRight, 
  Star, 
  Award, 
  Clock, 
  Eye,
  Heart,
  Share2,
  TrendingUp,
  Camera,
  Film,
  Sparkles,
  Menu,
  Home,
  Settings,
  Users,
  MessageSquare,
  LogOut
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import SectionTitle from '../components/common/SectionTitle';
import { categories, portfolioItems } from '../data/portfolio';

// Stats Card Component
const StatsCard = ({ icon: Icon, title, value, trend }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 backdrop-blur-lg border border-gray-700/50"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="p-2 sm:p-3 bg-gray-700/50 rounded-xl">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
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

// Portfolio Grid Item Component
const PortfolioItem = ({ item, onClick }) => {
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
          {(isHovered || window.innerWidth <= 768) && (
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
                className="bg-amber-500 rounded-full p-3 sm:p-4"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-4 mb-2 sm:mb-3">
              <span className="flex items-center space-x-2 text-amber-500">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">3:24</span>
              </span>
              <span className="flex items-center space-x-2 text-blue-500">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">2.4K</span>
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{item.description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Mobile Sidebar Component
const MobileSidebar = ({ isOpen, onClose, activeCategory, setActiveCategory }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween' }}
        className="fixed inset-y-0 left-0 w-64 bg-gray-900 border-r border-gray-800 p-6 z-50 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Categories</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                onClose();
              }}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Desktop Sidebar Component
const DesktopSidebar = ({ activeCategory, setActiveCategory }) => (
  <div className="hidden lg:block fixed left-0 top-24 h-screen w-64 bg-gray-900 border-r border-gray-800 p-6 overflow-y-auto">
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-400 uppercase text-xs font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Main Portfolio Component
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const filteredItems = useMemo(() => 
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Desktop Sidebar */}
      <DesktopSidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen pt-20 sm:pt-24">
        <div className="p-4 sm:p-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Work</h1>
            <p className="text-gray-400 text-sm sm:text-base">We don't just deliver the project, we deliver within timeline.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <StatsCard icon={Eye} title="Total Views" value="2.4M" trend={12.5} />
            <StatsCard icon={Heart} title="Engagement Rate" value="8.9%" trend={-2.3} />
            <StatsCard icon={Film} title="Videos Created" value="142" trend={5.7} />
            <StatsCard icon={Share2} title="Client Satisfaction" value="98%" trend={1.8} />
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <PortfolioItem
                  key={item.title}
                  item={item}
                  onClick={() => handleOpenDialog(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Video Dialog */}
        <AnimatePresence>
          {openDialog && selectedItem && (
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
                className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 sm:p-8 w-full sm:w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white z-10 bg-gray-800/50 backdrop-blur-lg rounded-full p-2 transition-colors"
                  onClick={handleCloseDialog}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
                
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-2">{selectedItem.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      3:24
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      2.4K views
                    </span>
                    <span className="flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      4.9
                    </span>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-2xl mb-4 sm:mb-6 bg-gray-800/50 backdrop-blur-lg">
                  <iframe
                    src={selectedItem.youtubeUrl}
                    title={selectedItem.title}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{selectedItem.description}</p>
                  
                  <div className="flex items-center space-x-4 pt-4">
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-800/50 backdrop-blur-lg rounded-lg text-gray-300 hover:text-white transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-sm sm:text-base">Like</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-800/50 backdrop-blur-lg rounded-lg text-gray-300 hover:text-white transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm sm:text-base">Share</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMobileSidebarOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:hidden z-50 bg-amber-500 text-white p-3 sm:p-4 rounded-full shadow-lg"
      >
        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}