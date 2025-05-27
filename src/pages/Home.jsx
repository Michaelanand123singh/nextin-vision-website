import React from 'react';

// Import all component sections
import HeroSection from '../components/home/HeroSection';
import QuickIntro from '../components/home/QuickIntro';
import ServiceSection from '../components/home/ServiceSection';
import PhilosophySection from '../components/home/PhilosophySection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChooseSection from '../components/home/WhyChooseSection';
import WhoWeWorkWith from '../components/home/WhoWeWorkWith';
import ProjectSection from '../components/home/ProjectSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTA from '../components/home/FinalCTA';
import PartnerSection from '../components/home/PartnerSection';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Main landing area */}
      <HeroSection />
      
      {/* About Section - Company introduction */}
      <AboutSection />
      
      {/* Quick Intro - Brief overview */}
      <QuickIntro />
      
      {/* Services Section - What we offer */}
      <ServiceSection />
      
      {/* Philosophy Section - Our approach */}
      <PhilosophySection />
      
      {/* Featured Projects - Case studies and work examples */}
      <FeaturedProjects />
      
      {/* Project Section - Additional project showcase */}
      <ProjectSection />
      
      {/* Why Choose Section - Our advantages */}
      <WhyChooseSection />
      
      {/* Partner Section - Partnership approach */}
      <PartnerSection />
      
      {/* Who We Work With - Target clients */}
      <WhoWeWorkWith />
      
      {/* Testimonials Section - Client feedback */}
      <TestimonialsSection />
      
      {/* Final CTA - Contact and next steps */}
      <FinalCTA />
    </div>
  );
};

export default Home;