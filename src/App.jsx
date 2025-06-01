import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import SEOHead from './components/SEO/SEO.Head';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';
import { seoData, generateStructuredData } from './components/SEO/StructuredData';

// Import the Career component directly since it's already available
import Career from './pages/Careers'; // Adjust path as needed

// Lazy load main pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Process = React.lazy(() => import('./pages/ProcessPage'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Testimonial = React.lazy(() => import('./pages/Testimonial'));
const MediaServices = React.lazy(() => import('./pages/MediaServices'));
const OnlineOdyssey = React.lazy(() => import('./pages/OnlineOdyssey'));

// SEO Wrapper Component
const SEOWrapper = ({ children, pageKey }) => {
  const seo = seoData[pageKey] || seoData.home;
  const structuredData = generateStructuredData(pageKey);
  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={structuredData}
      />
      {children}
    </>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
          <SEOHead
            title="Error - NEXTIN VISION"
            description="An error occurred on our website. Please try refreshing the page."
            canonicalUrl="https://nextinvision.com/error"
          />
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-400 mb-6">We encountered an unexpected error. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Refresh the page"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loading component with premium styling
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-orange-400 mt-4 font-medium">Loading...</p>
    </div>
  </div>
);

// 404 Page Component
const NotFoundPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
    <SEOHead
      title="Page Not Found - NEXTIN VISION"
      description="The page you're looking for doesn't exist. Return to NEXTIN VISION's homepage to explore our digital marketing and web development services."
      canonicalUrl="https://nextinvision.com/404"
    />
    <div className="text-center p-8 max-w-md mx-auto">
      <div className="text-8xl mb-4">🚀</div>
      <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <a
        href="/"
        className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Return to homepage"
      >
        Go Home
      </a>
    </div>
  </div>
);

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Main Pages with SEO */}
        <Route 
          path="/" 
          element={
            <SEOWrapper pageKey="home">
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/services" 
          element={
            <SEOWrapper pageKey="services">
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <SEOWrapper pageKey="portfolio">
              <Suspense fallback={<PageLoader />}>
                <Portfolio />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/process" 
          element={
            <SEOWrapper pageKey="process">
              <Suspense fallback={<PageLoader />}>
                <Process />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <SEOWrapper pageKey="careers">
              <Career />
            </SEOWrapper>
          } 
        />
        <Route 
          path="/about" 
          element={
            <SEOWrapper pageKey="about">
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <SEOWrapper pageKey="contact">
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/testimonials" 
          element={
            <SEOWrapper pageKey="testimonials">
              <Suspense fallback={<PageLoader />}>
                <Testimonial />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/media-services" 
          element={
            <SEOWrapper pageKey="mediaServices">
              <Suspense fallback={<PageLoader />}>
                <MediaServices />
              </Suspense>
            </SEOWrapper>
          } 
        />
        <Route 
          path="/online-odyssey" 
          element={
            <SEOWrapper pageKey="onlineOdyssey">
              <Suspense fallback={<PageLoader />}>
                <OnlineOdyssey />
              </Suspense>
            </SEOWrapper>
          } 
        />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;