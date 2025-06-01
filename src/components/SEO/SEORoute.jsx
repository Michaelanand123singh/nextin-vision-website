// SEORoute.jsx - SEO Wrapper Component
import React from 'react';
import MetaTags from './MetaTagss';
import { seoData, generateStructuredData } from './StructuredData';

const SEORoute = ({ children, pageKey, customSEO = {} }) => {
  const seo = seoData[pageKey] || seoData.home;
  const structuredData = generateStructuredData(pageKey);
  
  // Merge custom SEO data with defaults
  const finalSEO = {
    ...seo,
    ...customSEO
  };
  
  return (
    <>
      <MetaTags
        title={finalSEO.title}
        description={finalSEO.description}
        keywords={finalSEO.keywords}
        canonicalUrl={finalSEO.canonicalUrl}
        schemaData={structuredData}
        // Add additional MetaTags props as needed
        ogImage={finalSEO.ogImage || "/images/NEXTIN VISION.png"}
        twitterCard="summary_large_image"
        businessName="NEXTIN VISION"
        businessType="IT Services & AI Development Company"
        telephone="+917667925604"
        email="official@nextinvision.com"
      />
      {children}
    </>
  );
};

export default SEORoute;