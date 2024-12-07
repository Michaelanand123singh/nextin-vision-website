import React, { useState } from 'react';
import { 
  Camera, 
  Video, 
  Film, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  Target, 
  Star, 
  Play, 
  Award 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';

export default function EnhancedServices() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const processSteps = [
    { 
      title: 'Discovery', 
      description: 'Deep dive into your brand essence and objectives',
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      details: 'We conduct in-depth research and consultation to understand your unique brand story, target audience, and strategic goals.'
    },
    { 
      title: 'Strategy', 
      description: 'Crafting a tailored creative roadmap',
      icon: <Target className="w-12 h-12 text-primary" />,
      details: 'Our creative team develops a comprehensive video strategy that aligns perfectly with your brand identity and marketing objectives.'
    },
    { 
      title: 'Production', 
      description: 'Precision execution of visual storytelling',
      icon: <Camera className="w-12 h-12 text-primary" />,
      details: 'Leveraging state-of-the-art equipment and creative expertise, we bring your vision to life with cinematic precision and artistic flair.'
    },
    { 
      title: 'Optimization', 
      description: 'Refining and elevating the final deliverable',
      icon: <Star className="w-12 h-12 text-primary" />,
      details: 'Meticulous post-production and strategic optimization ensure your video content maximizes engagement and achieves your marketing goals.'
    }
  ];

  const testimonials = [
    {
      quote: "Their storytelling transformed our brand narrative completely. Simply exceptional!",
      name: "Sarah Thompson",
      company: "Tech Innovators Inc.",
      avatar: "/assets/images/avatars/sarah.jpg"
    },
    {
      quote: "Unparalleled creativity and professional execution. They exceeded all our expectations.",
      name: "Michael Rodriguez",
      company: "Global Marketing Solutions",
      avatar: "/assets/images/avatars/michael.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Animated Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center bg-[url('/assets/images/hero/services-hero.jpg')] h-[600px] flex items-center"
      >
        <div className="container mx-auto px-4 lg:px-24 xl:px-36 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="bg-black/60 p-10 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Elevate Your Brand Through Cinematic Storytelling
            </h1>
            <p className="text-xl text-gray-100 mb-8 font-light tracking-wide">
              Transform your vision into compelling visual narratives that resonate and inspire.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/contact"
              className="inline-block bg-primary text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-secondary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Our Solutions
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Section with Icons */}
      <section className="section py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-24 xl:px-36">
          <SectionTitle
            subtitle="Our Expertise"
            title="Comprehensive Video Production Services"
            description="Crafting bespoke visual experiences that amplify your brand's unique narrative and market presence."
            center
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14"
          >
            {servicesData.map((service) => (
              <motion.div 
                key={service.title} 
                variants={{
                  hidden: { opacity: 0, translateY: 50 },
                  visible: { opacity: 1, translateY: 0 }
                }}
                className="relative h-[450px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Process Overview */}
      <section className="section bg-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-24 xl:px-36">
          <SectionTitle
            subtitle="Our Methodology"
            title="Strategic Video Production Process"
            description="A meticulously designed workflow ensuring exceptional quality and client satisfaction."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-14">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl text-center transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                {step.icon}
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                <p className="text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {step.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
        <div className="container mx-auto px-4 lg:px-24 xl:px-36 text-center">
          <SectionTitle
            subtitle="Client Voices"
            title="Success Stories That Speak Volumes"
            description="Hear from brands that have transformed their visual communication with our expertise."
            center
          />

          <div className="max-w-3xl mx-auto mt-12 relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-2xl shadow-lg relative"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <blockquote className="text-2xl italic text-gray-800 mb-6">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mr-6 object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 ${
                    activeTestimonial === index 
                    ? 'bg-primary' 
                    : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Call-to-Action with Animation */}
      <motion.section 
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="bg-gradient-to-br from-gray-800 to-black text-white py-20 bg-size-200"
      >
        <div className="container mx-auto px-4 lg:px-24 xl:px-36 text-center">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-5xl font-bold mb-6 tracking-tight"
          >
            Ready to Redefine Your Visual Identity?
          </motion.h2>
          <p className="text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Unlock the potential of professional video production. Let's collaborate to create extraordinary visual experiences that set you apart.
          </p>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/contact" 
            className="bg-primary text-white font-semibold px-12 py-5 rounded-full shadow-2xl hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl tracking-wide"
          >
            Schedule Consultation
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}