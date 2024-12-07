import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  PenTool, 
  BarChart, 
  CheckCircle,
  ArrowRight,
  ChevronRight 
} from 'lucide-react';

// Particle Background Component
const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div 
        key={i}
        className="absolute bg-orange-500/30 rounded-full"
        style={{
          width: `${Math.random() * 10}px`,
          height: `${Math.random() * 10}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    ))}
  </div>
);

// Reusable Section Title Component
const SectionTitle = ({ subtitle, title, description, center = false }) => (
  <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
    <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">
      {title}
    </h2>
    {description && (
      <p className="text-gray-300 text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

// Main ProcessPage Component
const ProcessPage = () => {
  // Process Steps
  const processSteps = [
    {
      icon: PenTool,
      title: 'Creative Strategy',
      description: 'Tailored concepts that capture your brand essence.',
      details: [
        'In-depth brand analysis',
        'Innovative concept development',
        'Strategic storytelling approach'
      ]
    },
    {
      icon: Video,
      title: 'Professional Production',
      description: 'Cinematic quality with cutting-edge technology.',
      details: [
        'High-end equipment',
        'Professional cinematography',
        'Advanced post-production'
      ]
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Data-driven approach to maximize video impact.',
      details: [
        'Audience targeting',
        'Platform-specific optimization',
        'Performance tracking'
      ]
    }
  ];

  // Deliverables
  const deliverables = [
    'Cinematic Video Production',
    'Comprehensive Analytics Report',
    'Multi-Platform Optimized Content',
    'Creative Strategy Consultation'
  ];

  return (
    <div className="bg-black text-white relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
            Video Production Reimagined
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Transforming your vision into captivating visual stories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-black px-10 py-4 rounded-full font-bold hover:bg-orange-400 transition-colors"
          >
            Start Your Project <ArrowRight className="inline ml-2" />
          </motion.button>
        </div>
      </motion.section>

      {/* Process Steps Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            subtitle="Our Workflow"
            title="Production Process"
            description="A strategic approach to creating impactful visual content"
            center
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 text-center border border-orange-500/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-orange-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex} 
                      className="flex items-center justify-center gap-2 text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl p-12 border border-orange-500/20">
          <SectionTitle 
            subtitle="What We Deliver"
            title="Comprehensive Video Solutions"
            description="Premium services designed to elevate your brand's visual storytelling"
            center
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CheckCircle className="text-orange-500 w-6 h-6 shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-black px-10 py-4 rounded-full font-bold hover:bg-orange-400 transition-colors"
            >
              Schedule Consultation <ChevronRight className="inline ml-2" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;