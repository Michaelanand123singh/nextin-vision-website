import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonials Section
const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      quote: "NEXTIN VISION felt like our own internal team. They understood our vision, delivered fast, and supported us even after launch.",
      author: "Liam Martinez",
      position: "Founder & CEO",
      company: "Lumera Tech",
      location: "Berlin, Germany",
      avatar: "LM",
      companyLogo: "🏢"
    },
    {
      quote: "They took our fragmented system and turned it into a smooth, all-in-one platform. We rely on them for everything tech.",
      author: "Ravi Patel",
      position: "Chief Operating Officer",
      company: "SwiftMove Logistics",
      location: "Dubai, UAE",
      avatar: "RP",
      companyLogo: "🚚"
    },
    {
      quote: "Outstanding technical expertise combined with genuine business understanding. They're not just developers, they're strategic partners.",
      author: "Sarah Kim",
      position: "Chief Technology Officer",
      company: "UrbanTrend Analytics",
      location: "San Francisco, USA",
      avatar: "SK",
      companyLogo: "📊"
    },
    {
      quote: "The team delivered a scalable solution that grew with our business. Their attention to detail and proactive communication made all the difference.",
      author: "Marcus Johnson",
      position: "VP of Engineering",
      company: "CloudSync Solutions",
      location: "Toronto, Canada",
      avatar: "MJ",
      companyLogo: "☁️"
    },
    {
      quote: "From concept to deployment, they exceeded every expectation. The platform they built has transformed how we operate.",
      author: "Elena Rodriguez",
      position: "Product Director",
      company: "InnovateLab",
      location: "Barcelona, Spain",
      avatar: "ER",
      companyLogo: "🔬"
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Partners Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Trusted by industry leaders worldwide</p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border ${
              canScrollLeft 
                ? 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-orange-500' 
                : 'bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border ${
              canScrollRight 
                ? 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-orange-500' 
                : 'bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-current mx-0.5" size={16} />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-300 italic mb-6 leading-relaxed text-center text-sm">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Client Information */}
                <div className="space-y-4">
                  {/* Client Details */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-orange-500 text-xs">{testimonial.position}</div>
                      <div className="text-gray-400 text-xs">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="flex items-center justify-center bg-gray-800 px-3 py-2 rounded-lg border border-gray-600">
                    <span className="text-lg mr-2">{testimonial.companyLogo}</span>
                    <div className="text-white font-medium text-xs text-center">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 space-x-1">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-600 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;