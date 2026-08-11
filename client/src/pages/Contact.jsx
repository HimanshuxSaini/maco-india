import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/contact', data);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
    
    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="pt-20 pb-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <div className="h-1 w-24 bg-maco-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Have a question or want to request a quote? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#111316] p-10 rounded-3xl shadow-xl border border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-black/50 text-white ${errors.name ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-maco-red`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                  className={`w-full px-4 py-3 rounded-lg border bg-black/50 text-white ${errors.email ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-maco-red`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-black/50 text-white ${errors.subject ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-maco-red`}
                  placeholder="Inquiry about Connecting Rods"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-black/50 text-white ${errors.message ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-maco-red`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-maco-red hover:bg-red-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send className="ml-2 h-5 w-5" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-black p-10 rounded-3xl shadow-xl text-white border border-maco-red/50">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-maco-red shrink-0" />
                  <span className="text-lg text-gray-300">Kundan Mansion, 2A/3, Asaf Ali Road, New Delhi-110002 (India)</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-maco-red shrink-0" />
                  <span className="text-lg text-gray-300">+91 11 23263672, 23273274</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-maco-red shrink-0" />
                  <a href="mailto:macoho@maco-india.com" className="text-lg text-gray-300 hover:text-white hover:underline transition-colors">macoho@maco-india.com</a>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="flex-grow bg-white/5 border border-white/10 rounded-3xl overflow-hidden min-h-[300px] relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996123497843!2d77.2289659!3d28.6329767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34203a2777%3A0x6b804543743c3f9a!2sAsaf%20Ali%20Rd%2C%20New%20Delhi%2C%20Delhi%20110002%2C%20India!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
