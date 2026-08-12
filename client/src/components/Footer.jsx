import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Clock, Globe, Share2, Link as LinkIcon, MessageSquare, Factory } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-maco-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:pr-4">
            <h3 className="text-3xl font-black mb-6 tracking-wide">
              MACO<span className="text-maco-red">INDIA</span>
            </h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Established in 1956, MACO PRIVATE LIMITED has been developing and manufacturing highly precise automotive and industrial components for over 70 years, building a legacy of trust and unparalleled quality.
            </p>
            <div className="flex space-x-3">
              {[Globe, Share2, LinkIcon, MessageSquare].map((Icon, idx) => (
                <a key={idx} href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-maco-red hover:text-white hover:shadow-[0_0_15px_rgba(237,28,36,0.4)] transition-all duration-300 hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products & Catalog', path: '/products' },
                { name: 'Manufacturing Facilities', path: '/facilities' },
                { name: 'Quality Policy', path: '/quality' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="flex items-center hover:text-maco-red transition-colors group">
                    <span className="h-1.5 w-1.5 bg-maco-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-maco-red/10 transition-colors mr-3 shrink-0">
                  <MapPin className="h-5 w-5 text-maco-red" />
                </div>
                <span className="group-hover:text-gray-200 transition-colors pt-1 text-xs">
                  <strong className="text-white">REGD. HEAD OFFICE:</strong><br />
                  2-A/3, Asaf Ali Rd, Old Delhi, Turkman Gate, Chandni Chowk, New Delhi, Delhi, 110002
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-maco-red/10 transition-colors mr-3 shrink-0">
                  <Factory className="h-5 w-5 text-maco-red" />
                </div>
                <span className="group-hover:text-gray-200 transition-colors pt-1 text-xs">
                  <strong className="text-white">WORK OFFICE:</strong><br />
                  E-24 Industrial Area, Sonepat - 131001 (Haryana), India
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-maco-red/10 transition-colors mr-3 shrink-0">
                  <Phone className="h-5 w-5 text-maco-red" />
                </div>
                <span className="group-hover:text-gray-200 transition-colors">+91 11 23263672, 23273274</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-maco-red/10 transition-colors mr-3 shrink-0">
                  <Mail className="h-5 w-5 text-maco-red" />
                </div>
                <a href="mailto:macoho@maco-india.com" className="hover:text-maco-red transition-colors">macoho@maco-india.com</a>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-maco-red/10 transition-colors mr-3 shrink-0">
                  <Clock className="h-5 w-5 text-maco-red" />
                </div>
                <span className="group-hover:text-gray-200 transition-colors">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Map */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">Stay Updated</h4>
            <form className="flex mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#1a1c23] border border-white/10 text-sm text-white px-4 py-3 w-full rounded-l-lg focus:outline-none focus:border-maco-red/50 transition-colors placeholder:text-gray-600" 
              />
              <button 
                type="submit" 
                className="bg-maco-red hover:bg-red-700 text-white px-5 py-3 rounded-r-lg transition-colors flex items-center justify-center group"
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <h4 className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-widest">Our Locations</h4>
            <div className="space-y-4">
              {/* Head Office Map */}
              <div>
                <p className="text-xs text-maco-red mb-1 font-medium tracking-wide">HEAD OFFICE</p>
                <div className="w-full h-24 rounded-xl overflow-hidden border border-white/10 relative group">
                  <iframe 
                    src="https://maps.google.com/maps?q=2-A/3,%20Asaf%20Ali%20Rd,%20Old%20Delhi,%20Turkman%20Gate,%20Chandni%20Chowk,%20New%20Delhi,%20Delhi,%20110002&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                  ></iframe>
                </div>
              </div>

              {/* Work Office Map */}
              <div>
                <p className="text-xs text-maco-red mb-1 font-medium tracking-wide">WORK OFFICE</p>
                <div className="w-full h-24 rounded-xl overflow-hidden border border-white/10 relative group">
                  <iframe 
                    src="https://maps.google.com/maps?q=E-24%20Industrial%20Area,%20Sonepat%20-%20131001%20(Haryana),%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">COPYRIGHT © {new Date().getFullYear()} Maco Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-maco-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-maco-red transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-maco-red transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
