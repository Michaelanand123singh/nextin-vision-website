import React from 'react';
import { Play, Camera, Cube, Sparkles, ArrowRight, Star } from 'lucide-react';

const MediaServices = () => {
  const services = [
    {
      title: "Enterprise-Level Video Production",
      description: "Elevating brand narratives through cinematic storytelling and premium production values, combining technical excellence with creative vision.",
      icon: <Camera className="w-6 h-6 text-orange-400" />,
      features: [
        "Award-winning cinematography and directing talent",
        "State-of-the-art equipment and facilities",
        "End-to-end production management",
        "Global production capabilities"
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "3D & VFX Excellence",
      description: "Creating immersive visual experiences through cutting-edge 3D animation and visual effects, pushing the boundaries of digital storytelling.",
      icon: <Cube className="w-6 h-6 text-orange-400" />,
      features: [
        "Photorealistic 3D modeling and animation",
        "Custom VFX solutions for film and advertising",
        "Interactive AR/VR experiences",
        "Advanced motion capture technology"
      ],
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "AI-Enhanced Content Creation",
      description: "Pioneering the future of content production with advanced AI technologies, blending artificial intelligence with human creativity.",
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      features: [
        "Custom AI content generation pipelines",
        "Automated video processing solutions",
        "Deep learning-based visual effects",
        "AI-powered content personalization"
      ],
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 to-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 uppercase tracking-wider text-xs font-medium">Premium Production House</span>
              <Star className="w-4 h-4 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Flicks Studio</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Where visionary storytelling meets technical excellence. Creating extraordinary visual experiences for global brands.
            </p>
            <button className="group bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 mx-auto text-sm">
              <Play className="w-4 h-4" />
              Experience Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-900/30 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-800/50 rounded-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1 h-1 bg-orange-400 rounded-full mt-2" />
                          <span className="text-gray-400 text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
                    <div className="relative">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="rounded-lg w-full object-cover h-64 md:h-72"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to Create <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Something Extraordinary?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Join forces with our award-winning team to bring your creative vision to life.
          </p>
          <button className="group bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 mx-auto text-sm">
            Begin Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MediaServices;