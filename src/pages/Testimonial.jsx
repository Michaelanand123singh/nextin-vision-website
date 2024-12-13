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

// Pricing Tiers
const pricingTiers = [
  {
    name: "Startup",
    price: 999,
    features: [
      "2 Video Projects",
      "Basic Editing",
      "1 Revision Round",
      "Standard Turnaround"
    ],
    recommended: false
  },
  {
    name: "Pro",
    price: 2499,
    features: [
      "5 Video Projects",
      "Advanced Editing",
      "2 Revision Rounds",
      "Priority Support",
      "Motion Graphics"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: 4999,
    features: [
      "Unlimited Projects",
      "Premium Editing",
      "Unlimited Revisions",
      "Dedicated Team",
      "Custom Branding",
      "Strategy Consultation"
    ],
    recommended: false
  }
];

// Reusable Components
const ServiceDetailCard = ({ icon: Icon, title, description, details, color }) => (
  <motion.div 
    className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-orange-600/30 transition-all duration-300 group"
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
      className="mt-4 w-full bg-neutral-800 text-orange-500 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More
    </motion.button>
  </motion.div>
);

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonialData.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  const currentTest = testimonialData[currentTestimonial];

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Client Success Stories
        </motion.h2>

        <motion.div 
          key={currentTestimonial}
          className="bg-neutral-900 rounded-xl p-8 relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="absolute top-4 left-4 text-orange-500/20 w-16 h-16" />
          <p className="text-gray-200 italic text-xl mb-6 pl-8">"{currentTest.quote}"</p>
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-2xl font-semibold">{currentTest.name}</h3>
              <p className="text-gray-400">{currentTest.company} - {currentTest.role}</p>
            </div>
            <div className="flex text-orange-500">
              {[...Array(currentTest.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <motion.button 
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-neutral-800 text-orange-500 p-2 rounded-full hover:bg-neutral-700 transition"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button 
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-neutral-800 text-orange-500 p-2 rounded-full hover:bg-neutral-700 transition"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-40 px-4 md:px-12 lg:px-24 bg-black">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-500"
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

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-neutral-950">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-500"
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
              className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center"
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
    <div className="bg-black text-white">
      <ServicesSection />
      <TestimonialSlider />
      <WhyChooseUs />
    </div>
  );
};

export default NextinVisionContent;