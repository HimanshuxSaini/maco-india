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
 { name: 'FACILITIES', path: '/facilities' },
 { name: 'QUALITY', path: '/quality' },
 { name: 'CONTACT US', path: '/contact' },
 ];

 return (
 <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-colors duration-300">
 <div className="w-full px-4 sm:px-6 lg:px-8">
 <div className="flex justify-between items-center h-24">
 <div className="flex items-center">
 <div className="flex-shrink-0 flex items-center pr-8 mr-8 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-px after:bg-gray-300">
 <Link to="/" className="flex items-center">
 <img src="/maco logo white.png" alt="MACO Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
 </Link>
 </div>
 
 {/* Desktop Menu */}
 <nav className="hidden md:flex items-center space-x-8">
 {links.map((link) => (
 <Link
 key={link.name}
 to={link.path}
 className={`text-sm font-bold tracking-wide transition-colors duration-200 h-24 flex items-center border-b-2 gap-1 ${
 location.pathname === link.path 
 ? 'text-maco-red border-maco-red' 
 : 'text-gray-600 hover:text-gray-900 border-transparent'
 }`}
 >
 {link.name}
 {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
 </Link>
 ))}
 </nav>
 </div>

 <div className="hidden md:flex items-center pl-6 space-x-4">
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

 {/* Mobile Menu Button */}
 <div className="md:hidden flex items-center space-x-3">
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="text-gray-600 hover:text-gray-900 focus:outline-none"
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
 className="md:hidden border-t border-gray-100 overflow-hidden bg-white shadow-lg transition-colors duration-300"
 >
 <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
 {links.map((link) => (
 <Link
 key={link.name}
 to={link.path}
 onClick={() => setIsOpen(false)}
 className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold tracking-wide ${
 location.pathname === link.path
 ? 'text-maco-red bg-red-50'
 : 'text-gray-600 hover:bg-gray-50'
 }`}
 >
 {link.name}
 {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
 </Link>
 ))}
 {/* Mobile Buy Products Button */}
 <div className="mt-4 pt-4 border-t border-gray-100 px-3 pb-2">
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
 </div>
 );
};

export default Navbar;
