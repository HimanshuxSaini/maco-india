import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facilities = () => {
 return (
 <div className="pb-20">
 {/* Hero Section */}
 <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden border-b border-gray-100 flex flex-col justify-center min-h-screen mb-16">
 {/* Subtle grid pattern background */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
 
 {/* Decorative glowing blobs */}
 <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] rounded-full bg-maco-red/5 blur-[80px]"></div>
 <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[400px] h-[400px] rounded-full bg-gray-200/50 blur-[80px]"></div>
 
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="inline-flex items-center px-4 py-2 rounded-full bg-maco-red/10 border border-maco-red/20 mb-8 mx-auto"
 >
 <span className="w-2 h-2 rounded-full bg-maco-red mr-2 animate-pulse"></span>
 <span className="text-maco-red text-xs md:text-sm font-bold tracking-widest uppercase">Our Infrastructure</span>
 </motion.div>
 
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]"
 >
 State-of-the-Art <br className="hidden md:block" />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-maco-red to-red-600">Manufacturing</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto"
 >
 Spanning a massive area equipped with the latest imported machinery from the U.K. and global leaders, our factory ensures maximum efficiency, precision, and the capacity to handle bulk orders.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
 >
 <button onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })} className="px-8 py-4 bg-maco-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
 Explore Facilities
 </button>
 <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:border-maco-red hover:text-maco-red transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
 Schedule a Visit
 </Link>
 </motion.div>
 </div>
 </section>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 className="relative"
 >
 <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ">
 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" alt="Maco Factory" className="w-full h-full object-cover" />
 </div>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 >
 <h2 className="text-3xl font-bold text-gray-900 mb-6">State-of-the-Art Manufacturing</h2>
 <div className="prose prose-lg text-gray-600 ">
 <p className="mb-4">
 Our factory, located about 50 Km North of Delhi at Sonepat in the Haryana state, spans a massive area equipped with the latest imported machinery from the U.K. and other global leaders.
 </p>
 <p>
 We continuously upgrade our infrastructure to ensure maximum efficiency, precision, and the capacity to handle bulk orders while maintaining the highest quality standards.
 </p>
 </div>
 </motion.div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { icon: Factory, title: 'Modern Plant', desc: 'Advanced assembly lines and automated processes for seamless production.' },
 { icon: Zap, title: 'Power Infrastructure', desc: 'Uninterrupted power supply systems to ensure continuous manufacturing cycles.' },
 { icon: Wrench, title: 'R&D Lab', desc: 'In-house research and development laboratory for continuous product improvement.' },
 ].map((item, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1 }}
 className="bg-gray-100 p-8 rounded-2xl border border-white/5 hover:border-gray-300 hover:shadow-2xl transition-shadow text-center"
 >
 <div className="mx-auto h-16 w-16 bg-[#ED1C24]/10 text-maco-red rounded-full flex items-center justify-center mb-6">
 <item.icon className="h-8 w-8" />
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
 <p className="text-gray-600 ">{item.desc}</p>
 </motion.div>
 ))}
 </div>

 </div>
 </div>
 );
};

export default Facilities;
