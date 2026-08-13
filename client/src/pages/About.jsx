import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';

const About = () => {
 return (
 <div className="pt-20 pb-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Header */}
 <div className="text-center mb-16">
 <motion.h1 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
 >
 About MACO INDIA
 </motion.h1>
 <div className="h-1 w-24 bg-maco-red mx-auto"></div>
 </div>

 {/* Content */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.2 }}
 >
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
 <div className="prose prose-lg text-gray-600">
 <p className="mb-4">
 Established in 1956, MACO PRIVATE LIMITED has been developing and manufacturing Piston Pins, Crank Pins and other Pin type items since over three decades.
 </p>
 <p className="mb-4">
 Our company has enjoyed a great deal of growth, and this we owe to the confidence our customers have bestowed upon us over the years. MACO PRIVATE LIMITED was incorporated in 1956 with its Regd. office at Delhi and factory at about 50 Km. North of Delhi at Sonepat in the Haryana state.
 </p>
 <p>
 The initial plant was imported from U.K. mostly, and the manufacturing project started in the year 1959. Today, we stand as a trusted name in the automotive manufacturing sector.
 </p>
 </div>
 </motion.div>
 
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.3 }}
 className="relative"
 >
 <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ">
 <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2940&auto=format&fit=crop" alt="Manufacturing" className="w-full h-[400px] object-cover" />
 </div>
 <div className="absolute -bottom-8 -left-8 bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 hidden md:block">
 <p className="text-gray-900 font-bold text-xl">Since 1956</p>
 <p className="text-gray-600 text-sm">Pioneering Auto Parts</p>
 </div>
 </motion.div>
 </div>

 {/* Core Values */}
 <div className="bg-gray-100 rounded-3xl p-12 border border-white/5 shadow-2xl">
 <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="text-center">
 <div className="mx-auto h-16 w-16 bg-white/10 rounded-full flex items-center justify-center shadow-md mb-6">
 <Target className="h-8 w-8 text-maco-red" />
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Precision</h3>
 <p className="text-gray-600 ">Engineered to exact specifications for flawless performance.</p>
 </div>
 <div className="text-center">
 <div className="mx-auto h-16 w-16 bg-white/10 rounded-full flex items-center justify-center shadow-md mb-6">
 <Shield className="h-8 w-8 text-maco-red" />
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
 <p className="text-gray-600 ">Uncompromising standards in every component we deliver.</p>
 </div>
 <div className="text-center">
 <div className="mx-auto h-16 w-16 bg-white/10 rounded-full flex items-center justify-center shadow-md mb-6">
 <Users className="h-8 w-8 text-maco-red" />
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
 <p className="text-gray-600 ">Building lasting relationships through reliable delivery.</p>
 </div>
 </div>
 </div>

 </div>
 </div>
 );
};

export default About;
