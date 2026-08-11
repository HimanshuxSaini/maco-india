import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, Wrench } from 'lucide-react';

const Facilities = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Our Facilities
          </motion.h1>
          <div className="h-1 w-24 bg-maco-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" alt="Maco Factory" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">State-of-the-Art Manufacturing</h2>
            <div className="prose prose-lg text-gray-400">
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
              className="bg-[#111316] p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:shadow-2xl transition-shadow text-center"
            >
              <div className="mx-auto h-16 w-16 bg-[#ED1C24]/10 text-maco-red rounded-full flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Facilities;
