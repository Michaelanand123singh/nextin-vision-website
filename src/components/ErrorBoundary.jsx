// ErrorBoundary.jsx - Error Boundary Component
import React from 'react';
import MetaTags from '../components/SEO/MetaTagss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
          <MetaTags
            title="Error - NEXTIN VISION"
            description="An error occurred on our website. Please try refreshing the page or contact our IT support team."
            canonicalUrl="https://nextinvision.com/error"
            robots="noindex, nofollow"
          />
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4" role="img" aria-label="Warning">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-400 mb-6">We encountered an unexpected error. Please try refreshing the page or contact our support team.</p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Refresh the page"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="block w-full bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                aria-label="Return to homepage"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;