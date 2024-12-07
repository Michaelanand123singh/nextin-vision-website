import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, Camera, Edit, Film, Upload, Award, Users, Clock, Video, Check, Star } from 'lucide-react';

const BrandStoryVideos = () => {
  const storyCategories = [
    {
      title: "Founding Vision",
      subTitle: "Seeds of Innovation",
      description: "Explore the inspiring journey of our founders' initial vision, tracing how a bold idea transformed into a groundbreaking enterprise.",
      icon: <Video className="w-6 h-6" />
    },
    // ... (previous categories remain the same)
  ];

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "We dive deep into your brand's history, values, and goals to craft the perfect narrative strategy.",
      icon: <Camera className="w-8 h-8" />,
      duration: "2-3 days"
    },
    {
      title: "Script & Storyboard",
      description: "Our creative team develops a compelling script and detailed storyboard for your approval.",
      icon: <Edit className="w-8 h-8" />,
      duration: "3-4 days"
    },
    {
      title: "Production",
      description: "Professional filming with state-of-the-art equipment and experienced crew.",
      icon: <Film className="w-8 h-8" />,
      duration: "1-2 weeks"
    },
    {
      title: "Post-Production",
      description: "Expert editing, color grading, and sound design to perfect your story.",
      icon: <Upload className="w-8 h-8" />,
      duration: "1-2 weeks"
    }
  ];

  const features = [
    {
      title: "Premium Quality",
      description: "4K video production with cinema-grade equipment",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Expert Team",
      description: "Award-winning directors and cinematographers",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Quick Turnaround",
      description: "Efficient production timeline with regular updates",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      text: "The brand story video perfectly captured our company's essence and values. It's been instrumental in our marketing efforts.",
      author: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      rating: 5
    },
    {
      text: "Professional, creative, and incredibly efficient. The team delivered beyond our expectations.",
      author: "Michael Chen",
      position: "Marketing Director, GlobalCorp",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section - Enhanced with Video Background */}
      <div className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Brand Story Into A
              <span className="text-orange-400"> Compelling Vision</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create powerful, cinematic narratives that inspire, engage, and elevate your brand's presence
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-orange-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Started
              </button>
              <button className="border border-white text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Brand Story Videos?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Production Process</h2>
          <p className="text-gray-400">A streamlined approach to creating your perfect brand story</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-orange-400 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <span className="text-blue-400 text-sm">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid - Previous categories section remains but enhanced */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Brand Story Categories</h2>
          <p className="text-gray-400">Choose the perfect format to tell your unique story</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="text-blue-400">{category.subTitle}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Learn More <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-blue-400">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Videos Created</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-300">Industry Awards</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">50M+</h3>
              <p className="text-gray-300">Total Views</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Brand Story?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's create a compelling narrative that captures your brand's essence and resonates with your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
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

export default BrandStoryVideos;