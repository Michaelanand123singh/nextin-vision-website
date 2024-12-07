import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, TrendingUp, Shuffle, PieChart, Award, 
  Heart, AlertCircle, Target, HelpCircle, Play, ChevronRight, 
  Building, Globe, Check
} from 'lucide-react';

const ExecutiveCommunication = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const communicationTypes = [
    {
      title: "CEO Addresses",
      icon: <Building className="w-6 h-6" />,
      description: "Direct messages from leadership addressing company updates, achievements, and future directions.",
      benefits: ["Build trust and transparency", "Align company vision", "Foster leadership connection"],
      examples: ["Annual company updates", "Quarterly performance reviews", "Major announcements"]
    },
    {
      title: "Town Halls",
      icon: <Users className="w-6 h-6" />,
      description: "Interactive sessions covering current projects, employee Q&A, and company progress updates.",
      benefits: ["Encourage open dialogue", "Address concerns directly", "Share comprehensive updates"],
      examples: ["Monthly all-hands meetings", "Department updates", "Team celebrations"]
    },
    {
      title: "Strategic Updates",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Focused communications about company initiatives, goals, and key performance indicators.",
      benefits: ["Clear goal alignment", "Progress tracking", "Strategic clarity"],
      examples: ["KPI reviews", "Initiative launches", "Success metrics"]
    },
    {
      title: "Change Management",
      icon: <Shuffle className="w-6 h-6" />,
      description: "Communication about organizational changes, mergers, acquisitions, or restructuring.",
      benefits: ["Smooth transitions", "Clear expectations", "Reduced uncertainty"],
      examples: ["Merger announcements", "Restructuring plans", "Process changes"]
    },
    {
      title: "Investor Updates",
      icon: <PieChart className="w-6 h-6" />,
      description: "Financial performance reports and strategic updates for shareholders and investors.",
      benefits: ["Investor confidence", "Market transparency", "Financial clarity"],
      examples: ["Earnings calls", "Annual reports", "Investment opportunities"]
    },
    {
      title: "Employee Recognition",
      icon: <Award className="w-6 h-6" />,
      description: "Celebrating achievements and outstanding contributions within the organization.",
      benefits: ["Boost morale", "Recognize excellence", "Strengthen culture"],
      examples: ["Achievement spotlights", "Team awards", "Success stories"]
    },
    {
      title: "CSR Reports",
      icon: <Heart className="w-6 h-6" />,
      description: "Showcasing corporate social responsibility initiatives and sustainable practices.",
      benefits: ["Demonstrate values", "Community impact", "Environmental commitment"],
      examples: ["Sustainability reports", "Community projects", "Social initiatives"]
    },
    {
      title: "Crisis Management",
      icon: <AlertCircle className="w-6 h-6" />,
      description: "Addressing urgent situations with transparency and clear guidance.",
      benefits: ["Quick response", "Clear direction", "Stakeholder assurance"],
      examples: ["Emergency updates", "Safety protocols", "Resolution plans"]
    },
    {
      title: "Vision and Mission",
      icon: <Target className="w-6 h-6" />,
      description: "Reinforcing core values and organizational mission to inspire stakeholders.",
      benefits: ["Inspire alignment", "Cultural reinforcement", "Value communication"],
      examples: ["Vision statements", "Value stories", "Mission focus"]
    },
    {
      title: "Q&A Sessions",
      icon: <HelpCircle className="w-6 h-6" />,
      description: "Interactive sessions answering questions from various stakeholders.",
      benefits: ["Direct engagement", "Clear communication", "Build trust"],
      examples: ["Ask Me Anything", "Topic deep-dives", "Open forums"]
    }
  ];

  const features = [
    {
      title: "Professional Production",
      description: "High-quality video and audio production with expert cinematography",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Strategic Planning",
      description: "Comprehensive communication strategy and message development",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Global Reach",
      description: "Multi-language support and cultural adaptation capabilities",
      icon: <Users className="w-6 h-6" />
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
              Executive Communication
              <span className="text-blue-400"> that Inspires</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Elevate your leadership message with professional video production that engages, informs, and motivates your audience
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full -bottom-20 -right-20"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Communication Types Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Communication Solutions</h2>
          <p className="text-gray-400">Choose the perfect format for your executive message</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communicationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{type.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{type.description}</p>
              
              {selectedCategory === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-4 border-t border-gray-700 pt-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Key Benefits:</h4>
                    <ul className="text-gray-400">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center mb-2">
                          <Check className="w-4 h-4 mr-2 text-blue-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-blue-400 font-semibold mt-4 mb-2">Example Videos:</h4>
                    <ul className="text-gray-400">
                      {type.examples.map((example, i) => (
                        <li key={i} className="flex items-center mb-2">
                          <Play className="w-4 h-4 mr-2 text-blue-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
              
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-4">
                Learn More <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Production Process</h2>
            <p className="text-gray-300">From concept to delivery, we ensure excellence at every step</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            {["Strategy", "Script", "Production", "Post-Production", "Delivery"].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="text-white font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Elevate Your Executive Communication?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's create impactful video content that resonates with your audience and delivers your message with clarity and impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                View Portfolio
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

export default ExecutiveCommunication;