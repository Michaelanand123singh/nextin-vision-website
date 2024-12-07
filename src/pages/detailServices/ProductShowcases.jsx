import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Video, Box, Lightbulb, Scale, Users, BookOpen, Zap, Laptop, BookOpenCheck, ChevronRight, Star, ArrowRight } from 'lucide-react';

const ProductShowcases = () => {
  const [activeTab, setActiveTab] = useState('all');

  const showcaseTypes = [
    {
      id: 'demonstration',
      title: "Demonstration Videos",
      subTitle: "Product in Action",
      description: "Watch our product perform, revealing innovative features and practical applications through detailed, real-world demonstrations.",
      icon: <Video className="w-6 h-6" />,
      category: 'demo'
    },
    {
      id: 'unboxing',
      title: "Unboxing Experiences",
      subTitle: "First Look Excitement",
      description: "Experience the thrill of unveiling our product, exploring its contents, packaging, and initial impressions in an engaging unboxing journey.",
      icon: <Box className="w-6 h-6" />,
      category: 'experience'
    },
    {
      id: 'explainer',
      title: "Explainer Videos",
      subTitle: "Understanding Our Innovation",
      description: "Deep dive into the intricate workings of our product, revealing unique benefits and distinguishing features that set us apart from competitors.",
      icon: <Lightbulb className="w-6 h-6" />,
      category: 'educational'
    },
    {
      id: 'comparative',
      title: "Comparative Showcase",
      subTitle: "Why We Stand Out",
      description: "A comprehensive side-by-side comparison demonstrating how our product surpasses alternatives, empowering customers to make informed choices.",
      icon: <Scale className="w-6 h-6" />,
      category: 'analysis'
    },
    {
      id: 'experience',
      title: "User Experience Spotlight",
      subTitle: "Real Stories, Real Impact",
      description: "Authentic testimonials and experiences from actual users, providing genuine insights into the product's real-world performance and value.",
      icon: <Users className="w-6 h-6" />,
      category: 'experience'
    },
    {
      id: 'journey',
      title: "Narrative Product Journey",
      subTitle: "Beyond Features, A Solution Story",
      description: "An immersive narrative exploring how our product solves real-life challenges, transforming everyday experiences through innovative design.",
      icon: <BookOpen className="w-6 h-6" />,
      category: 'storytelling'
    },
    {
      id: 'highlight',
      title: "Highlight Reel",
      subTitle: "Quick Wins, Maximum Impact",
      description: "A fast-paced, visually stunning overview capturing the most compelling features and benefits in a concise, social media-friendly format.",
      icon: <Zap className="w-6 h-6" />,
      category: 'social'
    },
    {
      id: 'lifestyle',
      title: "Lifestyle Integration",
      subTitle: "Seamless Living, Exceptional Design",
      description: "See how our product naturally integrates into daily life, enhancing routines and solving problems with effortless sophistication.",
      icon: <Laptop className="w-6 h-6" />,
      category: 'lifestyle'
    },
    {
      id: 'tutorials',
      title: "Comprehensive Tutorials",
      subTitle: "Master Your Product",
      description: "Step-by-step guidance revealing expert tips, tricks, and techniques to maximize product performance and user satisfaction.",
      icon: <BookOpenCheck className="w-6 h-6" />,
      category: 'educational'
    }
  ];

  const benefits = [
    {
      title: "Professional Quality",
      description: "Cinema-grade equipment and expert production team",
      stat: "4K+"
    },
    {
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality",
      stat: "48hrs"
    },
    {
      title: "Client Satisfaction",
      description: "Consistently exceeding expectations",
      stat: "99%"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'demo', name: 'Demonstrations' },
    { id: 'experience', name: 'Experiences' },
    { id: 'educational', name: 'Educational' },
    { id: 'social', name: 'Social Media' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Showcase Your Products
              <span className="text-blue-400"> Like Never Before</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Transform your products into compelling visual stories that captivate and convert
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Start Your Project
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-2">{benefit.stat}</h3>
              <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Showcase Types Filter */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Showcase Services</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseTypes
            .filter(item => activeTab === 'all' || item.category === activeTab)
            .map((showcase, index) => (
              <motion.div
                key={showcase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    {showcase.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{showcase.title}</h3>
                    <p className="text-blue-400">{showcase.subTitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{showcase.description}</p>
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Create Your Showcase</h2>
            <p className="text-gray-300">A streamlined process for exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Concept', 'Script', 'Production', 'Delivery'].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-gray-800 rounded-xl p-6 text-center relative z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step}</h3>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-blue-600 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Showcase Your Product?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's create a compelling showcase that highlights your product's unique value proposition
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-20 -top-20 -left-20"></div>
            <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 -bottom-20 -right-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcases;