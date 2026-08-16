import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, Wrench, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facilities = () => {
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

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 {/* Row 1 */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
 <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
 <img src="/factory_floor_3.png" alt="Factory Floor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
 <h2 className="text-4xl font-bold text-gray-900 mb-6">State-of-the-Art Infrastructure</h2>
 <p className="text-xl leading-relaxed text-gray-600">
 Our factory, located about 50 Km North of Delhi at Sonepat in the Haryana state, spans a massive area equipped with the latest imported machinery from the U.K. and other global leaders.
 </p>
 </motion.div>
 </div>

 {/* Row 2 (Reversed) */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
 <h2 className="text-4xl font-bold text-gray-900 mb-6">High-Volume Capacity</h2>
 <p className="text-xl leading-relaxed text-gray-600">
 We continuously upgrade our infrastructure to ensure maximum efficiency, precision, and the capacity to handle bulk orders while maintaining the highest quality standards. Our advanced production lines are specifically optimized for the high-volume manufacturing of critical engine components, including our signature Piston Pins and Connecting Rod Kits.
 </p>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
 <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
 <img src="/industrial_machine_1.png" alt="Industrial Machine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 </motion.div>
 </div>

 {/* Row 3 */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
 <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
 <img src="/industrial_machine_2.png" alt="Industrial Machine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
 <h2 className="text-4xl font-bold text-gray-900 mb-6">Self-Sufficient Ecosystem</h2>
 <p className="text-xl leading-relaxed text-gray-600">
 At MACO PRIVATE LIMITED, we maintain an entirely self-sufficient manufacturing ecosystem. From initial raw material testing in our in-house metallurgical laboratory to advanced heat treatment, precision grinding, and final automated inspection, every critical stage of production is executed under one roof. This vertically integrated approach gives us absolute control over the dimensional accuracy and surface finish of every single component.
 </p>
 </motion.div>
 </div>

 {/* Row 4 (Reversed) */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
 <h2 className="text-4xl font-bold text-gray-900 mb-6">Engineered for the Future</h2>
 <p className="text-xl leading-relaxed text-gray-600">
 Our facility is not just built for today's demands, but engineered for the future of the automotive industry. With strict adherence to global ISO certification standards and a dedicated team constantly refining our CNC machining processes, our Sonepat plant stands as a testament to our legacy of engineering excellence and our commitment to powering vehicles worldwide.
 </p>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
 <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
 <img src="/factory_machine_4.png" alt="Factory Machine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
