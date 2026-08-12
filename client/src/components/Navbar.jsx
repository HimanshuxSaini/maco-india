import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'MANUFACTURING', path: '/facilities' },
    { name: 'QUALITY', path: '/quality' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-6xl bg-[#111316]/80 backdrop-blur-md shadow-lg border border-white/10 rounded-full">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <img src="/maco logo white.png" alt="MACO Logo" className="h-8 md:h-10 w-auto object-contain" />
                <span className="text-xl md:text-2xl font-black text-maco-red tracking-widest">MACO</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-semibold tracking-wider transition-colors duration-200 h-16 flex items-center border-b-2 ${
                    location.pathname === link.path 
                    ? 'text-maco-red border-maco-red' 
                    : 'text-gray-300 hover:text-white border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Language Selector */}
              <div className="flex items-center pl-6 border-l border-white/20 h-6 cursor-pointer hover:opacity-80 transition-opacity">
                <img src="https://flagcdn.com/w20/nl.png" alt="Dutch" className="w-5 h-5 rounded-full object-cover shadow-sm mr-2" />
                <span className="text-white text-xs font-semibold tracking-wider mr-1">LN</span>
                <ChevronDown className="h-4 w-4 text-white" />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 overflow-hidden rounded-b-3xl bg-[#111316]/95 backdrop-blur-md"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-semibold tracking-wide ${
                      location.pathname === link.path
                      ? 'text-maco-red bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Mobile Language Selector */}
                <div className="mt-4 pt-4 border-t border-white/10 px-3 flex items-center">
                  <img src="https://flagcdn.com/w20/nl.png" alt="Dutch" className="w-5 h-5 rounded-full object-cover shadow-sm mr-3" />
                  <span className="text-white text-sm font-semibold tracking-wider mr-1">LN</span>
                  <ChevronDown className="h-4 w-4 text-white" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;
