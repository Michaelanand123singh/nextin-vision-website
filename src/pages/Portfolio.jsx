import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowDown } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { categories, portfolioItems } from '../data/portfolio';

// YouTube Thumbnail Component
const YouTubeThumbnail = ({ videoUrl, alt, className }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  useEffect(() => {
    const extractVideoId = (url) => {
      const patterns = [
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
          return match[1];
        }
      }
      return null;
    };

    const videoId = extractVideoId(videoUrl);

    if (videoId) {
      const thumbnailOptions = [
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      ];

      const loadThumbnail = (urls) => {
        if (urls.length === 0) return;

        const img = new Image();
        img.onload = () => setThumbnailUrl(img.src);
        img.onerror = () => loadThumbnail(urls.slice(1));
        img.src = urls[0];
      };

      loadThumbnail(thumbnailOptions);
    }
  }, [videoUrl]);

  if (!thumbnailUrl) {
    return (
      <div className={`${className} bg-gray-800 animate-pulse relative flex items-center justify-center`}>
        <Play className="w-16 h-16 text-gray-600" />
      </div>
    );
  }

  return (
    <img
      src={thumbnailUrl}
      alt={alt}
      className={`${className} object-cover rounded-lg shadow-lg`}
    />
  );
};

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-30" />;
};

// Hero Component
const Hero = () => {
  const scrollToPortfolio = () => {
    document.querySelector('.portfolio-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
          <span className="text-amber-500">Creative</span> Video Production
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Transforming ideas into compelling visual stories that captivate, inspire, and drive meaningful connections.
        </p>

        <div className="flex justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-amber-700 transition-all"
          >
            View Our Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-gray-300 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Contact Us
          </motion.button>
        </div>

        <motion.button
          onClick={scrollToPortfolio}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="mt-10 flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowDown className="w-6 h-6 mr-2" />
          Scroll to Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      <div className="relative z-10  portfolio-section">
        <section className="section">
          <div className="container">
            <SectionTitle
              subtitle="Our Work"
              title="Featured Projects"
              description="Explore our collection of successful video projects."
              center
            />

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-lg bg-[#1e1e1e] shadow-xl cursor-pointer"
                  onClick={() => handleOpenDialog(item)}
                >
                  <div className="relative">
                    <YouTubeThumbnail
                      videoUrl={item.youtubeUrl}
                      alt={item.title}
                      className="w-full h-64 object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                        <Play className="mx-auto mb-4 text-amber-500 w-12 h-12" />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dialog Box */}
        <AnimatePresence>
          {openDialog && selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={handleCloseDialog}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-[#1e1e1e] rounded-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                  onClick={handleCloseDialog}
                  aria-label="Close Dialog"
                >
                  <X className="w-8 h-8" />
                </button>
                
                {/* Video Title */}
                <h3 className="text-2xl font-bold mb-4 text-amber-500">{selectedItem.title}</h3>
                
                {/* Embedded YouTube Video */}
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src={selectedItem.youtubeUrl}
                    title={selectedItem.title}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Description */}
                <p className="text-gray-300 mt-6 leading-relaxed">{selectedItem.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}