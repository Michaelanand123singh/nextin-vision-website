import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  VideoIcon, 
  PenTool, 
  Layers, 
  Check, 
  Globe, 
  Award, 
  MessageCircle 
} from 'lucide-react';

// Testimonial Data
const testimonialData = [
  {
    id: 1,
    name: "Sarah Thompson",
    company: "Global Tech Solutions",
    role: "Marketing Director",
    quote: "Nextin Vision transformed our brand storytelling. Their video editing is nothing short of extraordinary. They captured our essence perfectly.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Innovate Startup Accelerator",
    role: "Founder & CEO",
    quote: "Our product showcase video exceeded all expectations. Nextin Vision doesn't just edit videos; they create compelling narratives that convert.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "TechNova Enterprises",
    role: "Communications Manager",
    quote: "Professional, creative, and incredibly responsive. Their executive communication videos have elevated our corporate image significantly.",
    rating: 4
  },
  {
    id: 4,
    name: "David Kim",
    company: "E-Learning Innovations",
    role: "Head of Content",
    quote: "Nextin Vision's training content videos are engaging, clear, and precisely what we needed to revolutionize our learning modules.",
    rating: 5
  },
  {
    id: 5,
    name: "Jessica Lee",
    company: "Digital Marketing Agency",
    role: "Creative Director",
    quote: "Their ability to translate complex brand messages into visually stunning videos is unparalleled. Absolutely game-changing!",
    rating: 5
  },
  {
    id: 6,
    name: "Alex Rivera",
    company: "Tech Innovations Inc.",
    role: "Marketing Lead",
    quote: "From concept to final cut, Nextin Vision demonstrates exceptional creativity and technical prowess.",
    rating: 4
  },
  {
    id: 7,
    name: "Rachel Wong",
    company: "Global Education Solutions",
    role: "Content Strategy Manager",
    quote: "The most collaborative and innovative video production team I've ever worked with. Truly exceptional!",
    rating: 5
  }
];

// Services Data
const servicesData = [
  {
    icon: VideoIcon,
    title: "Corporate Storytelling",
    description: "Transform your brand narrative with cinematic storytelling that captivates and converts.",
    details: [
      "Narrative-driven video production",
      "Brand essence capture",
      "Emotional storytelling techniques"
    ],
    color: "text-orange-500"
  },
  {
    icon: PenTool,
    title: "Creative Editing",
    description: "Precision editing that brings your vision to life with cutting-edge techniques.",
    details: [
      "Advanced post-production",
      "Motion graphics integration",
      "Color grading and correction"
    ],
    color: "text-blue-500"
  },
  {
    icon: Layers,
    title: "Multi-Platform Content",
    description: "Tailored video content optimized for every digital platform and audience.",
    details: [
      "Platform-specific editing",
      "Social media optimization",
      "Format adaptability"
    ],
    color: "text-green-500"
  }
];

// Reusable Components
const ServiceDetailCard = ({ icon: Icon, title, description, details, color }) => (
  <motion.div 
    className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-600/30 transition-all duration-300 group shadow-xl"
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <Icon className={`${color} w-12 h-12 mr-4`} />
      <h3 className="text-white text-2xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <ul className="space-y-2 text-gray-300">
      {details.map((detail, index) => (
        <li key={index} className="flex items-center">
          <Check className="text-orange-500 mr-2 w-5 h-5" />
          {detail}
        </li>
      ))}
    </ul>
    <motion.button 
      className="mt-4 w-full bg-gray-800/80 backdrop-blur-sm text-orange-500 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More
    </motion.button>
  </motion.div>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 relative flex flex-col justify-between h-full border border-gray-800 hover:border-orange-600/30 transition-all duration-300 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div>
        <Quote className="absolute top-4 left-4 text-orange-500/20 w-12 h-12" />
        <p className="text-gray-200 italic mb-6 pl-8 flex-grow">{testimonial.quote}</p>
      </div>
      
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm">{testimonial.company} - {testimonial.role}</p>
          </div>
          <div className="flex text-orange-500">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative py-40 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Specialized Video Services
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceDetailCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);

  const handleViewAll = () => {
    setVisibleTestimonials(testimonialData.length);
  };

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Client Success Stories
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonialData.slice(0, visibleTestimonials).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {visibleTestimonials < testimonialData.length && (
          <div className="flex justify-center">
            <motion.button 
              onClick={handleViewAll}
              className="bg-orange-500/90 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Nextin Vision
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Perspective",
              description: "We understand diverse market dynamics and storytelling nuances across industries and cultures.",
              color: "text-blue-500"
            },
            {
              icon: Award,
              title: "Award-Winning Quality",
              description: "Recognized for exceptional creativity, technical excellence, and innovative storytelling approaches.",
              color: "text-green-500"
            },
            {
              icon: MessageCircle,
              title: "Collaborative Partnership",
              description: "Your vision, our expertise - a true collaborative approach that transforms your brand narrative.",
              color: "text-orange-500"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center hover:border-orange-600/30 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <item.icon className={`mx-auto ${item.color} w-16 h-16 mb-6`} />
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NextinVisionContent = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_0%,transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,0,0.05)_0%,transparent_50%)]" />
      
      <div className="relative">
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default NextinVisionContent;