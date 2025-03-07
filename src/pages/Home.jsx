import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, Monitor, Users, Award, Play, ArrowRight, 
  ChevronRight, Star, MessageCircle, BookOpen, 
  Quote, CheckCircle, Code, Brain, Globe, Smartphone,
  Layout, Palette, Share2, Camera, Cpu, Database, Handshake
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';

const initialStats = [
  { label: 'Enterprise Partners', value: 150, icon: Handshake },
  { label: 'Global Projects', value: 500, icon: Globe },
  { label: 'Expert Team Members', value: 50, icon: Users },
  { label: 'Years of Partnership', value: 15, icon: Star },
];

const partnerTypes = [
  {
    title: 'Tech Partner',
    subtitle: 'Odyssey',
    icon: Code,
    description: 'We collaborate with companies to provide cutting-edge technology solutions, driving innovation and digital transformation.',
    services: [
      {
        icon: Globe,
        title: 'Metaverse Experiences',
        features: [
          'Corporate training',
          'VR visualization',
          'Digital twin technology'
        ],
        price: 'Custom'
      },
      {
        icon: Brain,
        title: 'AI & ML Solutions',
        features: [
          'Business intelligence',
          'Process automation',
          'Custom AI chatbots'
        ],
        price: 'Custom'
      },
      {
        icon: Database,
        title: 'Custom Software',
        features: [
          'SaaS development',
          'E-Commerce solutions',
          'Digital transformation'
        ],
        price: 'Custom'
      }
    ]
  },
  {
    title: 'Media Partner',
    subtitle: 'Flicks Studio',
    icon: Video,
    description: 'We partner with brands to create high-impact media content, from cinematic productions to AI-powered storytelling.',
    services: [
      {
        icon: Camera,
        title: 'Enterprise-Level Video Production',
        features: [
          'High-budget cinematic ads',
          'Multi-location shoots',
          'Industry partnerships'
        ],
        price: 'Custom'
      },
      {
        icon: Monitor,
        title: '3D & VFX Solutions',
        features: [
          'Advanced CGI & VFX',
          'AR/VR Solutions',
          'Large-scale visualization'
        ],
        price: 'Custom'
      },
      {
        icon: Cpu,
        title: 'AI-Powered Content',
        features: [
          'Automated video editing',
          'Generative AI storytelling',
          'AI avatars & synthetic media'
        ],
        price: 'Custom'
      }
    ]
  },
  {
    title: 'SMMA Partner',
    subtitle: 'Social Media Marketing Agency',
    icon: Share2,
    description: 'We work closely with businesses to amplify their digital presence through strategic social media management and marketing.',
    services: [
      {
        icon: MessageCircle,
        title: 'Social Media Management',
        features: [
          'Strategic planning',
          'Community management',
          'Analytics reporting'
        ],
        price: 'Custom'
      },
      {
        icon: Palette,
        title: 'Content Creation',
        features: [
          'Professional media',
          'Graphic design',
          'Content strategy'
        ],
        price: 'Custom'
      },
      {
        icon: Layout,
        title: 'Brand Development',
        features: [
          'Brand identity',
          'Social optimization',
          'Influencer partnerships'
        ],
        price: 'Custom'
      }
    ]
  }
];

const portfolioItems = [
  {
    title: 'Enterprise Video Campaign',
    description: 'High-budget cinematic production for a Fortune 500 company',
    videoUrl: 'https://www.youtube.com/embed/f6aKWrDJ3CM',
    thumbnailUrl: 'https://img.youtube.com/vi/f6aKWrDJ3CM/maxresdefault.jpg',
    category: 'Media Partner'
  },
  {
    title: 'Product Animation 3D',
    description: 'Virtual reality corporate training platform',
    videoUrl: 'https://www.youtube.com/embed/BWtajwT6Weg',
    thumbnailUrl: 'https://img.youtube.com/vi/BWtajwT6Weg/maxresdefault.jpg',
    category: 'Tech Partner'
  },
  {
    title: 'AI-Powered Marketing',
    description: 'Automated content generation and distribution system',
    videoUrl: 'https://www.youtube.com/embed/5bwsX0fMSI0',
    thumbnailUrl: 'https://img.youtube.com/vi/5bwsX0fMSI0/maxresdefault.jpg',
    category: 'SMMA Partner'
  }
];

const testimonials = [
  {
    name: 'Alexander Mitchell',
    role: 'CEO, Global Innovations Corp',
    quote: 'Their partnership transformed our digital presence across all channels.',
    image: '/assets/images/testimonial1.jpg'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CTO, Tech Ventures',
    quote: 'The AI and metaverse solutions provided unprecedented value to our organization.',
    image: '/assets/images/testimonial2.jpg'
  },
  {
    name: 'James Chen',
    role: 'CMO, Digital Frontiers',
    quote: 'Their integrated approach to digital marketing delivered exceptional ROI.',
    image: '/assets/images/testimonial3.jpg'
  }
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState(initialStats.map(stat => ({ ...stat, currentValue: 0 })));
  const [activeCategory, setActiveCategory] = useState('Tech Partner');
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Animated Stats Counter
  useEffect(() => {
    const statsCounters = stats.map(stat => {
      const duration = 2000;
      const increment = stat.value / (duration / 50);
      
      const counter = setInterval(() => {
        setStats(prevStats => 
          prevStats.map(s => 
            s.label === stat.label 
              ? { 
                  ...s, 
                  currentValue: Math.min(
                    Math.ceil(s.currentValue + increment), 
                    s.value
                  ) 
                }
              : s
          )
        );
      }, 50);

      setTimeout(() => clearInterval(counter), duration);
      return () => clearInterval(counter);
    });

    return () => statsCounters.forEach(counter => counter());
  }, []);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10" />
          <div className="absolute inset-0">
            <iframe
              src="https://player.vimeo.com/video/1059328238?h=5df7f885ae&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              className={`absolute w-full h-full object-cover scale-105 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              allow="autoplay; fullscreen; picture-in-picture"
              frameBorder="0"
              onLoad={() => setVideoLoaded(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                transform: 'translate(-50%, -50%) scale(1.5)',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              Transform Your Business Through Partnership
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 animate-fade-in-up delay-200">
              We partner with companies as their Tech, Media, and SMMA experts, delivering long-term value and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 animate-fade-in-up delay-300">
              <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-lg font-semibold transition-all hover:from-amber-600 hover:to-amber-800 hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                Become a Partner
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold transition-all hover:bg-white/20 border border-white/20">
                Explore Our Work
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-amber-600/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <SectionTitle
            subtitle="About Us"
            title="Who We Are"
            description="We are a forward-thinking digital agency that partners with companies to deliver long-term value through technology, media, and digital marketing solutions. Our mission is to empower businesses with innovative strategies that drive growth and transformation."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-amber-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Vision</h3>
              <p className="text-gray-400">
                To be the leading partner for companies seeking innovative digital solutions that drive long-term success.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-amber-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Mission</h3>
              <p className="text-gray-400">
                To deliver exceptional digital experiences through strategic partnerships that create lasting value for our clients.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-amber-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                  Innovation
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                  Integrity
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                  Excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-24 bg-[#121212]">
        <div className="container">
          <SectionTitle
            subtitle="Our Partnership Models"
            title="How We Partner With You"
            description="We offer three types of partnerships to meet your business needs. Whether you need technology solutions, media production, or digital marketing expertise, we’ve got you covered."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {partnerTypes.map(category => (
              <div
                key={category.title}
                className="group p-8 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-amber-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-amber-700 transition-all duration-300">
                  <category.icon className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100 group-hover:text-amber-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {category.subtitle}
                </p>
                <p className="text-gray-400 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.services.map(service => (
                    <li key={service.title} className="flex items-center text-gray-400">
                      <ChevronRight className="w-5 h-5 text-amber-500 mr-2" />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/partnerships/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold"
                >
                  Learn More 
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0a0a0a] to-[#1e1e1e]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="group p-8 bg-gradient-to-br from-[#1e1e1e]/50 to-[#2a2a2a]/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/50"
              >
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="w-10 h-10 text-amber-500 mb-4" />
                  <div className="text-4xl font-bold text-gray-100 mb-2 group-hover:text-amber-500 transition-colors">
                    {stat.currentValue}+
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <SectionTitle
            subtitle="Featured Work"
            title="Our Success Stories"
            description="Transformative digital solutions for industry leaders through long-term partnerships."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-amber-500/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedVideo(item.videoUrl)}
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-500 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-100 group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-lg font-semibold transition-all hover:from-amber-600 hover:to-amber-800 hover:transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            >
              View Full Portfolio
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#121212]">
        <div className="container">
          <SectionTitle
            subtitle="Client Success"
            title="What Our Partners Say"
            description="Trusted by innovative companies worldwide through long-term partnerships."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 hover:border-amber-500/20"
              >
                <Quote className="w-12 h-12 text-amber-500 mb-6 opacity-50" />
                <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-amber-500/20"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-100 text-lg">{testimonial.name}</h4>
                    <p className="text-amber-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's create something extraordinary together. Our team of experts is ready to partner with you for long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold transition-all hover:bg-gray-100 hover:transform hover:scale-105 shadow-lg"
              >
                Become a Partner
                <ArrowRight className="ml-2" />
              </Link>
              <Link
                to="/partnerships"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold transition-all hover:bg-white/10"
              >
                Explore Partnership Models
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800/80 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={selectedVideo}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}