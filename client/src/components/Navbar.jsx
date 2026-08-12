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

              {/* Buy Products Button */}
              <div className="flex items-center pl-6 border-l border-white/20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://macro-project-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-maco-red to-red-700 text-white text-xs font-black tracking-[0.2em] px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-red-500/50 group transition-shadow duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      BUY PRODUCTS
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </a>
                </motion.div>
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
                {/* Mobile Buy Products Button */}
                <div className="mt-4 pt-4 border-t border-white/10 px-3 pb-2">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <a
                      href="https://macro-project-five.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="relative flex justify-center items-center overflow-hidden w-full bg-gradient-to-r from-maco-red to-red-700 text-white py-3.5 rounded-xl text-sm font-black tracking-[0.2em] shadow-[0_0_15px_rgba(220,38,38,0.3)] border border-red-500/30 group"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        BUY PRODUCTS
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </a>
                  </motion.div>
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
