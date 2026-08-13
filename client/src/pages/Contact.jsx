import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Factory } from 'lucide-react';

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
 <div className="pt-20 pb-20 bg-gray-50 min-h-screen">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="text-center mb-16">
 <motion.h1 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
 >
 Contact Us
 </motion.h1>
 <div className="h-1 w-24 bg-maco-red mx-auto mb-6"></div>
 <p className="max-w-2xl mx-auto text-lg text-gray-600 ">
 Have a question or want to request a quote? Get in touch with our team today.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 {/* Contact Form */}
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 className="bg-gray-100 p-10 rounded-3xl shadow-xl border border-white/5"
 >
 <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
 
 {submitStatus && (
 <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
 {submitStatus.message}
 </div>
 )}

 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
 <input 
 type="text" 
 {...register('name', { required: 'Name is required' })}
 className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-200 '} focus:outline-none focus:ring-2 focus:ring-maco-red`}
 placeholder="John Doe"
 />
 {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
 <input 
 type="email" 
 {...register('email', { 
 required: 'Email is required',
 pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
 })}
 className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-200 '} focus:outline-none focus:ring-2 focus:ring-maco-red`}
 placeholder="john@example.com"
 />
 {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
 <input 
 type="text" 
 {...register('subject', { required: 'Subject is required' })}
 className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 ${errors.subject ? 'border-red-500' : 'border-gray-200 '} focus:outline-none focus:ring-2 focus:ring-maco-red`}
 placeholder="Inquiry about Connecting Rods"
 />
 {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
 <textarea 
 rows="5"
 {...register('message', { required: 'Message is required' })}
 className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 ${errors.message ? 'border-red-500' : 'border-gray-200 '} focus:outline-none focus:ring-2 focus:ring-maco-red`}
 placeholder="How can we help you?"
 ></textarea>
 {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
 </div>

 <button 
 type="submit" 
 disabled={isSubmitting}
 className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-gray-900 bg-maco-red hover:bg-red-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
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
 className="flex flex-col space-y-8 h-full"
 >
 {/* Head Office */}
 <div className="bg-white p-8 rounded-3xl shadow-xl text-gray-900 border border-gray-100 hover:border-maco-red/50 transition-colors flex-1 flex flex-col group/card">
 <div className="flex items-center mb-6">
 <div className="bg-maco-red/10 p-3 rounded-2xl mr-4 group-hover/card:bg-maco-red/20 transition-colors">
 <MapPin className="h-6 w-6 text-maco-red" />
 </div>
 <h3 className="text-2xl font-bold">Registered Head Office</h3>
 </div>
 <ul className="space-y-4 mb-8 flex-grow">
 <li className="flex items-start">
 <MapPin className="h-5 w-5 mr-3 mt-0.5 text-maco-red shrink-0" />
 <span className="text-gray-600 ">2-A/3, Asaf Ali Rd, Old Delhi, Turkman Gate, Chandni Chowk, New Delhi, Delhi, 110002</span>
 </li>
 <li className="flex items-center">
 <Phone className="h-5 w-5 mr-3 text-maco-red shrink-0" />
 <span className="text-gray-600 ">+91 11 23263672, 23273274</span>
 </li>
 <li className="flex items-center">
 <Mail className="h-5 w-5 mr-3 text-maco-red shrink-0" />
 <a href="mailto:macoho@maco-india.com" className="text-gray-600 hover:text-maco-red transition-colors">macoho@maco-india.com</a>
 </li>
 </ul>
 <div className="w-full h-48 rounded-2xl overflow-hidden border border-gray-200 relative group">
 <iframe 
 src="https://maps.google.com/maps?q=2-A/3,%20Asaf%20Ali%20Rd,%20Old%20Delhi,%20Turkman%20Gate,%20Chandni%20Chowk,%20New%20Delhi,%20Delhi,%20110002&t=&z=15&ie=UTF8&iwloc=&output=embed" 
 width="100%" 
 height="100%" 
 style={{ border: 0 }} 
 allowFullScreen="" 
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"
 className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
 ></iframe>
 </div>
 </div>

 {/* Work Office */}
 <div className="bg-white p-8 rounded-3xl shadow-xl text-gray-900 border border-gray-100 hover:border-maco-red/50 transition-colors flex-1 flex flex-col group/card">
 <div className="flex items-center mb-6">
 <div className="bg-maco-red/10 p-3 rounded-2xl mr-4 group-hover/card:bg-maco-red/20 transition-colors">
 <Factory className="h-6 w-6 text-maco-red" />
 </div>
 <h3 className="text-2xl font-bold">Work Office</h3>
 </div>
 <ul className="space-y-4 mb-8 flex-grow">
 <li className="flex items-start">
 <MapPin className="h-5 w-5 mr-3 mt-0.5 text-maco-red shrink-0" />
 <span className="text-gray-600 ">E-24 Industrial Area, Sonepat - 131001 (Haryana), India</span>
 </li>
 <li className="flex items-center">
 <Phone className="h-5 w-5 mr-3 text-maco-red shrink-0" />
 <span className="text-gray-600 ">Tel: +91 130 2212520, 2212199 | Fax: +91 130 2212407</span>
 </li>
 <li className="flex items-center">
 <Mail className="h-5 w-5 mr-3 text-maco-red shrink-0" />
 <a href="mailto:maco@maco-india.com" className="text-gray-600 hover:text-maco-red transition-colors">maco@maco-india.com</a>
 </li>
 </ul>
 <div className="w-full h-48 rounded-2xl overflow-hidden border border-gray-200 relative group">
 <iframe 
 src="https://maps.google.com/maps?q=E-24%20Industrial%20Area,%20Sonepat%20-%20131001%20(Haryana),%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
 width="100%" 
 height="100%" 
 style={{ border: 0 }} 
 allowFullScreen="" 
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"
 className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
 ></iframe>
 </div>
 </div>
 </motion.div>
 </div>

 </div>
 </div>
 );
};

export default Contact;
