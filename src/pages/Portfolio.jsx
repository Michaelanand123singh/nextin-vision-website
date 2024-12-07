import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { categories, portfolioItems } from '../data/portfolio';

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
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Our Work"
            title="Featured Projects"
            description="Explore our collection of successful video projects."
            center
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => handleOpenDialog(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog Box */}
      {openDialog && selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={handleCloseDialog}
              aria-label="Close Dialog"
            >
              &times;
            </button>
            
            {/* Video Title */}
            <h3 className="text-xl font-semibold mb-4">{selectedItem.title}</h3>
            
            {/* Embedded YouTube Video */}
            <iframe
              src={selectedItem.youtubeUrl}
              title={selectedItem.title}
              className="w-full aspect-video rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Video Description */}
            <p className="text-sm mt-4">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
