import React from 'react';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IET-DAVV</h3>
                <p className="text-gray-400">Institute of Engineering & Technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering future engineers through innovative education, cutting-edge research, 
              and industry partnerships since our establishment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Khandwa Road, Indore, Madhya Pradesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 731 2570000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@ietdavv.edu.in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Academics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Campus Life</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Student Corner</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Placements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Clubs & Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Alumni</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 IET-DAVV. All rights reserved. | Designed with innovation and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;