import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, ShieldCheck, Factory } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setValue(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start pt-40 md:pt-48 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-xl text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight mb-4 leading-[1.1]">
              ENGINEERED FOR<br />PERFORMANCE
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              70+ years of excellence in precision automotive component manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-[#ED1C24] hover:bg-red-700 transition-colors">
                Explore Products
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#111316] py-10 border-t border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-[#ED1C24]/30 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/4 py-6 md:py-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter from={1900} to={1956} duration={1.5} />
              </h3>
              <p className="text-gray-400 text-sm tracking-widest font-medium">Founded</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full md:w-1/4 py-6 md:py-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter from={0} to={70} duration={1.5} suffix="+" />
              </h3>
              <p className="text-gray-400 text-sm tracking-widest font-medium">Years of Experience</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/4 py-6 md:py-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Precision</h3>
              <p className="text-gray-400 text-sm tracking-widest font-medium">Engineering</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/4 py-6 md:py-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Quality</h3>
              <p className="text-gray-400 text-sm tracking-widest font-medium">Manufacturing</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Why Choose MACO INDIA?</h2>
            <div className="mt-2 h-1 w-20 bg-maco-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Factory, title: 'Manufacturing Excellence', desc: 'State-of-the-art facilities equipped with imported machinery for high precision engineering.' },
              { icon: ShieldCheck, title: 'Quality Assured', desc: 'Strict adherence to global quality standards ensuring durability and reliability in every part.' },
              { icon: Settings, title: 'Custom Solutions', desc: 'Ability to manufacture highly customized precision components tailored to client requirements.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="h-14 w-14 bg-[#ED1C24]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ED1C24] transition-colors">
                  <feature.icon className="h-7 w-7 text-[#ED1C24] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-20 bg-[#111316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" alt="Maco Factory" className="rounded-2xl shadow-2xl object-cover h-[500px] w-full border border-white/10" />
                <div className="absolute -bottom-6 -right-6 bg-maco-red text-white p-8 rounded-2xl shadow-xl">
                  <p className="text-4xl font-black">50+</p>
                  <p className="text-sm font-medium uppercase tracking-wider">Years of Trust</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Established in 1956</h2>
              <div className="h-1 w-20 bg-maco-red mb-8"></div>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                MACO PRIVATE LIMITED has been developing and manufacturing Piston Pins, Crank Pins and other Pin type items since over three decades.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our company has enjoyed a great deal of growth and this we owe to the confidence our customers have bestowed upon us over the years.
              </p>
              <Link to="/about" className="inline-flex items-center text-white hover:text-maco-red transition-colors font-bold uppercase tracking-wider text-sm">
                Read our full story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
