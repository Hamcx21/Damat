import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">🎲</span>
              </div>
              <h3 className="text-xl font-bold text-red-400">DAMAT</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Malaysia's first arithmetic board game developed by a local university. 
              Making math fun for kids aged 6 to 12 through interactive gameplay.
            </p>
            <div className="text-sm text-gray-400">
              <p>Developed by Universiti Malaysia Perlis (UniMAP)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link to="/educators" className="text-gray-300 hover:text-yellow-400 transition-colors">For Educators</Link></li>
              <li><Link to="/try-demo" className="text-gray-300 hover:text-yellow-400 transition-colors">Try Demo</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">📧 mazjamilah@unimap.edu.my</p>
              <div className="text-sm">
                <p className="font-medium mb-1">WhatsApp:</p>
                <p>Maz: 019-3575769</p>
                <p>Murni: 019-4734736</p>
                <p>Shiha: 013-3911839</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 DAMAT. All rights reserved. Developed by Universiti Malaysia Perlis (UniMAP).
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-2xl">🇲🇾</span>
              <span className="text-sm text-gray-400">Made in Malaysia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;