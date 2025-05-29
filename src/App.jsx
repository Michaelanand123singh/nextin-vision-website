import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

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
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-400 mb-6">We encountered an unexpected error. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route 
          path="/" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Portfolio />
            </Suspense>
          } 
        />
        <Route 
          path="/process" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Process />
            </Suspense>
          } 
        />
        <Route 
          path="/careers" 
          element={<Career />} 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } 
        />
        <Route 
          path="/testimonials" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Testimonial />
            </Suspense>
          } 
        />
        <Route 
          path="/media-services" 
          element={
            <Suspense fallback={<PageLoader />}>
              <MediaServices />
            </Suspense>
          } 
        />
        <Route 
          path="/online-odyssey" 
          element={
            <Suspense fallback={<PageLoader />}>
              <OnlineOdyssey />
            </Suspense>
          } 
        />
        
        {/* 404 Page */}
        <Route 
          path="*" 
          element={
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
              <div className="text-center p-8 max-w-md mx-auto">
                <div className="text-8xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
                <a
                  href="/"
                  className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Go Home
                </a>
              </div>
            </div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
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
  );
};

export default App;