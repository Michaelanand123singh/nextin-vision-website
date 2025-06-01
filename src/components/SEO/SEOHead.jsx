import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "NEXTIN VISION - IT Services, Agentic AI Development & ERP Solutions",
  description = "Transform your business with NEXTIN VISION's professional IT services, cutting-edge agentic AI development, ERP software implementations, and comprehensive digital solutions. Expert team delivering enterprise-grade results.",
  keywords = "IT services, agentic AI development, ERP solutions, software implementation, digital transformation, enterprise solutions, artificial intelligence, business automation, machine learning, cloud solutions, NEXTIN VISION",
  canonicalUrl = "https://nextinvision.com",
  ogImage = "/images/NEXTIN VISION.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  author = "NEXTIN VISION",
  structuredData = null
}) => {
  const fullTitle = title.includes('NEXTIN VISION') ? title : `${title} | NEXTIN VISION`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="NEXTIN VISION - IT Services, Agentic AI Development & ERP Solutions" />
      <meta property="og:site_name" content="NEXTIN VISION" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="NEXTIN VISION - IT Services & AI Development Company" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      <meta name="application-name" content="NEXTIN VISION" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEOHead;