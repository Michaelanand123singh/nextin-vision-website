import React from 'react';
import { Play, Camera, Box, Sparkles, ArrowRight, Star } from 'lucide-react';

const MediaServices = () => {
  const services = [
    {
      title: "Enterprise Video Production",
      description: "Creating cinematic brand stories that captivate and inspire. Our award-winning team combines technical mastery with artistic vision to produce content that elevates your brand.",
      icon: <Camera className="w-6 h-6 text-amber-500" />,
      features: [
        "Cinematic storytelling by industry-leading directors",
        "Full-service production with global capabilities",
        "4K/8K resolution with cutting-edge equipment",
        "Expert color grading and post-production"
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "3D & Visual Effects",
      description: "Pushing the boundaries of digital artistry with photorealistic 3D animation and revolutionary visual effects that transform imagination into reality.",
      icon: <Box className="w-6 h-6 text-amber-500" />,
      features: [
        "Hyper-realistic 3D modeling and animation",
        "Advanced compositing and visual effects",
        "Immersive AR/VR experiences",
        "Character design and rigging"
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "AI-Powered Innovation",
      description: "Harnessing cutting-edge AI technology to create next-generation content that adapts and evolves with your audience while maintaining creative authenticity.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      features: [
        "Intelligent content personalization",
        "Neural network rendering optimization",
        "AI-enhanced visual effects",
        "Automated content scaling"
      ],
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 bg-black/30 px-4 py-2 rounded-full">
              <Star className="w-3 h-3 text-amber-500" />
              <span className="text-amber-500 uppercase tracking-widest text-xs font-medium">Premium Production House</span>
              <Star className="w-3 h-3 text-amber-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Flicks Studio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Crafting extraordinary visual narratives that transcend boundaries and define new standards in media production.
            </p>
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
              <Play className="w-5 h-5" />
              <span className="font-medium">View Our Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-amber-500/10 rounded-xl">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span className="text-gray-400 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                    <div className="relative">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="rounded-xl w-full object-cover h-[500px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Ready to Create Your <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Masterpiece</span>?
            </h2>
            <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
              Join the world's most innovative brands in pushing the boundaries of visual storytelling. Let's create something extraordinary together.
            </p>
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
              <span className="font-medium">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaServices;