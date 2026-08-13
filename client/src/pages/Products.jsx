import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings2 } from 'lucide-react';
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
 <div className="pt-20 pb-20 bg-gray-50 min-h-screen">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 <div className="text-center mb-16">
 <motion.h1
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
 >
 Our Products
 </motion.h1>
 <div className="h-1 w-24 bg-maco-red mx-auto mb-6"></div>
 <p className="max-w-2xl mx-auto text-lg text-gray-600 ">
 Discover our premium range of precision-engineered automotive components designed for maximum performance and durability.
 </p>
 </div>

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
 <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-maco-red transition-colors relative z-10">
 {product.title}
 </h3>
 </motion.div>
 </Link>
 ))}
 </div>

 </div>
 </div>
 );
};

export default Products;
