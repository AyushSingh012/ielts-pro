import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ImageLoader from './ImageLoader';
import LoadingSpinner from './LoadingSpinner';
import studentImage from '../images/student-learning.png';
import FreeTrialModal from './FreeTrialModal';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTrialModal, setShowTrialModal] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="large" text="Preparing your IELTS journey..." />
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Achieve Your <span className="text-blue-600">Dream IELTS</span> Score
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of successful students with our proven teaching methods, 
                expert instructors, and personalized learning approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowTrialModal(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-center transform hover:scale-105 cursor-pointer"
                >
                  Start Free Trial
                </button>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 text-center cursor-pointer"
                >
                  Book Consultation
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span> 98% Success Rate
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span> Expert Trainers
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span> Flexible Schedule
                </div>
              </div>
            </div>

            {/* Right Image with Loading */}
            <div className="relative">
              <div className="bg-blue-500 rounded-2xl p-2 transform rotate-3">
                <div className="bg-white rounded-xl p-4 transform -rotate-3 shadow-2xl">
                  <ImageLoader 
                    src={studentImage}
                    alt="Students learning IELTS with IELTSPro Academy" 
                    className="rounded-lg w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Modal */}
      <FreeTrialModal 
        isOpen={showTrialModal} 
        onClose={() => setShowTrialModal(false)} 
      />
    </>
  );
};

export default Hero;