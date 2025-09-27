import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="large" text="Welcome to IELTSPro Academy" />
        <div className="mt-4 text-gray-600 text-sm">
          Preparing your learning experience...
        </div>
      </div>
    </div>
  );
};

export default PageLoader;