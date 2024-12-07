import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, Play, Users, Camera, Eye, UserCheck, 
  Sparkles, Award, Book, Bell, Gift, Users as UsersIcon,
  Smile, TrendingUp, Radio, Star, ChevronRight
} from 'lucide-react';

const SocialMediaContent = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      title: "Short Clips",
      subTitle: "Micro-Moments, Maximum Impact",
      description: "Bite-sized video content designed to capture attention instantly, delivering powerful messages in seconds across trending social platforms.",
      icon: <Video />,
      category: "content",
      platforms: ["Instagram", "TikTok", "YouTube Shorts"]
    },
    {
      title: "Live Streams",
      subTitle: "Real-Time Connection",
      description: "Interactive video experiences that break down barriers, offering live engagement, instant feedback, and authentic brand interaction.",
      icon: <Radio />,
      category: "live",
      platforms: ["Facebook Live", "Instagram Live", "YouTube Live"]
    },
    {
      title: "Behind-the-Scenes",
      subTitle: "Unveiling Our World",
      description: "An intimate look into our daily operations, creative processes, and human side, transforming followers into trusted insiders.",
      icon: <Eye />,
      category: "content",
      platforms: ["Instagram Stories", "YouTube", "TikTok"]
    },
    {
      title: "User-Generated Content",
      subTitle: "Your Story, Our Community",
      description: "Celebrating our audience's creativity by showcasing their experiences, testimonials, and unique perspectives with our brand.",
      icon: <UserCheck />,
      category: "community",
      platforms: ["All Platforms"]
    },
    {
      title: "Story Highlights",
      subTitle: "Snapshots of Inspiration",
      description: "Quick, compelling narratives that provide glimpses into exciting moments, experiences, and stories that resonate with our audience.",
      icon: <Sparkles />,
      category: "content",
      platforms: ["Instagram", "Facebook", "Snapchat"]
    },
    {
      title: "Challenges and Trends",
      subTitle: "Viral Vibes, Collective Energy",
      description: "Engaging with dynamic social trends and creating interactive challenges that spark creativity and community participation.",
      icon: <TrendingUp />,
      category: "engagement",
      platforms: ["TikTok", "Instagram Reels"]
    },
    {
      title: "Educational Content",
      subTitle: "Learn, Grow, Succeed",
      description: "Expert-driven tutorials and informative videos that empower our audience with practical knowledge and actionable insights.",
      icon: <Book />,
      category: "educational",
      platforms: ["YouTube", "LinkedIn", "IGTV"]
    },
    {
      title: "Announcements",
      subTitle: "Breaking News, Big Moments",
      description: "Exciting updates that keep our community informed about the latest developments, product launches, and strategic innovations.",
      icon: <Bell />,
      category: "updates",
      platforms: ["All Platforms"]
    },
    {
      title: "Contests and Giveaways",
      subTitle: "Rewards and Excitement",
      description: "Interactive video promotions that create buzz, reward loyal followers, and generate enthusiastic engagement with our brand.",
      icon: <Gift />,
      category: "engagement",
      platforms: ["Instagram", "Facebook", "Twitter"]
    },
    {
      title: "Influencer Collaborations",
      subTitle: "Authentic Voices, Shared Stories",
      description: "Strategic partnerships that leverage unique perspectives to expand reach and create meaningful connections with diverse audiences.",
      icon: <Users />,
      category: "collaboration",
      platforms: ["All Platforms"]
    },
    {
      title: "Memes and Fun Content",
      subTitle: "Laughter, Shared",
      description: "Lighthearted, humorous content that showcases our brand's personality, creating shareable moments that bring smiles and connection.",
      icon: <Smile />,
      category: "engagement",
      platforms: ["Instagram", "Twitter", "Facebook"]
    }
  ];

  const stats = [
    { number: "1B+", label: "Views Generated" },
    { number: "500K+", label: "Engagement Rate" },
    { number: "100+", label: "Brand Partners" },
    { number: "50M+", label: "Reach" }
  ];

  const benefits = [
    {
      title: "Increased Engagement",
      description: "Boost your social media presence with content that drives meaningful interactions",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Brand Awareness",
      description: "Build a strong, recognizable brand identity across all social platforms",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Community Growth",
      description: "Develop a loyal community of engaged followers and brand advocates",
      icon: <UsersIcon className="w-6 h-6" />
    }
  ];

  const filterCategories = (category) => {
    setActiveTab(category);
  };

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create Engaging
              <span className="text-blue-400"> Social Media Content</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your social media presence with professionally crafted content that resonates with your audience
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-blue-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Social Media Content?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Content Categories</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'content', 'live', 'community', 'engagement', 'educational', 'updates', 'collaboration'].map((tab) => (
              <button
                key={tab}
                onClick={() => filterCategories(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="text-blue-400">{category.subTitle}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.platforms.map((platform, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {platform}
                  </span>
                ))}
              </div>
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Learn More <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's create engaging content that connects with your audience and drives real results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Creating Content
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-20 -top-20 -left-20"></div>
            <div className="absolute w-64 h-64 bg-violet-500 rounded-full opacity-20 -bottom-20 -right-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaContent;