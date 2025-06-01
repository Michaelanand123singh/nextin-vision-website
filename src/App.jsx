import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';
import SEORoute from './components/SEO/SEORoute';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/404';

// Import the Career component directly since it's already available
import Career from './pages/Careers';

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

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-orange-400 mt-4 font-medium" role="status" aria-live="polite">Loading...</p>
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
            <SEORoute pageKey="home">
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/services" 
          element={
            <SEORoute pageKey="services">
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <SEORoute pageKey="portfolio">
              <Suspense fallback={<PageLoader />}>
                <Portfolio />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/process" 
          element={
            <SEORoute pageKey="process">
              <Suspense fallback={<PageLoader />}>
                <Process />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <SEORoute pageKey="careers">
              <Career />
            </SEORoute>
          } 
        />
        <Route 
          path="/about" 
          element={
            <SEORoute pageKey="about">
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <SEORoute pageKey="contact">
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/testimonial" 
          element={
            <SEORoute pageKey="testimonials">
              <Suspense fallback={<PageLoader />}>
                <Testimonial />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/media-services" 
          element={
            <SEORoute pageKey="mediaServices">
              <Suspense fallback={<PageLoader />}>
                <MediaServices />
              </Suspense>
            </SEORoute>
          } 
        />
        <Route 
          path="/online-odyssey" 
          element={
            <SEORoute pageKey="onlineOdyssey">
              <Suspense fallback={<PageLoader />}>
                <OnlineOdyssey />
              </Suspense>
            </SEORoute>
          } 
        />
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
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