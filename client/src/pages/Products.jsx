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
    <div className="pt-20 pb-20 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Our Products
          </motion.h1>
          <div className="h-1 w-24 bg-maco-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Discover our premium range of precision-engineered automotive components designed for maximum performance and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-100 dark:bg-[#111316] rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-gray-300 dark:border-white/20 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-56 bg-white dark:bg-black relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-maco-red/10 group-hover:bg-transparent transition-colors z-10"></div>
                {product.image ? (
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain relative z-20 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-white/5 z-20">
                    <Settings2 className="h-20 w-20 text-gray-900 dark:text-white/10" />
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-maco-red transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center font-semibold text-maco-red hover:text-red-700 transition-colors mt-auto"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
