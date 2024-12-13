import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
