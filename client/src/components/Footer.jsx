import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111316] border-t border-white/10 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              MACO<span className="text-maco-red">INDIA</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Established in 1956, MACO PRIVATE LIMITED has been developing and manufacturing Piston Pins, Crank Pins and other Pin type items for over three decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-maco-red transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-maco-red transition-colors">Products</Link></li>
              <li><Link to="/facilities" className="hover:text-maco-red transition-colors">Facilities</Link></li>
              <li><Link to="/quality" className="hover:text-maco-red transition-colors">Quality Policy</Link></li>
              <li><Link to="/contact" className="hover:text-maco-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-maco-red shrink-0" />
                <span>Kundan Mansion, 2A/3, Asaf Ali Road, New Delhi-110002 (India)</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-maco-red shrink-0" />
                <span>+91 11 23263672, 23273274</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-maco-red shrink-0" />
                <a href="mailto:macoho@maco-india.com" className="hover:text-white transition-colors">macoho@maco-india.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>COPYRIGHT © {new Date().getFullYear()} Maco Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
