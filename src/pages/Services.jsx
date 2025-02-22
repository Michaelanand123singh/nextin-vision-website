import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const services = {
    media: {
      title: "Media Services (Flicks Studio)",
      categories: [
        {
          name: "Enterprise-Level Video Production",
          details: [
            "High-budget cinematic ads, brand films, and corporate documentaries",
            "Multi-location shoots with top-tier production teams",
            "Industry partnerships with film studios and ad agencies"
          ]
        },
        {
          name: "3D & VFX for Corporate & Entertainment",
          details: [
            "Advanced CGI, hyper-realistic 3D models, and high-budget VFX",
            "Augmented Reality (AR) & Virtual Reality (VR) solutions",
            "Large-scale 3D visualization for real estate, automobile, and engineering industries"
          ]
        },
        {
          name: "AI-Powered Content Production",
          details: [
            "AI-driven automated video editing for large-scale media houses",
            "Generative AI for digital marketing and brand storytelling",
            "AI avatars & synthetic media for enterprise solutions"
          ]
        }
      ],
      link: "/MediaServices"
    },
    tech: {
      title: "Tech Services (Odyssey)",
      categories: [
        {
          name: "Metaverse & Immersive Experiences",
          details: [
            "Metaverse-based corporate training, branding, and events",
            "VR-based architectural visualization & product showcases",
            "Digital twin technology for large-scale industries"
          ]
        },
        {
          name: "AI, ML & Automation at Scale",
          details: [
            "AI-driven analytics & predictive business intelligence",
            "Large-scale automation for banking, healthcare, and logistics",
            "Custom AI chatbot & NLP-powered customer service solutions"
          ]
        },
        {
          name: "Custom Software Solutions",
          details: [
            "SaaS Product development with generative AI",
            "Solutions software development",
            "E-Commerce - Shopify/WooCommerce and Custom"
          ]
        },
        {
          name: "Complete Digital Transformation",
          details: [
            "Digital transformation for large-scale industries",
            "Digital transformation for small and medium-sized businesses",
            "Digital transformation for startups"
          
          ]
        }

      ],
      link: "/OnlineOdyssey"
    },
    smma: {
      title: "Digital Marketing (SMMA)",
      categories: [
        {
          name: "Social Media Management",
          details: [
            "Strategic content planning and scheduling across platforms",
            "Community management and engagement optimization",
            "Performance tracking and analytics reporting"
          ]
        },
        {
          name: "Content Creation & Strategy",
          details: [
            "Professional photography and videography for social media",
            "Graphic design and visual content creation",
            "Trending content research and implementation"
          ]
        },
        {
          name: "Brand Development",
          details: [
            "Comprehensive brand identity development",
            "Social media presence optimization",
            "Influencer partnership and collaboration management"
          ]
        }
      ],
      link: "/DigitalMarketing"
    },
    additional: {
      title: "Additional Services & Brands",
      categories: [
        {
          name: "AI Solutions Hub",
          details: [
            "Custom AI agents and automation tools development",
            "Integration services with existing systems",
            "Performance optimization and scaling solutions"
          ]
        },
        {
          name: "Dev Market",
          details: [
            "Ready-to-use software solutions and components",
            "Custom landing page templates and themes",
            "Professional development resources and tools"
          ]
        },
        {
          name: "Premium Business Solutions",
          details: [
            "PPT Market: High-end corporate presentations",
            "SponsorshipFinder.com: Influencer-brand matching",
            "Enterprise collaboration and partnership opportunities"
          ]
        }
      ],
      link: "/AdditionalServices"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const ServiceCard = ({ data }) => (
    <motion.div
      variants={cardVariants}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-800/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-5 shadow-2xl border border-gray-800 group-hover:border-orange-500/50 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {data.title}
        </h2>
        
        <div className="space-y-4">
          {data.categories.map((category, index) => (
            <div key={index} className="relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500/50 to-orange-500/0 rounded-full" />
              <div className="pl-4">
                <h3 className="text-lg font-semibold text-white/90 mb-2">{category.name}</h3>
                <ul className="text-gray-400 space-y-1.5">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-2 mt-1.5 group-hover:bg-orange-400 transition-colors duration-300"></span>
                      <span className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <Link
          to={data.link}
          className="relative inline-block w-full mt-6 overflow-hidden group/button"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-orange-800 group-hover/button:scale-105 transition-transform duration-300" />
          <div className="relative px-4 py-2.5 text-white/90 text-sm font-medium text-center rounded-lg group-hover/button:text-white transition-colors duration-300">
            Explore {data.title}
          </div>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_0%,transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,0,0.05)_0%,transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-tight">
            Transform Your Digital Presence
          </h1>
          <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Elevate your brand with cutting-edge media production, technology solutions, and digital marketing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          <ServiceCard data={services.media} />
          <ServiceCard data={services.tech} />
          <ServiceCard data={services.smma} />
          <ServiceCard data={services.additional} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;