import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Book, Video, Users, Coffee, FileVideo, Shield,
  UserPlus, Box, Clock, ChevronRight, PlayCircle,
  Lightbulb, Award, BarChart
} from 'lucide-react';

const TrainingContent = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Tutorials",
      subTitle: "Mastering Skills: Guided Learning Journeys",
      description: "Comprehensive step-by-step video instructions that break down complex processes into manageable, easy-to-follow segments with visual demonstrations and expert guidance.",
      icon: <Book className="w-6 h-6" />,
      stats: { videos: "200+", duration: "40+ hours", students: "15K+" }
    },
    {
      id: 2,
      title: "Webinars",
      subTitle: "Expert Insights: Live Learning Experiences",
      description: "Interactive online sessions featuring industry experts who dive deep into specialized topics, offering real-time knowledge sharing, insights, and direct audience engagement.",
      icon: <Video className="w-6 h-6" />,
      stats: { videos: "150+", duration: "30+ hours", students: "12K+" }
    },
    {
      id: 3,
      title: "How-to Guides",
      subTitle: "Practical Solutions: Navigate Any Challenge",
      description: "Action-oriented videos providing clear, practical instructions for solving real-world problems and completing specific tasks across various professional and personal domains.",
      icon: <FileVideo className="w-6 h-6" />,
      stats: { videos: "300+", duration: "50+ hours", students: "20K+" }
    },
    {
      id: 4,
      title: "Role-playing",
      subTitle: "Learning Through Experience: Behavioral Scenarios",
      description: "Dynamic video scenarios that illustrate effective and ineffective behaviors, allowing viewers to learn critical interpersonal skills through realistic workplace interactions.",
      icon: <Users className="w-6 h-6" />,
      stats: { videos: "100+", duration: "25+ hours", students: "8K+" }
    },
    // ... add remaining categories with similar structure
  ];

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expert-Led Content",
      description: "Learn from industry professionals"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Programs",
      description: "Earn recognized certifications"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 py-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Transform Your Skills with
              <span className="text-blue-400"> Expert Training</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive video training solutions designed to elevate your professional capabilities
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Learning
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-10 -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 -bottom-20 -right-20"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Training Categories</h2>
          <p className="text-gray-400">Choose from our diverse range of professional training content</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="text-blue-400">{category.subTitle}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <div className="grid grid-cols-3 gap-4 border-t border-gray-700 pt-4">
                <div className="text-center">
                  <p className="text-blue-400 font-semibold">{category.stats.videos}</p>
                  <p className="text-gray-500 text-sm">Videos</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-400 font-semibold">{category.stats.duration}</p>
                  <p className="text-gray-500 text-sm">Duration</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-400 font-semibold">{category.stats.students}</p>
                  <p className="text-gray-500 text-sm">Students</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Training Content?</h2>
            <p className="text-gray-300">Elevate your learning experience with our premium features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award />, title: "Certified Content", description: "Industry-recognized certifications" },
              { icon: <Users />, title: "Expert Instructors", description: "Learn from the best in the field" },
              { icon: <Clock />, title: "Flexible Learning", description: "Learn at your own pace" },
              { icon: <BarChart />, title: "Progress Tracking", description: "Monitor your growth" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are transforming their careers through our training content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                View Course Catalog
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

export default TrainingContent;