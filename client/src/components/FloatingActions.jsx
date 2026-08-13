import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock, MessageCircle, X } from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import Chatbot from './Chatbot';

const FloatingActions = () => {
 const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
 const [isChatOpen, setIsChatOpen] = useState(false);

 // Close one when the other opens
 const openAppointment = () => {
 setIsChatOpen(false);
 setIsAppointmentOpen(true);
 };

 const openChat = () => {
 setIsAppointmentOpen(false);
 setIsChatOpen(!isChatOpen);
 };

 return (
 <>
 {/* Floating Action Buttons */}
 <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-4">
 
 {/* Make Appointment Button */}
 <motion.button
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={openAppointment}
 className="group relative flex items-center justify-center w-14 h-14 bg-white border border-gray-200 text-maco-red rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] _0_20px_rgba(0,0,0,0.5)] focus:outline-none"
 >
 <CalendarClock className="w-6 h-6" />
 
 {/* Tooltip */}
 <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
 Make Appointment
 </span>
 </motion.button>

 {/* AI Chatbot Button */}
 <motion.button
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={openChat}
 className="group relative flex items-center justify-center w-14 h-14 bg-maco-red text-white rounded-full shadow-[0_0_20px_rgba(237,28,36,0.4)] focus:outline-none"
 >
 {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
 
 {/* Tooltip */}
 {!isChatOpen && (
 <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
 MACO AI Assistant
 </span>
 )}
 </motion.button>
 </div>

 {/* Modals & UIs */}
 <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
 <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
 </>
 );
};

export default FloatingActions;
