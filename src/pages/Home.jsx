import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Video, Monitor, Users, Award, Play, ArrowRight, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';

const stats = [
  { label: 'Projects Completed', value: '275+', icon: Award },
  { label: 'Satisfied Clients', value: '36+', icon: Users },
  { label: 'Team Members', value: '12+', icon: Users },
  { label: 'Combined Experience', value: '13+', icon: Star },
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
    title: 'Corporate Branding Video',
    description: 'A captivating story about a leading corporation.',
    image: '/assets/images/portfolio1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Branding'
  },
  {
    title: 'Product Launch Campaign',
    description: 'Showcasing a successful product launch.',
    image: '/assets/images/portfolio2.jpg',
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    category: 'Product'
  },
  {
    title: 'Employee Training Module',
    description: 'Engaging training content for employees.',
    image: '/assets/images/portfolio3.jpg',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    category: 'Training'
  },
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
                    {stat.value}
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
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
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