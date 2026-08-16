import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Target, Users, MapPin, Globe, Award,
  CheckCircle2, Settings, Wrench, Cog, Zap, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/maco-1.png', '/maco-2.png', '/maco-3.png', '/maco-4.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden flex flex-col justify-center min-h-screen">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Decorative glowing blobs */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] rounded-full bg-maco-red/5 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[400px] h-[400px] rounded-full bg-gray-200/50 blur-[80px]"></div>

        {/* Fade out to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-maco-red/10 border border-maco-red/20 mb-8 mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-maco-red mr-2 animate-pulse"></span>
            <span className="text-maco-red text-xs md:text-sm font-bold tracking-widest uppercase">About Our Company</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black text-gray-900 mb-8 tracking-tight leading-[1.1]"
          >
            Engineering Excellence <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maco-red to-red-600">Since 1956</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto mb-14"
          >
            <strong>MACO Private Limited</strong> is an established Indian manufacturer of precision automotive and engine components, delivering uncompromising quality and reliability to the global engineering industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 lg:gap-12"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                <Shield className="w-6 h-6 text-maco-red" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 font-medium">Certified</p>
                <p className="font-bold text-gray-900 text-lg">ISO Standards</p>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-300 hidden md:block"></div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                <Globe className="w-6 h-6 text-maco-red" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 font-medium">Reach</p>
                <p className="font-bold text-gray-900 text-lg">Global Markets</p>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-300 hidden md:block"></div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-maco-red shadow-lg shadow-red-500/30 flex items-center justify-center border border-red-500 text-white font-black text-xl">
                70+
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 font-medium">Legacy</p>
                <p className="font-bold text-gray-900 text-lg">Years Experience</p>
              </div>
            </div>
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

      {/* Legacy & History Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">A Legacy of Manufacturing Expertise</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  Over the decades, MACO has continuously evolved its manufacturing capabilities, technology, and product range while maintaining a strong focus on quality, reliability, and customer satisfaction.
                </p>
                <p className="mb-6">
                  MACO was incorporated in 1956 with its registered office in Delhi and its manufacturing facility in Sonepat, Haryana. The original manufacturing project commenced in 1959, with much of the initial plant and machinery imported from the United Kingdom.
                </p>
                <p className="mb-6">
                  As the company expanded, MACO invested progressively in plant modernization, advanced machinery, and increased production capacity. In 1973, we were registered with the Government of India as a medium-scale unit. Further modernization in 1976 and the introduction of sophisticated automatic machines enabled us to significantly increase production.
                </p>
                <p className="font-semibold text-gray-900 border-l-4 border-maco-red pl-4 py-1">
                  Today, MACO has built substantial experience in the mass production of precision pin-type components and continues to serve the automotive and engineering sectors with dependable products.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative bg-white">
                <img src={slides[0]} alt="Spacer" className="w-full h-auto opacity-0 invisible" />
                <AnimatePresence>
                  {slides.map((slide, index) => (
                    index === currentSlide && (
                      <motion.img
                        key={slide}
                        src={slide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        alt={`Maco Manufacturing Facility ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    )
                  ))}
                </AnimatePresence>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-maco-red/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-maco-red" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-xl">Sonepat, Haryana</p>
                    <p className="text-gray-600 text-sm">Manufacturing Hub</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Integration Showcase */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Precision Components for Critical Applications
            </motion.h2>
            <motion.div variants={fadeIn} className="h-1 w-20 bg-maco-red mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              We specialize in the manufacture of precision-engineered components where dimensional accuracy, surface finish, strength, and durability are absolutely essential.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="h-14 w-14 bg-maco-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-maco-red transition-colors duration-300">
                <Cog className="h-7 w-7 text-maco-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pistons & Precision Pins</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Piston or gudgeon pins are critical engine components connecting the piston and connecting rod. Our <strong>Piston Pins (Gudgeon / Wrist Pins)</strong> in various sizes, alongside our <strong>High-Precision Crank Pins</strong>, are engineered with extreme attention to surface hardness, wear resistance, and dimensional accuracy to support reliable engine operation across automobiles and industrial applications. We also manufacture dynamic <strong>Motorcycle Crankshaft Assemblies</strong> for seamless rotational motion.
              </p>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="h-14 w-14 bg-maco-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-maco-red transition-colors duration-300">
                <Wrench className="h-7 w-7 text-maco-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connecting Rods & Valves</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MACO manufactures high-quality <strong>Connecting Rod Kits for Two-Wheelers</strong> that transfer power from the piston to the crankshaft. With controlled geometry and heat treatment, they ensure reliable performance under extreme loads. We also supply precision <strong>Engine Valves (Intake & Exhaust)</strong> designed to withstand high temperatures and ensure optimal air/fuel flow.
              </p>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="h-14 w-14 bg-maco-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-maco-red transition-colors duration-300">
                <Settings className="h-7 w-7 text-maco-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clutch & Transmission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expanding our expertise, we developed a premium range of friction and transmission components. This includes highly durable <strong>Automatic Transmission Steel Clutch Plates</strong>, robust <strong>Clutch Assemblies / Pressure Plates</strong>, and <strong>Motorcycle Clutch Friction Plates</strong> providing optimal friction and reduced wear for smooth, consistent power delivery.
              </p>
            </motion.div>

            {/* Category 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="h-14 w-14 bg-maco-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-maco-red transition-colors duration-300">
                <Zap className="h-7 w-7 text-maco-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Braking Systems</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to automotive safety and performance extends to our braking solutions. We manufacture highly reliable <strong>Disc Brake Pads</strong> formulated for low dust and fade resistance, heavy-duty <strong>Brake Shoes</strong>, and heat-resistant <strong>Brake Shoe Linings / Drum Brake Shoes</strong> that guarantee long-lasting wear and excellent braking performance.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link to="/products" className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-maco-red to-red-700 text-white text-sm md:text-base font-black tracking-[0.2em] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-red-500/50 transition-shadow duration-300 uppercase">
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Product Range
                <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quality at the Core */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-maco-red rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Quality at the Core</h2>
                <div className="h-1 w-16 bg-maco-red mb-6"></div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  At MACO, quality is an integral part of the manufacturing process. Precision automotive components require consistent control over dimensions, materials, surface characteristics, and manufacturing parameters.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Consistent dimensional accuracy",
                    "Controlled surface finish",
                    "Appropriate material selection",
                    "Controlled heat-treatment",
                    "Reliable product performance",
                    "Consistent manufacturing processes",
                    "Continuous improvement"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-maco-red mr-3 flex-shrink-0" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="mb-8">
                  <Globe className="h-10 w-10 text-maco-red mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Serving Global Markets</h3>
                  <p className="text-gray-400">
                    Our products have gained acceptance internationally. We supply precision components to South-East Asia, the United Kingdom, Italy, and beyond, reflecting our ability to meet diverse technical requirements globally.
                  </p>
                </div>
                <div>
                  <Award className="h-10 w-10 text-maco-red mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Trusted by OEMs</h3>
                  <p className="text-gray-400">
                    We've established long-term customer relationships built on dependable product quality, capability, and a deep commitment to meeting the strict demands of OEMs in the two-wheeler and industrial sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Conclusion */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-maco-red mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            For more than six decades, MACO has continued to build upon its engineering heritage. Our objective is to combine <strong className="text-gray-900">precision, reliability, technology and customer-focused manufacturing</strong> to create components that contribute to dependable performance.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 inline-block">
            <h3 className="text-2xl font-black text-gray-900 tracking-wider mb-2">MACO PRIVATE LIMITED</h3>
            <p className="text-maco-red font-bold tracking-widest uppercase text-sm">
              Precision Engineering. Reliable Performance.<br />Built on Experience Since 1956.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
