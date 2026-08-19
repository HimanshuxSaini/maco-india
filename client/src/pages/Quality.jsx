import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Award, ClipboardCheck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScrollWord = ({ children, progress, range }) => {
  const color = useTransform(progress, range, ["#D1D5DB", "#111827"]); // Gray-300 to Gray-900
  
  return (
    <motion.span style={{ color }} className="transition-colors duration-100">
      {children}{" "}
    </motion.span>
  );
};

const ScrollRevealSection = ({ paragraphs }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 65%", "end 30%"]
  });

  const allWords = paragraphs.map(p => p.split(" "));
  const totalWords = allWords.reduce((acc, curr) => acc + curr.length, 0);
  
  let currentWordIndex = 0;

  return (
    <div ref={container} className="max-w-4xl mx-auto pt-16 pb-24 mb-20">
      {allWords.map((words, pIndex) => (
        <p key={pIndex} className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-12 text-center last:mb-0">
          {words.map((word, i) => {
            const start = currentWordIndex / totalWords;
            const end = (currentWordIndex + 1) / totalWords;
            currentWordIndex++;
            return <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</ScrollWord>
          })}
        </p>
      ))}
    </div>
  );
};

const Quality = () => {
  const paragraphs = [
    "MACO is committed to being pro-active in its attitude towards quality at all levels, primarily since we want to be ranked as the “best” in our business.",
    "We practice Continual Improvement that will ensure an effective working relationship and feedback system with our customers for ensuring opportune & flawless quality of our supplies & inputs.",
    "We must function as a team in our efforts to give the Customer what they want every time."
  ];

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
            <span className="text-maco-red text-xs md:text-sm font-bold tracking-widest uppercase">Our Standards</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1] break-words"
          >
            Uncompromising <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maco-red to-red-600">Quality Policy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Our unwavering commitment to excellence ensures that every component leaving our facility meets the highest global standards for durability, precision, and performance. We are certified ISO compliant and practice continual improvement.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <button onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })} className="px-8 py-4 bg-maco-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
              Discover Our Standards
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

        {/* Scroll Reveal Text Section */}
        <ScrollRevealSection paragraphs={paragraphs} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-10 rounded-3xl shadow-xl border border-white/5"
          >
            <Award className="h-14 w-14 text-maco-red mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO Certified</h3>
            <p className="text-gray-600 leading-relaxed">
              We operate under rigorous ISO quality management systems, guaranteeing consistent production quality across all our manufacturing lines.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-3xl shadow-2xl text-gray-900 transform lg:-translate-y-4 border border-maco-red/50"
          >
            <ClipboardCheck className="h-14 w-14 text-maco-red mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Strict Inspection</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every component undergoes multi-stage inspections, from raw material procurement to the final finished product, ensuring zero defects.
            </p>
            <ul className="space-y-3">
              {['Dimensional Accuracy', 'Metallurgical Testing', 'Surface Finish Checking'].map((item, idx) => (
                <li key={idx} className="flex items-center text-sm font-medium text-gray-800">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-maco-red" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 p-10 rounded-3xl shadow-xl border border-white/5"
          >
            <CheckCircle2 className="h-14 w-14 text-maco-red mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
            <p className="text-gray-600 leading-relaxed">
              We constantly train our workforce and upgrade our testing equipment to stay ahead of industry demands and exceed customer expectations.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Quality;
