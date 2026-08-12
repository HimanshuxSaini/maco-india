import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ClipboardCheck } from 'lucide-react';

const Quality = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Quality Policy
          </motion.h1>
          <div className="h-1 w-24 bg-maco-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Our commitment to quality is absolute. We ensure every product leaving our facility meets strict international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-100 dark:bg-[#111316] p-10 rounded-3xl shadow-xl border border-white/5"
          >
            <Award className="h-14 w-14 text-maco-red mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">ISO Certified</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We operate under rigorous ISO quality management systems, guaranteeing consistent production quality across all our manufacturing lines.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-black p-10 rounded-3xl shadow-2xl text-gray-900 dark:text-white transform lg:-translate-y-4 border border-maco-red/50"
          >
            <ClipboardCheck className="h-14 w-14 text-maco-red mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Strict Inspection</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every component undergoes multi-stage inspections, from raw material procurement to the final finished product, ensuring zero defects.
            </p>
            <ul className="space-y-3">
              {['Dimensional Accuracy', 'Metallurgical Testing', 'Surface Finish Checking'].map((item, idx) => (
                <li key={idx} className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-maco-red" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-100 dark:bg-[#111316] p-10 rounded-3xl shadow-xl border border-white/5"
          >
            <CheckCircle2 className="h-14 w-14 text-maco-red mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Continuous Improvement</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We constantly train our workforce and upgrade our testing equipment to stay ahead of industry demands and exceed customer expectations.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Quality;
