// SEO Data Configuration for all pages - Updated for IT Services & Agentic AI
export const seoData = {
  home: {
    title: "NEXTIN VISION - IT Services, Agentic AI Development & ERP Solutions",
    description: "Transform your business with NEXTIN VISION's comprehensive IT services, agentic AI development, ERP software implementations, and digital marketing solutions. Expert team delivering innovative technology solutions for enterprises.",
    keywords: "IT services, agentic AI development, ERP software implementation, digital transformation, artificial intelligence solutions, enterprise software, business automation, NEXTIN VISION",
    canonicalUrl: "https://nextinvision.com/"
  },
  
  services: {
    title: "Our Services - IT Solutions, AI Development & ERP Implementation | NEXTIN VISION",
    description: "Explore NEXTIN VISION's comprehensive IT services: agentic AI development, ERP software implementations, digital transformation, automation solutions, and digital marketing tailored for enterprise growth.",
    keywords: "IT services, agentic AI development, ERP implementation, enterprise resource planning, artificial intelligence, business automation, digital transformation services",
    canonicalUrl: "https://nextinvision.com/services"
  },
  
  portfolio: {
    title: "Our Portfolio - AI Projects & ERP Implementations | NEXTIN VISION",
    description: "Discover NEXTIN VISION's portfolio of successful agentic AI developments, ERP implementations, digital transformation projects, and IT solutions that drove real business results for enterprises.",
    keywords: "AI development portfolio, ERP implementation projects, digital transformation case studies, enterprise software solutions, NEXTIN VISION work",
    canonicalUrl: "https://nextinvision.com/portfolio"
  },
  
  about: {
    title: "About Us - Meet the NEXTIN VISION Team | IT & AI Experts",
    description: "Learn about NEXTIN VISION's mission, values, and expert team. We're passionate about delivering innovative IT services, agentic AI solutions, and ERP implementations that drive digital transformation.",
    keywords: "about NEXTIN VISION, IT services team, AI development experts, ERP specialists, company mission, technology innovation",
    canonicalUrl: "https://nextinvision.com/about"
  },
  
  contact: {
    title: "Contact Us - Get Your Free IT Consultation | NEXTIN VISION",
    description: "Ready to transform your business with AI and ERP solutions? Contact NEXTIN VISION today for a free consultation. Let's discuss your IT services and digital transformation needs.",
    keywords: "contact NEXTIN VISION, free IT consultation, AI development consultation, ERP implementation quote, enterprise solutions",
    canonicalUrl: "https://nextinvision.com/contact"
  },
  
  process: {
    title: "Our Process - How We Deliver IT Solutions | NEXTIN VISION",
    description: "Discover NEXTIN VISION's proven process for delivering successful agentic AI developments, ERP implementations, and IT transformation projects. From analysis to deployment, we ensure your success.",
    keywords: "IT project process, AI development methodology, ERP implementation process, digital transformation approach, NEXTIN VISION methodology",
    canonicalUrl: "https://nextinvision.com/process"
  },
  
  careers: {
    title: "Careers - Join the NEXTIN VISION Team | IT & AI Jobs",
    description: "Join NEXTIN VISION's growing team! Explore exciting career opportunities in IT services, agentic AI development, ERP implementation, and digital transformation. Apply now and grow with cutting-edge technology.",
    keywords: "IT jobs, AI developer careers, ERP consultant jobs, software engineer positions, NEXTIN VISION careers, technology employment",
    canonicalUrl: "https://nextinvision.com/careers"
  },
  
  testimonials: {
    title: "Client Testimonials - IT & AI Success Stories | NEXTIN VISION",
    description: "Read what our clients say about NEXTIN VISION's IT services, agentic AI solutions, and ERP implementations. Discover how we've helped enterprises achieve digital transformation.",
    keywords: "client testimonials, IT services reviews, AI implementation success stories, ERP project testimonials, digital transformation results",
    canonicalUrl: "https://nextinvision.com/testimonials"
  },
  
  mediaServices: {
    title: "Media Services - Technical Content & Documentation | NEXTIN VISION",
    description: "Elevate your technical communication with NEXTIN VISION's media services. From technical documentation to training materials, we create compelling content for IT and AI solutions.",
    keywords: "technical media services, IT documentation, AI training materials, technical content creation, enterprise communication",
    canonicalUrl: "https://nextinvision.com/media-services"
  },
  
  onlineOdyssey: {
    title: "Online Odyssey - Digital Transformation Journey | NEXTIN VISION",
    description: "Embark on your digital transformation journey with NEXTIN VISION's Online Odyssey. Comprehensive IT solutions, AI integration, and ERP implementations for modern enterprises.",
    keywords: "online odyssey, digital transformation, AI integration journey, ERP transformation, enterprise modernization, technology adoption",
    canonicalUrl: "https://nextinvision.com/online-odyssey"
  }
};

// Structured Data Templates - Updated for IT Services
export const structuredDataTemplates = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEXTIN VISION",
    "url": "https://nextinvision.com",
    "logo": "https://nextinvision.com/images/NEXTIN VISION.png",
    "description": "IT services company specializing in agentic AI development, ERP software implementations, and digital transformation solutions for enterprises",
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
      // "https://www.linkedin.com/company/nextinvision",
      // "https://github.com/nextinvision",
      // "https://twitter.com/nextinvision"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Information Technology",
    "specialties": [
      "Agentic AI Development",
      "ERP Software Implementation",
      "Digital Transformation",
      "Enterprise Solutions",
      "Business Automation"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NEXTIN VISION",
    "url": "https://nextinvision.com",
    "description": "IT services company specializing in agentic AI development and ERP implementations",
    "publisher": {
      "@type": "Organization",
      "name": "NEXTIN VISION"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nextinvision.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Services & AI Development",
    "description": "Comprehensive IT services including agentic AI development, ERP implementations, and digital transformation solutions",
    "provider": {
      "@type": "Organization",
      "name": "NEXTIN VISION"
    },
    "serviceType": "Information Technology Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agentic AI Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Software Implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation"
          }
        }
      ]
    }
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Custom Enterprise Solutions",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "NEXTIN VISION"
    }
  }
};

// Generate page-specific structured data
export const generateStructuredData = (pageType, additionalData = {}) => {
  const baseData = structuredDataTemplates.organization;
  
  switch (pageType) {
    case 'home':
      return [baseData, structuredDataTemplates.website, structuredDataTemplates.service];
    
    case 'services':
      return [baseData, structuredDataTemplates.service, structuredDataTemplates.softwareApplication];
    
    case 'about':
      return [baseData, {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About NEXTIN VISION",
        "description": "Learn about our IT services company specializing in agentic AI development and ERP implementations",
        "mainEntity": {
          "@type": "Organization",
          "name": "NEXTIN VISION",
          "description": "Leading IT services provider for enterprise digital transformation"
        }
      }];
    
    case 'contact':
      return [baseData, {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact NEXTIN VISION",
        "description": "Get in touch with our IT and AI development experts for enterprise solutions"
      }];

    case 'portfolio':
      return [baseData, {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "NEXTIN VISION Portfolio",
        "description": "Showcase of our AI development projects and ERP implementation success stories"
      }];

    case 'careers':
      return [baseData, {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Careers at NEXTIN VISION",
        "description": "Join our team of IT and AI development professionals"
      }];
    
    default:
      return [baseData];
  }
};

// Additional SEO utilities for IT services
export const generateTechStackSchema = (technologies) => {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Technology Stack",
    "about": technologies.map(tech => ({
      "@type": "SoftwareApplication",
      "name": tech
    }))
  };
};

export const generateProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "creator": {
      "@type": "Organization",
      "name": "NEXTIN VISION"
    },
    "dateCreated": project.date,
    "keywords": project.technologies
  };
};