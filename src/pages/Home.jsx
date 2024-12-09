import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, Monitor, Users, Award, Play, ArrowRight, 
  ChevronRight, Star, MessageCircle, BookOpen, 
  Quote, CheckCircle 
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';

const initialStats = [
  { label: 'Projects Completed', value: 275, icon: Award },
  { label: 'Satisfied Clients', value: 36, icon: Users },
  { label: 'Team Members', value: 12, icon: Users },
  { label: 'Combined Experience', value: 13, icon: Star },
];

const services = [
  {
    icon: Video,
    title: 'Brand Story Videos',
    description: 'Compelling narratives that showcase your company\'s mission and values.',
    price: '2,000'
  },
  {
    icon: Monitor,
    title: 'Product Showcases',
    description: 'Dynamic demonstrations that highlight your product\'s key features.',
    price: '1,500'
  },
  {
    icon: Users,
    title: 'Training Content',
    description: 'Engaging educational videos for employee development.',
    price: '1,000'
  },
];

const portfolioItems = [
  {
    title: 'Motion Graphics with Porter',
    description: 'A captivating story about a leading corporation.',
    videoUrl: 'https://www.youtube.com/embed/f6aKWrDJ3CM?si=P8dGUYI7cxZnDR3V',
    category: 'Branding'
  },
  {
    title: 'Product Launch Campaign',
    description: 'Showcasing a successful product launch.',
    videoUrl: 'https://www.youtube.com/embed/BWtajwT6Weg?si=ZXV_oGhlh6YMOdAo',
    category: 'Product'
  },
  {
    title: 'Green Screen VFX',
    description: 'A green video shifted to rendered video using VFX',
    videoUrl: 'https://www.youtube.com/embed/5bwsX0fMSI0?si=3IaK6ZahJbxYYhOy',
    category: 'VFX'
  },
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, Tech Innovations',
    quote: 'Nextin Vision transformed our corporate story into an incredible visual narrative that truly resonates with our audience.',
    image: '/assets/images/testimonial1.jpg'
  },
  {
    name: 'Sarah Lee',
    role: 'Marketing Director, Global Solutions',
    quote: 'Their video production expertise elevated our brand communication to a whole new level.',
    image: '/assets/images/testimonial2.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    quote: 'The team\'s creativity and professionalism exceeded our expectations.',
    image: '/assets/images/testimonial3.jpg'
  }
];

const resources = [
  {
    icon: BookOpen,
    title: 'Video Marketing Guide',
    description: 'Comprehensive guide to leveraging video for business growth.',
    link: '/resources/video-marketing-guide'
  },
  {
    icon: CheckCircle,
    title: 'Production Checklist',
    description: 'Essential steps for creating compelling corporate videos.',
    link: '/resources/production-checklist'
  },
  {
    icon: MessageCircle,
    title: 'Industry Insights Blog',
    description: 'Latest trends and tips in video production and marketing.',
    link: '/blog'
  }
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState(initialStats.map(stat => ({ ...stat, currentValue: 0 })));
  const [portfolioThumbnails, setPortfolioThumbnails] = useState([]);

  // Animated Stats Counter
  useEffect(() => {
    const statsCounters = stats.map(stat => {
      const duration = 2000; // Total animation duration
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

  // YouTube Thumbnail Fetcher
  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbnails = await Promise.all(
        portfolioItems.map(async (item) => {
          const videoId = item.videoUrl.split('embed/')[1].split('?')[0];
          return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        })
      );
      setPortfolioThumbnails(thumbnails);
    };

    fetchThumbnails();
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
      <section className="relative h-screen flex items-center">
        {/* YouTube Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto z-0 opacity-80 filter blur-sm"
            src="https://player.vimeo.com/video/1037057432?autoplayer=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        
        <div className="container relative z-20 text-white">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up text-gray-100">
              Transforming Corporate Stories into 
              <span className="text-amber-500"> Visual Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up delay-200">
              Professional video production services that elevate your brand and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
              <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold transition-all hover:bg-amber-700 hover:transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="group inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-gray-100 rounded-lg backdrop-blur-sm font-semibold transition-all hover:bg-gray-700">
                View Our Work
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Video Section */}
      <section className="py-24 bg-[#121212]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                Welcome to Nextin Vision
              </h2>
              <p className="text-amber-500 text-lg">
                Discover how we transform ideas into compelling visual stories
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1e1e1e]">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Ex_W0GnrSkk?si=50MbSJreVWbDuMgM"
                  title="About Nextin Vision"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-4 text-amber-500 rounded-lg font-semibold transition-all hover:bg-gray-800 hover:text-amber-400 hover:transform hover:scale-105"
              >
                About Us
                <ArrowRight className="ml-2" />
              </Link>
            </div>
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
                className="group p-8 bg-[#1e1e1e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="w-8 h-8 text-amber-500 mb-4" />
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

      {/* Services Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <SectionTitle
            subtitle="Our Services"
            title="Professional Video Solutions"
            description="We offer a comprehensive range of video production services tailored to your business needs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-[#1e1e1e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <service.icon className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-100">${service.price}</span>
                  <Link 
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold"
                  >
                    Learn More 
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container">
          <SectionTitle
            subtitle="Featured Work"
            title="Our Latest Projects"
            description="Explore a few of our successful video projects."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={portfolioThumbnails[index] || '/placeholder-image.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 brightness-75"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-16 h-16 text-amber-500" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-500 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold transition-all hover:bg-amber-700 hover:transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2" />
          </Link>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container">
          <SectionTitle
            subtitle="What Our Clients Say"
            title="Client Testimonials"
            description="Hear from businesses that have experienced our video production magic."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Quote className="text-amber-500 mb-4" />
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <SectionTitle
            subtitle="Learn & Grow"
            title="Industry Resources"
            description="Free resources to help you leverage video for your business."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {resources.map((resource) => (
              <Link
                to={resource.link}
                key={resource.title}
                className="group bg-[#1e1e1e] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-900"
              >
                <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <resource.icon className="w-7 h-7 text-amber-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-amber-500">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="flex items-center text-amber-500 group-hover:text-amber-400">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1e1e1e] rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800 text-gray-200 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <iframe
              className="w-full aspect-video"
              src={selectedVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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