// SEO Data Configuration for all pages
export const seoData = {
  home: {
    title: "NEXTIN VISION - Digital Marketing & Web Development Agency",
    description: "Transform your business with NEXTIN VISION's comprehensive digital marketing, web development, and creative services. Expert team delivering results-driven solutions for startups and enterprises.",
    keywords: "digital marketing agency, web development, SEO services, social media marketing, brand design, NEXTIN VISION, online marketing, website design",
    canonicalUrl: "https://nextinvision.com/"
  },
  
  services: {
    title: "Our Services - Digital Marketing & Web Development | NEXTIN VISION",
    description: "Explore NEXTIN VISION's comprehensive services: web development, digital marketing, SEO, social media management, brand design, and creative solutions tailored for your business growth.",
    keywords: "digital marketing services, web development services, SEO optimization, social media marketing, brand design services, creative agency services",
    canonicalUrl: "https://nextinvision.com/services"
  },
  
  portfolio: {
    title: "Our Portfolio - Successful Projects & Case Studies | NEXTIN VISION",
    description: "Discover NEXTIN VISION's portfolio of successful digital marketing campaigns, web development projects, and creative solutions that drove real business results for our clients.",
    keywords: "digital marketing portfolio, web development projects, case studies, client success stories, NEXTIN VISION work",
    canonicalUrl: "https://nextinvision.com/portfolio"
  },
  
  about: {
    title: "About Us - Meet the NEXTIN VISION Team | Digital Marketing Experts",
    description: "Learn about NEXTIN VISION's mission, values, and expert team. We're passionate about delivering innovative digital marketing and web development solutions that drive business growth.",
    keywords: "about NEXTIN VISION, digital marketing team, web development experts, company mission, agency values",
    canonicalUrl: "https://nextinvision.com/about"
  },
  
  contact: {
    title: "Contact Us - Get Your Free Consultation | NEXTIN VISION",
    description: "Ready to transform your digital presence? Contact NEXTIN VISION today for a free consultation. Let's discuss your digital marketing and web development needs.",
    keywords: "contact NEXTIN VISION, free consultation, digital marketing consultation, web development quote, get in touch",
    canonicalUrl: "https://nextinvision.com/contact"
  },
  
  process: {
    title: "Our Process - How We Deliver Results | NEXTIN VISION",
    description: "Discover NEXTIN VISION's proven process for delivering successful digital marketing and web development projects. From strategy to execution, we ensure your success.",
    keywords: "digital marketing process, web development methodology, project management, client onboarding, NEXTIN VISION approach",
    canonicalUrl: "https://nextinvision.com/process"
  },
  
  careers: {
    title: "Careers - Join the NEXTIN VISION Team | Digital Marketing Jobs",
    description: "Join NEXTIN VISION's growing team! Explore exciting career opportunities in digital marketing, web development, and creative services. Apply now and grow with us.",
    keywords: "digital marketing jobs, web development careers, creative agency jobs, NEXTIN VISION careers, marketing employment",
    canonicalUrl: "https://nextinvision.com/careers"
  },
  
  testimonials: {
    title: "Client Testimonials - Success Stories | NEXTIN VISION",
    description: "Read what our clients say about NEXTIN VISION's digital marketing and web development services. Discover how we've helped businesses achieve their goals.",
    keywords: "client testimonials, customer reviews, success stories, NEXTIN VISION reviews, digital marketing results",
    canonicalUrl: "https://nextinvision.com/testimonials"
  },
  
  mediaServices: {
    title: "Media Services - Creative Content & Production | NEXTIN VISION",
    description: "Elevate your brand with NEXTIN VISION's media services. From video production to graphic design, we create compelling content that engages your audience.",
    keywords: "media services, video production, graphic design, content creation, creative services, brand media",
    canonicalUrl: "https://nextinvision.com/media-services"
  },
  
  onlineOdyssey: {
    title: "Online Odyssey - Digital Transformation Journey | NEXTIN VISION",
    description: "Embark on your digital transformation journey with NEXTIN VISION's Online Odyssey. Comprehensive digital solutions for modern businesses.",
    keywords: "online odyssey, digital transformation, digital journey, comprehensive digital solutions, business transformation",
    canonicalUrl: "https://nextinvision.com/online-odyssey"
  }
};

// Structured Data Templates
export const structuredDataTemplates = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEXTIN VISION",
    "url": "https://nextinvision.com",
    "logo": "https://nextinvision.com/images/NEXTIN VISION.png",
    "description": "Digital marketing and web development agency providing comprehensive solutions for business growth",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add your social media URLs here
      // "https://www.facebook.com/nextinvision",
      // "https://www.linkedin.com/company/nextinvision",
      // "https://www.instagram.com/nextinvision"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NEXTIN VISION",
    "url": "https://nextinvision.com",
    "description": "Digital marketing and web development agency",
    "publisher": {
      "@type": "Organization",
      "name": "NEXTIN VISION"
    }
  },
  
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Comprehensive digital marketing and web development services",
    "provider": {
      "@type": "Organization",
      "name": "NEXTIN VISION"
    },
    "serviceType": "Digital Marketing",
    "areaServed": "Worldwide"
  }
};

// Generate page-specific structured data
export const generateStructuredData = (pageType, additionalData = {}) => {
  const baseData = structuredDataTemplates.organization;
  
  switch (pageType) {
    case 'home':
      return [baseData, structuredDataTemplates.website];
    
    case 'services':
      return [baseData, structuredDataTemplates.service];
    
    case 'about':
      return [baseData, {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About NEXTIN VISION",
        "description": "Learn about our digital marketing and web development agency"
      }];
    
    case 'contact':
      return [baseData, {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact NEXTIN VISION",
        "description": "Get in touch with our digital marketing experts"
      }];
    
    default:
      return [baseData];
  }
};