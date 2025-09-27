import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const Features = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [features, setFeatures] = useState([]);

  // Simulate data fetching
  useEffect(() => {
    const fetchFeatures = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const featuresData = [
        {
          icon: '🎤',
          title: 'Speaking Practice',
          description: 'One-on-one speaking sessions with certified IELTS examiners and instant feedback.',
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: '📝',
          title: 'Mock Tests',
          description: 'Full-length simulated tests with detailed performance analysis and band score prediction.',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: '🤖',
          title: 'AI Band Score',
          description: 'Smart AI technology predicts your band score and gives personalized tips to improve.',
          color: 'from-green-500 to-teal-500'
        },
        {
          icon: '👨‍🏫',
          title: 'Expert Tutors',
          description: 'Learn from British Council certified trainers with 10+ years of IELTS teaching experience.',
          color: 'from-orange-500 to-red-500'
        }
      ];
      
      setFeatures(featuresData);
      setIsLoading(false);
    };

    fetchFeatures();
  }, []);

  if (isLoading) {
    return (
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose IELTSPro?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTSPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines technology with expert guidance 
            to ensure your IELTS success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-75 rounded-lg blur transition duration-300 group-hover:opacity-100 group-hover:blur-none"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className={`text-4xl mb-4 w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;