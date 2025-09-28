import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import LoadingSpinner from './LoadingSpinner';
import FreeTrialModal from './FreeTrialModal';

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [stats, setStats] = useState([]);
  const [showTrialModal, setShowTrialModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 600));

      const testimonialsData = [
        {
          name: 'Sarah Chen',
          score: 'Band 8.5',
          course: 'Academic IELTS',
          image: '👩',
          text: 'The speaking practice sessions were incredible! I improved from Band 6.5 to 8.0 in just 2 months.',
        },
        {
          name: 'David Martinez',
          score: 'Band 9.0',
          course: 'General Training',
          image: '👨',
          text: 'The mock tests accurately predicted my score. The detailed feedback helped me identify my weak areas.',
        },
        {
          name: 'Priya Sharma',
          score: 'Band 8.0',
          course: 'Academic IELTS',
          image: '👩',
          text: 'Expert tutors provided personalized strategies that made all the difference. Highly recommended!',
        }
      ];

      const statsData = [
        { value: '5000+', label: 'Students Trained' },
        { value: '98%', label: 'Success Rate' },
        { value: '150+', label: 'Expert Tutors' },
        { value: '4.9/5', label: 'Student Rating' }
      ];

      setTestimonials(testimonialsData);
      setStats(statsData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSpinner text="Loading success stories..." />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Hear from our students who achieved their dream scores
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                        {testimonial.score}
                      </span>
                      {testimonial.course}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of students who transformed their IELTS scores with our proven methods. 
                Your success story starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowTrialModal(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Start Free Trial Now
                </button>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-center cursor-pointer"
                >
                  Book Expert Consultation
                </Link>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                No credit card required • 7-day free access
              </p>
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

export default Testimonials;