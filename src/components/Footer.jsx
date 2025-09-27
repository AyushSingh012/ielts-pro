import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">IELTSPro Academy</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Your pathway to IELTS success. We provide comprehensive training, 
              expert guidance, and cutting-edge technology to help you achieve 
              your desired band score.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">📧</div>
              <div className="bg-green-600 p-2 rounded-lg">📱</div>
              <div className="bg-purple-600 p-2 rounded-lg">💬</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#features" className="hover:text-white transition">Courses</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +91 62031 66587</li>
              <li>📧 info@ieltspro.com</li>
              <li>📍 BTM 1st Stage, Bengaluru</li>
              <li>🌐 www.ieltspro.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IELTSPro Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;