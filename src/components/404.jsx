// NotFoundPage.jsx - 404 Page Component
import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTagss';

const NotFound = () => {
  const structuredData404 = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - NEXTIN VISION",
    "description": "The requested page could not be found on NEXTIN VISION website",
    "url": "https://nextinvision.com/404",
    "mainEntity": {
      "@type": "Organization",
      "name": "NEXTIN VISION",
      "url": "https://nextinvision.com"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
      <MetaTags
        title="404 - Page Not Found | NEXTIN VISION"
        description="The page you're looking for doesn't exist. Return to NEXTIN VISION's homepage to explore our IT services, agentic AI development, and ERP solutions."
        canonicalUrl="https://nextinvision.com/404"
        robots="noindex, nofollow"
        schemaData={structuredData404}
      />
      <div className="text-center p-8 max-w-lg mx-auto">
        <div className="text-8xl mb-6" role="img" aria-label="Rocket">🚀</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track!
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Return to homepage"
          >
            Go Home
          </Link>
          <div className="flex gap-3">
            <Link
              to="/services"
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Popular Pages */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <h2 className="text-white text-lg font-semibold mb-4">Popular Pages</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/portfolio" className="text-orange-400 hover:text-orange-300 transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-orange-400 hover:text-orange-300 transition-colors">
              About Us
            </Link>
            <Link to="/process" className="text-orange-400 hover:text-orange-300 transition-colors">
              Our Process
            </Link>
            <Link to="/careers" className="text-orange-400 hover:text-orange-300 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;