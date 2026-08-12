import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Settings2 } from 'lucide-react';

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${slug}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Product not found.');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-maco-red"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{error}</h2>
        <Link to="/products" className="text-maco-red hover:underline">Return to Products</Link>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-20 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/products" className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-maco-red transition-colors mb-10">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden bg-gray-100 dark:bg-[#111316] border border-white/5 flex items-center justify-center p-12 h-[500px]"
          >
            <Settings2 className="h-48 w-48 text-gray-900 dark:text-white/10" />
            {/* Real image would go here: <img src={product.image} alt={product.title} /> */}
          </motion.div>

          {/* Product Info Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">{product.title}</h1>
            <div className="h-1 w-20 bg-maco-red mb-8"></div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              {product.description}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
            <ul className="space-y-4 mb-10">
              {product.features && product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-6 w-6 text-maco-red mr-3 shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-gray-900 dark:text-white bg-maco-red hover:bg-red-700 transition-colors shadow-lg self-start">
              Request a Quote
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
