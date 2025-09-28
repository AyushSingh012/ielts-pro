import React, { useState } from 'react';

const FreeTrialModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    currentLevel: '',
    testDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goals = [
    'University Admission',
    'Work Visa',
    'Professional Registration',
    'Personal Development',
    'Immigration'
  ];

  const levels = [
    'Beginner (Band 4.0-5.0)',
    'Intermediate (Band 5.5-6.5)',
    'Advanced (Band 7.0+)',
    'Not Sure'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStep(3);
    
    // In real app, you would send data to your backend here
    console.log('Free trial signup:', formData);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      goal: '',
      currentLevel: '',
      testDate: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {step === 1 && 'Start Your Free Trial'}
              {step === 2 && 'Personalize Your Trial'}
              {step === 3 && 'Welcome to IELTSPro!'}
            </h2>
            <button 
              onClick={handleClose} 
              className="text-white hover:text-gray-200 text-2xl transition duration-200"
            >
              ×
            </button>
          </div>
          <div className="flex space-x-2 mt-4">
            {[1, 2, 3].map((stepNum) => (
              <div
                key={stepNum}
                className={`h-2 flex-1 rounded-full transition duration-300 ${
                  step >= stepNum ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Welcome & Benefits */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Get Your Personalized IELTS Plan
                </h3>
                <p className="text-gray-600">
                  Start with a free trial class and get a customized study plan tailored to your goals.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid gap-3">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <span className="mr-2">🎁</span> What's Included in Your Free Trial:
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>1 Live Speaking Session with IELTS Expert</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Full Mock Test with Detailed Report</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>AI-Powered Writing Assessment</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Personalized Study Plan</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>7-Day Access to Learning Materials</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm text-center">
                  <strong>Limited Time:</strong> First 50 students get priority scheduling!
                </p>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg transform hover:scale-105 cursor-pointer"
              >
                Continue to Get Started
              </button>

              <p className="text-center text-xs text-gray-500">
                No credit card required • 100% free trial
              </p>
            </div>
          )}

          {/* Step 2: Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  IELTS Goal *
                </label>
                <select
                  required
                  value={formData.goal}
                  onChange={(e) => handleInputChange('goal', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                >
                  <option value="">Select your goal</option>
                  {goals.map((goal, index) => (
                    <option key={index} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current English Level *
                </label>
                <select
                  required
                  value={formData.currentLevel}
                  onChange={(e) => handleInputChange('currentLevel', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                >
                  <option value="">Select your level</option>
                  {levels.map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Test Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.testDate}
                  onChange={(e) => handleInputChange('testDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing Your Trial...</span>
                  </div>
                ) : (
                  'Start My Free Trial'
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                By continuing, you agree to our Terms and Privacy Policy
              </p>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🎉</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to IELTSPro!</h3>
                <p className="text-gray-600 mb-4">
                  Your free trial has been activated! Here's what happens next:
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 text-left border border-green-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Check Your Email</p>
                      <p className="text-green-800 text-sm">Login details sent to {formData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Expert Call</p>
                      <p className="text-green-800 text-sm">We'll call you within 2 hours at {formData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">First Session</p>
                      <p className="text-green-800 text-sm">Schedule your speaking practice session</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Pro Tip:</strong> Download our mobile app to access your materials on the go!
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleClose}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                >
                  Start Learning Now
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
                >
                  Close
                </button>
              </div>

              <p className="text-xs text-gray-500">
                Need immediate help? Call us at <strong>+1 (555) 123-4567</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeTrialModal;