import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something That{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Lasts
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Looking for a team that goes beyond delivery and stays for the journey? Let's talk about how NEXTIN VISION 
            can support your goals—now and into the future.
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://calendly.com/your-calendly-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule a Strategy Call
            </a>
            <div className="text-gray-400 text-xs">
              Free 30-minute consultation • No commitment required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;