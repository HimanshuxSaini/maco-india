import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings2, ChevronDown } from 'lucide-react';
import { products as staticProducts } from '../data/products';

const Products = () => {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 const fetchProducts = async () => {
 try {
 const { data } = await axios.get('http://localhost:5000/api/products');
 if (data.length === 0) throw new Error('Database empty, using fallback');
 setProducts(data);
 setLoading(false);
 } catch (error) {
 console.error('Error fetching products, using fallback:', error);
 setProducts(staticProducts);
 setLoading(false);
 }
 };
 fetchProducts();
 }, []);

 if (loading) {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-maco-blue"></div>
 </div>
 );
 }

 return (
 <div className="pb-20 bg-gray-50 min-h-screen">
 {/* Hero Section */}
 <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden flex flex-col justify-center min-h-screen">
 {/* Subtle grid pattern background */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
 
 {/* Decorative glowing blobs */}
 <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] rounded-full bg-maco-red/5 blur-[80px]"></div>
 <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[400px] h-[400px] rounded-full bg-gray-200/50 blur-[80px]"></div>

 {/* Fade out to next section */}
 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10"></div>
 
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="inline-flex items-center px-4 py-2 rounded-full bg-maco-red/10 border border-maco-red/20 mb-8 mx-auto"
 >
 <span className="w-2 h-2 rounded-full bg-maco-red mr-2 animate-pulse"></span>
 <span className="text-maco-red text-xs md:text-sm font-bold tracking-widest uppercase">Our Products</span>
 </motion.div>
 
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]"
 >
 Precision Engineered <br className="hidden md:block" />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-maco-red to-red-600">Components</span>
 </motion.h1>
 
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto"
 >
 Discover our premium range of precision-engineered automotive components designed for maximum performance, durability, and reliability.
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
 >
 <button onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })} className="px-8 py-4 bg-maco-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
 Explore Catalog
 </button>
 <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:border-maco-red hover:text-maco-red transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
 Request a Quote
 </Link>
 </motion.div>

 </div>

 {/* Scroll Down Indicator */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1, duration: 1 }}
 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group z-20"
 onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
 >

 <motion.div
 animate={{ y: [0, 10, 0] }}
 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
 >
 <ChevronDown className="w-6 h-6 text-gray-900" />
 </motion.div>
 </motion.div>
 </section>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
 {products.map((product, idx) => (
 <Link 
 key={product._id}
 to={`/products/${product.slug}`}
 className="block group"
 >
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: idx * 0.05 }}
 className="bg-white rounded-xl overflow-hidden border border-[#ED1C24]/30 group-hover:border-[#ED1C24] group-hover:shadow-[0_0_15px_rgba(237,28,36,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-6 text-center h-full"
 >
 <div className="h-40 md:h-56 w-full flex items-center justify-center mb-4 relative z-10 bg-[#f4f4f4] rounded-lg p-4 shadow-inner">
 <img 
 src={product.image || `https://placehold.co/200x200/f4f4f4/1a1c23?text=${encodeURIComponent(product.title)}`}
 alt={product.title}
 className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
 onError={(e) => {
 e.target.onerror = null; 
 e.target.src = `https://placehold.co/200x200/ffffff/1a1c23?text=${encodeURIComponent(product.title)}`;
 }}
 />
 </div>
 <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-maco-red transition-colors relative z-10 flex-grow flex items-center">
 {product.title}
 </h3>
 <div className="mt-4 opacity-50 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
 <span className="inline-flex items-center text-sm font-bold text-black group-hover:text-maco-red bg-gray-200 group-hover:bg-maco-red/10 px-4 py-1.5 rounded-full transition-colors duration-300">
 Read More <ArrowRight className="w-4 h-4 ml-1" />
 </span>
 </div>
 </motion.div>
 </Link>
 ))}
 </div>

 </div>
 </div>
 );
};

export default Products;
