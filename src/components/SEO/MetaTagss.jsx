import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({
  // Basic SEO Props
  title,
  description,
  keywords,
  author = "NEXTIN VISION",
  
  // URL and Canonical
  canonicalUrl,
  alternateUrls = [],
  
  // Open Graph Props
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogType = "website",
  ogUrl,
  ogSiteName = "NEXTIN VISION",
  ogLocale = "en_US",
  
  // Twitter Card Props
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  twitterSite,
  twitterCreator,
  
  // Additional Meta Props
  robots = "index, follow",
  googlebot = "index, follow",
  language = "English",
  revisitAfter = "7 days",
  distribution = "global",
  rating = "general",
  
  // Schema/Structured Data
  schemaData,
  
  // Performance & Technical
  preconnectUrls = [],
  prefetchUrls = [],
  dnsPrefetchUrls = [],
  
  // Custom Meta Tags
  customMeta = [],
  
  // Page-specific props
  pageType = "website",
  isArticle = false,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTags = [],
  
  // Business/Local SEO
  businessName,
  businessType,
  address,
  telephone,
  email,
  
  // Social Media
  facebookAppId,
  
  // Mobile & App
  appleMobileWebAppCapable = "yes",
  appleMobileWebAppTitle,
  appleMobileWebAppStatusBarStyle = "black-translucent",
  mobileOptimized = "width",
  
  // Security & Verification
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification,
  
  // Content Security
  contentSecurityPolicy,
  
  // Accessibility
  skipLinks = false
}) => {
  // Use provided values or fall back to updated defaults
  const finalTitle = title || "NEXTIN VISION - IT Services, Agentic AI Development & ERP Solutions";
  const finalDescription = description || "Transform your business with NEXTIN VISION's professional IT services, cutting-edge agentic AI development, ERP software implementations, and comprehensive digital solutions.";
  const finalKeywords = keywords || "IT services, agentic AI development, ERP solutions, software implementation, digital transformation, enterprise solutions, artificial intelligence, business automation, machine learning, cloud solutions";
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalTwitterTitle = twitterTitle || finalTitle;
  const finalTwitterDescription = twitterDescription || finalDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={googlebot} />
      <meta name="language" content={language} />
      <meta name="revisit-after" content={revisitAfter} />
      <meta name="distribution" content={distribution} />
      <meta name="rating" content={rating} />
      
      {/* Canonical and Alternate URLs */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {alternateUrls.map((url, index) => (
        <link key={index} rel="alternate" href={url.href} hrefLang={url.hrefLang} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={isArticle ? "article" : ogType} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Article-specific Open Graph */}
      {isArticle && (
        <>
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
          {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleTags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Facebook */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content={appleMobileWebAppCapable} />
      {appleMobileWebAppTitle && <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />}
      <meta name="apple-mobile-web-app-status-bar-style" content={appleMobileWebAppStatusBarStyle} />
      <meta name="MobileOptimized" content={mobileOptimized} />
      <meta name="HandheldFriendly" content="true" />
      
      {/* Theme and App Manifest */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      <meta name="msapplication-navbutton-color" content="#f97316" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#f97316" />
      
      {/* Business Information (Local SEO) */}
      {businessName && <meta name="business:contact_data:business_name" content={businessName} />}
      {businessType && <meta name="business:contact_data:business_type" content={businessType} />}
      {address && <meta name="business:contact_data:street_address" content={address} />}
      {telephone && <meta name="business:contact_data:phone_number" content={telephone} />}
      {email && <meta name="business:contact_data:email" content={email} />}
      
      {/* Search Engine Verification */}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      {bingSiteVerification && <meta name="msvalidate.01" content={bingSiteVerification} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}
      
      {/* Security */}
      {contentSecurityPolicy && <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />}
      
      {/* Performance Optimization - Preconnect */}
      {preconnectUrls.map((url, index) => (
        <link key={index} rel="preconnect" href={url} />
      ))}
      
      {/* Performance Optimization - DNS Prefetch */}
      {dnsPrefetchUrls.map((url, index) => (
        <link key={index} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Performance Optimization - Prefetch */}
      {prefetchUrls.map((url, index) => (
        <link key={index} rel="prefetch" href={url} />
      ))}
      
      {/* Default Performance Links */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data / Schema */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
      
      {/* Custom Meta Tags */}
      {customMeta.map((meta, index) => {
        if (meta.property) {
          return <meta key={index} property={meta.property} content={meta.content} />;
        } else if (meta.name) {
          return <meta key={index} name={meta.name} content={meta.content} />;
        } else if (meta.httpEquiv) {
          return <meta key={index} httpEquiv={meta.httpEquiv} content={meta.content} />;
        }
        return null;
      })}
      
      {/* Accessibility - Skip Links */}
      {skipLinks && (
        <style>{`
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 9999;
          }
          .skip-link:focus {
            top: 6px;
          }
        `}</style>
      )}
    </Helmet>
  );
};

// Usage Examples and PropTypes Documentation
MetaTags.examples = {
  // Basic Usage
  basic: `
    <MetaTags
      title="About Us | NEXTIN VISION"
      description="Learn about our IT services team and our expertise in agentic AI development and ERP solutions"
      keywords="about, team, IT services, AI development, ERP solutions"
      canonicalUrl="https://nextinvision.com/about"
    />
  `,
  
  // Services Page Usage
  services: `
    <MetaTags
      title="IT Services & AI Development | NEXTIN VISION"
      description="Professional IT services including agentic AI development, ERP implementations, and digital transformation solutions"
      keywords="IT services, agentic AI development, ERP software, enterprise solutions, digital transformation"
      canonicalUrl="https://nextinvision.com/services"
      businessName="NEXTIN VISION"
      businessType="IT Services Company"
    />
  `,
  
  // Advanced Usage with Article
  article: `
    <MetaTags
      title="The Future of Agentic AI in Enterprise Solutions"
      description="Explore how agentic AI is transforming business processes and ERP systems"
      isArticle={true}
      articleAuthor="NEXTIN VISION Team"
      articlePublishedTime="2025-06-01T10:00:00Z"
      articleModifiedTime="2025-06-01T12:00:00Z"
      articleSection="AI Technology"
      articleTags={["Agentic AI", "Enterprise Solutions", "ERP", "Digital Transformation"]}
      ogImage="https://nextinvision.com/images/ai-article-cover.jpg"
      twitterCard="summary_large_image"
    />
  `,
  
  // Business/Local SEO
  business: `
    <MetaTags
      title="Contact NEXTIN VISION - IT Services & AI Development"
      description="Get in touch with our expert team for IT services, agentic AI development, and ERP solutions"
      businessName="NEXTIN VISION"
      businessType="IT Services & AI Development Company"
      address="Your Business Address"
      telephone="+917667925604"
      email="official@nextinvision.com"
      keywords="contact, IT services, AI development, ERP solutions, enterprise software"
    />
  `,
  
  // Portfolio Page Usage
  portfolio: `
    <MetaTags
      title="Our Work - AI Projects & ERP Implementations | NEXTIN VISION"
      description="Explore our portfolio of successful agentic AI projects, ERP implementations, and digital transformation solutions"
      keywords="portfolio, AI projects, ERP implementations, case studies, enterprise solutions"
      canonicalUrl="https://nextinvision.com/portfolio"
    />
  `
};

export default MetaTags;