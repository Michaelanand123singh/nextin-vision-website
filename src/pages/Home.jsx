import React from 'react';

// Import AI-focused component sections
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import QuickIntro from '../components/home/QuickIntro';
import ServiceSection from '../components/home/ServiceSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950 text-white relative overflow-hidden">
      {/* Single Background Effects for entire page */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-400/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      {/* Hero Section - AI-powered automation focus */}
      <HeroSection />
      
      {/* About Section - AI transformation process */}
      <AboutSection />
      
      {/* Quick Intro - AI capabilities overview */}
      <QuickIntro />
      
      {/* Services Section - AI agents and automation */}
      <ServiceSection />
      
      {/* Why Choose Section - AI advantages */}
      <WhyChooseSection />
      
      {/* Testimonials Section - Client success stories */}
      <TestimonialsSection />
      
      {/* Final CTA - Start AI project */}
      <FinalCTA />
    </div>
  );
};

export default Home;