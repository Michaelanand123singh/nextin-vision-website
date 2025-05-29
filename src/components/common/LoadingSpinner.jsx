import React from 'react';

const LoadingSpinner = ({ 
  size = "md",
  variant = "default", 
  color = "blue",
  speed = "normal",
  text,
  className = "",
  ...props 
}) => {
  // Size configurations
  const sizeConfig = {
    xs: "w-4 h-4",
    sm: "w-6 h-6", 
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  // Speed configurations
  const speedConfig = {
    slow: "animate-spin [animation-duration:2s]",
    normal: "animate-spin",
    fast: "animate-spin [animation-duration:0.5s]"
  };

  // Color configurations
  const colorConfig = {
    blue: "text-blue-500",
    purple: "text-purple-500", 
    green: "text-green-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
    gray: "text-gray-500",
    white: "text-white",
    current: "text-current"
  };

  // Text size based on spinner size
  const textSizeConfig = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg",
    xl: "text-xl"
  };

  const renderSpinner = () => {
    const baseClasses = `${sizeConfig[size]} ${speedConfig[speed]} ${colorConfig[color]}`;
    
    switch (variant) {
      case "dots":
        return (
          <div className={`flex space-x-1 ${baseClasses.replace('animate-spin', '')}`}>
            <div className={`w-2 h-2 ${colorConfig[color]} bg-current rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
            <div className={`w-2 h-2 ${colorConfig[color]} bg-current rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
            <div className={`w-2 h-2 ${colorConfig[color]} bg-current rounded-full animate-bounce`}></div>
          </div>
        );
      
      case "pulse":
        return (
          <div className={`${baseClasses.replace('animate-spin', 'animate-pulse')} bg-current rounded-full opacity-75`}></div>
        );
      
      case "bars":
        return (
          <div className={`flex space-x-1 ${baseClasses.replace('animate-spin', '')}`}>
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className={`w-1 ${sizeConfig[size].split(' ')[1]} ${colorConfig[color]} bg-current animate-pulse`}
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        );
      
      case "ring":
        return (
          <div className={`${baseClasses} border-4 border-current border-t-transparent rounded-full`}></div>
        );
      
      case "gradient":
        return (
          <svg className={baseClasses} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="url(#spinner-gradient)" 
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        );
      
      default:
        return (
          <svg className={baseClasses} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );
    }
  };

  return (
    <div 
      role="status" 
      className={`inline-flex flex-col items-center justify-center ${className}`}
      {...props}
    >
      {renderSpinner()}
      {text && (
        <span className={`mt-2 ${textSizeConfig[size]} ${colorConfig[color]} font-medium`}>
          {text}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};


export default LoadingSpinner;