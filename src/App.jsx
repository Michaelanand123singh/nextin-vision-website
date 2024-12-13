import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';


// Lazy load main pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Process = React.lazy(() => import('./pages/ProcessPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Testimonial = React.lazy(() => import('./pages/Testimonial'));

// Lazy load detailed service pages
const BrandStoryVideos = React.lazy(() => import('./pages/detailServices/BrandStoryVideos'));
const ProductShowcases = React.lazy(() => import('./pages/detailServices/ProductShowcases'));
const TrainingContent = React.lazy(() => import('./pages/detailServices/TrainingContent'));
const SocialMediaContent = React.lazy(() => import('./pages/detailServices/SocialMediaContent'));
const ExecutiveCommunication = React.lazy(() => import('./pages/detailServices/ExecutiveCommunication'));

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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-premium"
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
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoadingSpinner className="w-12 h-12 text-blue-600" />
  </div>
);

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
        <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><Portfolio /></Suspense>} />
        <Route path="/process" element={<Suspense fallback={<PageLoader />}><Process /></Suspense>} />
        <Route path="/pricing" element={<Suspense fallback={<PageLoader />}><Pricing /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        <Route path="/testimonial" element={<Suspense fallback={<PageLoader />}><Testimonial /></Suspense>} />

        {/* Detailed Service Pages */}
        <Route path="/services/brand-story-videos" element={<Suspense fallback={<PageLoader />}><BrandStoryVideos /></Suspense>} />
        <Route path="/services/product-showcases" element={<Suspense fallback={<PageLoader />}><ProductShowcases /></Suspense>} />
        <Route path="/services/training-content" element={<Suspense fallback={<PageLoader />}><TrainingContent /></Suspense>} />
        <Route path="/services/social-media-content" element={<Suspense fallback={<PageLoader />}><SocialMediaContent /></Suspense>} />
        <Route path="/services/executive-communication" element={<Suspense fallback={<PageLoader />}><ExecutiveCommunication /></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
          <ScrollToTop/>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;