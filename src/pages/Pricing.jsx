import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Check, Video, Film, Scissors, Globe } from 'lucide-react';

// Particle background component (same as previous implementation)
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(255, 165, 0, ${Math.random() * 0.3})`; // Orange with opacity
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.draw();
        particle.update();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 z-0 opacity-30" 
      style={{ pointerEvents: 'none' }}
    />
  );
};

// Testimonial Component
const Testimonial = ({ quote, author, role }) => (
  <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800">
    <p className="italic text-gray-300 mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="mr-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-white">{author}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

// Main Pricing Component
export default function PremiumPricing() {
  const pricingPlans = [
    {
      name: 'Essential Edit',
      price: '$499',
      features: [
        'Basic video editing',
        'Color correction',
        'Simple transitions',
        'Up to 30 min footage'
      ]
    },
    {
      name: 'Pro Package',
      price: '$999',
      featured: true,
      features: [
        'Advanced editing',
        'Color grading',
        'Motion graphics',
        'Sound design',
        'Up to 2 hours footage'
      ]
    },
    {
      name: 'Elite Cinematics',
      price: '$1,999',
      features: [
        'Premium cinematography',
        'Advanced VFX',
        'Custom animations',
        'Comprehensive post-production',
        'Unlimited revisions'
      ]
    }
  ];

  const services = [
    {
      icon: <Video className="w-10 h-10 text-orange-500" />,
      title: 'Commercial Production',
      description: 'Elevate your brand with high-impact video content.'
    },
    {
      icon: <Film className="w-10 h-10 text-orange-600" />,
      title: 'Narrative Storytelling',
      description: 'Craft compelling stories that resonate with your audience.'
    },
    {
      icon: <Scissors className="w-10 h-10 text-orange-700" />,
      title: 'Post-Production Mastery',
      description: 'Refined editing that brings your vision to life.'
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-800" />,
      title: 'Global Reach',
      description: 'Content optimized for international markets.'
    }
  ];

  const testimonials = [
    {
      quote: "Their editing transformed our raw footage into a cinematic masterpiece.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechInnovate"
    },
    {
      quote: "Incredibly professional and creative. They exceeded our expectations.",
      author: "Michael Chen",
      role: "Creative Lead, Global Brands"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden pt-24">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Cinematic Editing Unleashed
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming raw footage into compelling visual stories with precision and artistry.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`
                relative rounded-2xl p-8 border border-gray-800 
                ${plan.featured 
                  ? 'bg-gradient-to-br from-orange-900/50 to-gray-900/50 scale-105' 
                  : 'bg-gray-900/50'}
                backdrop-blur-lg overflow-hidden
              `}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 p-2 text-orange-400">
                  <Star className="w-8 h-8" fill="currentColor" />
                </div>
              )}
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {plan.name}
              </h2>
              <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-bold"
              >
                Select Plan
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Our Specialized Services
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>

        {/* Custom Solution Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We understand that every project is unique. Our team of expert editors is ready to craft a bespoke solution that perfectly matches your creative vision and technical requirements.
          </p>
          <button className="px-8 py-3 rounded-full border border-white bg-orange-600/10 hover:bg-orange-600/20 transition-all text-white">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};