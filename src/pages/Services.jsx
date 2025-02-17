import React from 'react';
import { Link } from 'react-router-dom';

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

  const ServiceCard = ({ data }) => (
    <div className="bg-gray-900/90 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        {data.title}
      </h2>
      
      <div className="space-y-4">
        {data.categories.map((category, index) => (
          <div key={index} className="border-l-2 border-orange-500/30 pl-4">
            <h3 className="text-lg font-semibold text-white/90 mb-2">{category.name}</h3>
            <ul className="text-gray-400 text-sm space-y-1.5">
              {category.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-2 mt-1.5"></span>
                  <span className="leading-tight">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <Link
        to={data.link}
        className="inline-block w-full mt-6 bg-gradient-to-r from-orange-600 to-orange-800 text-white/90 text-sm font-medium px-4 py-2.5 rounded-lg text-center hover:from-orange-700 hover:to-orange-900 transition-all duration-300 transform hover:-translate-y-0.5"
      >
        Explore {data.title}
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Transform Your Digital Presence
          </h1>
          <p className="text-lg text-gray-300/90 max-w-2xl mx-auto">
            Elevate your brand with cutting-edge media production, technology solutions, and digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <ServiceCard data={services.media} />
          <ServiceCard data={services.tech} />
          <ServiceCard data={services.smma} />
          <ServiceCard data={services.additional} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;