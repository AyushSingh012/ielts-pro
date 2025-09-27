import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const ImageLoader = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${className}`}>
          <LoadingSpinner size="small" text="" />
        </div>
      )}
      
      {hasError ? (
        <div className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}>
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageLoader;