import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Check, Star, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const PremiumContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const servicesData = [
    {
      icon: <Globe className="text-orange-500" />,
      title: "Global Reach",
      description: "Connecting creative talents across international boundaries, bringing global perspectives to your vision."
    },
    {
      icon: <Award className="text-orange-500" />,
      title: "Award-Winning Expertise",
      description: "Backed by industry recognition and a portfolio of groundbreaking cinematic projects."
    },
    {
      icon: <Star className="text-orange-500" />,
      title: "Creative Innovation",
      description: "Pushing the boundaries of storytelling with cutting-edge technology and innovative approaches."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950 text-white overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-400/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: { value: "#ff6b00" }, // Changed to orange
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-orange-500 mb-4">
            NEXTIN VISION
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transforming Visions into Cinematic Realities
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-orange-900 text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-orange-900"
          >
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-500" />
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Mayur Vihar, New Delhi</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-orange-500" />
                <div>
                  <h3 className="font-semibold text-white">Contact</h3>
                  <p className="text-gray-300">+91-7667925604</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-orange-500" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">official@nextinvision.in</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/7667925604"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-800 text-white py-3 rounded-lg hover:from-green-800 hover:to-green-500 transition-all"
            >
              <MessageCircle className="mr-2" />
              Quick Connect on What's App
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-orange-900"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="w-full bg-black border border-orange-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email" 
                className="w-full bg-black border border-orange-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                rows="4"
                className="w-full bg-black border border-orange-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-800 text-white py-3 rounded-lg hover:from-orange-700 hover:to-orange-900 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PremiumContactPage;