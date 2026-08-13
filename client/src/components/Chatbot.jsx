import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Minimize2 } from 'lucide-react';
import Fuse from 'fuse.js';

// Typewriter Effect Component
const TypewriterText = ({ text, onComplete, speed = 20 }) => {
 const [displayedText, setDisplayedText] = useState('');
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
 setDisplayedText('');
 setCurrentIndex(0);
 }, [text]);

 useEffect(() => {
 if (currentIndex < text.length) {
 const timer = setTimeout(() => {
 setDisplayedText(prev => prev + text[currentIndex]);
 setCurrentIndex(prev => prev + 1);
 }, speed);
 return () => clearTimeout(timer);
 } else if (onComplete) {
 onComplete();
 }
 }, [currentIndex, text, onComplete, speed]);

 return <span>{displayedText}</span>;
};

const predefinedKnowledge = [
 {
 id: 'greeting',
 keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'morning', 'afternoon', 'start', 'help', 'what can you do', 'who are you', 'how are you'],
 response: "Hello! Welcome to MACO INDIA. I'm your AI assistant. How can I help you learn about our company or products today?",
 quickReplies: ["View Products", "About MACO", "Contact Us"]
 },
 {
 id: 'products',
 keywords: ['product', 'catalog', 'buy', 'parts', 'components', 'list', 'item', 'manufacture', 'sell', 'offer', 'what do you make', 'catalogue', 'inventory', 'stock', 'spares'],
 response: (
 <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
 <p>We manufacture highly precise automotive and industrial components. Here is our complete list of products:</p>
 <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700 ">
 <li>Piston Pins (Gudgeon Pins / Wrist Pins)</li>
 <li>Connecting Rod Kits for Two-Wheelers</li>
 <li>Automatic Transmission Steel Clutch Plates</li>
 <li>Engine Valves (Intake & Exhaust Valves)</li>
 <li>Clutch Assembly & Pressure Plates</li>
 <li>Motorcycle Clutch Friction Plates</li>
 <li>Motorcycle Crankshaft Assembly</li>
 <li>Disc Brake Pads</li>
 <li>Brake Shoes & Drum Brake Shoes</li>
 </ul>
 <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-maco-red font-medium">
 Ready to order? Click the <strong>'Buy Product'</strong> button on our website to explore our full catalog and make a purchase!
 </div>
 </div>
 ),
 quickReplies: ["Get a Quote", "Quality Standards", "Book a Meeting"]
 },
 {
 id: 'about',
 keywords: ['about', 'company', 'history', 'who', 'background', 'profile', 'story', 'founded', 'established', 'information'],
 response: "Established in 1956, MACO PRIVATE LIMITED has over 70 years of excellence in precision automotive component manufacturing. Our journey began with plants imported from the U.K., and today we stand as a trusted name globally.",
 quickReplies: ["Manufacturing Facility", "Quality Standards", "Contact Us"]
 },
 {
 id: 'contact',
 keywords: ['contact', 'location', 'where', 'address', 'phone', 'email', 'reach', 'call', 'map', 'directions', 'office', 'headquarters', 'mobile'],
 response: "Our Head Office is in New Delhi (2-A/3, Asaf Ali Rd), and our Work Office/Factory is located in Sonepat, Haryana. You can call us at +91 11 23263672 or email macoho@maco-india.com.",
 quickReplies: ["Book a Meeting", "Get a Quote", "About MACO"]
 },
 {
 id: 'quality',
 keywords: ['quality', 'standard', 'precision', 'testing', 'iso', 'certification', 'assurance', 'defect', 'durable', 'durability', 'test', 'guarantee', 'reliable'],
 response: "Quality is our core value. We strictly adhere to global quality standards. Every component undergoes rigorous metallurgical, dimensional, and surface finish testing to guarantee maximum durability and zero-defect precision.",
 quickReplies: ["View Products", "Manufacturing Facility"]
 },
 {
 id: 'pricing',
 keywords: ['price', 'cost', 'quote', 'bulk', 'order', 'pricing', 'expensive', 'rate', 'estimate', 'charge', 'amount', 'fee'],
 response: "For pricing, quotes, or bulk order inquiries, please contact our sales team directly at macoho@maco-india.com. You can also view our full catalog and place orders directly by clicking the 'Buy Product' button on our website.",
 quickReplies: ["Contact Us", "View Products", "Book a Meeting"]
 },
 {
 id: 'export',
 keywords: ['export', 'shipping', 'international', 'global', 'countries', 'delivery', 'overseas', 'ship', 'worldwide'],
 response: "We are a globally trusted manufacturer with a robust export network. We ship our precision components worldwide, adhering to strict international packaging and shipping standards.",
 quickReplies: ["Get a Quote", "Contact Us"]
 },
 {
 id: 'appointment',
 keywords: ['appointment', 'book', 'meeting', 'schedule', 'talk', 'consultation', 'meet', 'discuss', 'time', 'calendar'],
 response: "You can easily schedule a meeting with our experts by clicking the 'Make Appointment' icon located in the bottom right corner of the screen. We'd love to discuss your specific requirements!",
 quickReplies: ["Contact Us", "View Products"]
 },
 {
 id: 'infrastructure',
 keywords: ['technology', 'machine', 'manufacturing', 'facility', 'plant', 'infrastructure', 'factory', 'equipment', 'cnc', 'production', 'machines'],
 response: "Our state-of-the-art manufacturing facility in Sonepat, Haryana, is equipped with advanced imported machinery, ensuring zero-defect precision and high production capacity for all OEM needs.",
 quickReplies: ["About MACO", "Quality Standards"]
 },
 {
 id: 'clients',
 keywords: ['oem', 'aftermarket', 'industries', 'sectors', 'clients', 'market', 'customers', 'buyers', 'who do you serve'],
 response: "We primarily serve the automotive sector, focusing on both OEMs (Original Equipment Manufacturers) and the global aftermarket. We also cater to specialized industrial machinery requirements.",
 quickReplies: ["View Products", "Export Details"]
 },
 {
 id: 'thanks',
 keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'good', 'great', 'awesome', 'bye', 'goodbye', 'ok', 'okay', 'cool', 'perfect', 'excellent', 'nice', 'wow'],
 response: "You're very welcome! If you have any more questions, just ask. Otherwise, feel free to explore our website!",
 quickReplies: ["View Products", "Contact Us"]
 }
];

// Initialize Fuse.js for fuzzy searching (fallback for typos)
const fuse = new Fuse(predefinedKnowledge, {
 includeScore: true,
 threshold: 0.4, // Allows for moderate typos (e.g., "prduct" instead of "product")
 ignoreLocation: true,
 keys: ['keywords', 'id']
});

const getBotResponse = (input, currentContext) => {
 const lowerInput = input.toLowerCase();
 
 // 1. Exact/Substring Match (Best for multi-word inputs like "Get a Quote" matching "quote")
 let bestExactMatch = null;
 let maxScore = 0;

 for (const item of predefinedKnowledge) {
 let score = 0;
 item.keywords.forEach(kw => {
 if (lowerInput.includes(kw)) {
 score += 1;
 // Bonus for exact word boundaries
 const regex = new RegExp(`\\b${kw}\\b`, 'i');
 if (regex.test(lowerInput)) score += 2;
 }
 });

 if (score > maxScore) {
 maxScore = score;
 bestExactMatch = item;
 }
 }

 if (bestExactMatch && maxScore > 0) {
 return {
 text: bestExactMatch.response,
 quickReplies: bestExactMatch.quickReplies,
 newContext: bestExactMatch.id,
 isComponent: typeof bestExactMatch.response !== 'string'
 };
 }

 // 2. Fuzzy Match Fallback (For typos like "prduct")
 // We split the input into words and search each word to better match keywords
 const words = lowerInput.split(' ');
 for (const word of words) {
 if (word.length < 4) continue; // Skip short words for fuzzy matching
 const results = fuse.search(word);
 if (results.length > 0) {
 const bestMatch = results[0].item;
 return {
 text: bestMatch.response,
 quickReplies: bestMatch.quickReplies,
 newContext: bestMatch.id,
 isComponent: typeof bestMatch.response !== 'string'
 };
 }
 }
 
 // 3. Fallback
 return {
 text: "I'm still learning and might not have the exact answer to that yet. Would you like to speak to our team directly?",
 quickReplies: ["Book a Meeting", "Contact Us", "View Products"],
 newContext: 'fallback',
 isComponent: false
 };
};

const Chatbot = ({ isOpen, onClose }) => {
 const [messages, setMessages] = useState([
 { 
 id: 1, 
 type: 'bot', 
 text: "Hi there! I'm the MACO INDIA AI Assistant. Ask me anything about our manufacturing, history, or products!",
 quickReplies: ["View Products", "About MACO", "Contact Us"],
 isComponent: false,
 isTypingComplete: false
 }
 ]);
 const [inputValue, setInputValue] = useState('');
 const [isThinking, setIsThinking] = useState(false);
 const [currentContext, setCurrentContext] = useState('greeting');
 const messagesEndRef = useRef(null);

 // We only show quick replies for the absolute latest message that is from the bot, and only after typing completes.
 const latestBotMessage = [...messages].reverse().find(m => m.type === 'bot');
 const showQuickReplies = latestBotMessage && latestBotMessage.isTypingComplete && latestBotMessage.quickReplies;

 const handleSuggestionClick = (question) => {
 if (isThinking) return;
 processMessage(question);
 };

 const processMessage = (text) => {
 const userMessage = { id: Date.now(), type: 'user', text: text };
 
 // Mark previous messages typing as complete to avoid re-triggering animations
 setMessages(prev => prev.map(m => m.type === 'bot' ? { ...m, isTypingComplete: true } : m).concat(userMessage));
 setInputValue('');
 setIsThinking(true);

 // Simulate AI thinking delay
 setTimeout(() => {
 const responseData = getBotResponse(text, currentContext);
 setCurrentContext(responseData.newContext);
 
 const botMessage = { 
 id: Date.now() + 1, 
 type: 'bot', 
 text: responseData.text,
 quickReplies: responseData.quickReplies,
 isComponent: responseData.isComponent,
 isTypingComplete: false // Needs to type out
 };
 
 setMessages(prev => [...prev, botMessage]);
 setIsThinking(false);
 }, 1000 + Math.random() * 500); // 1-1.5s thinking time
 };

 const handleSend = (e) => {
 e.preventDefault();
 if (!inputValue.trim()) return;
 processMessage(inputValue);
 };

 const markMessageComplete = (id) => {
 setMessages(prev => prev.map(m => m.id === id ? { ...m, isTypingComplete: true } : m));
 };

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
 };

 useEffect(() => {
 if (isOpen) {
 scrollToBottom();
 }
 }, [messages, isOpen, isThinking]);

 return (
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, y: 20, scale: 0.95 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: 20, scale: 0.95 }}
 transition={{ type: "spring", stiffness: 300, damping: 25 }}
 className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white border border-gray-200 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] z-[100] flex flex-col overflow-hidden backdrop-blur-xl"
 >
 {/* Header */}
 <div className="bg-gradient-to-r from-gray-900 to-black px-5 py-4 flex justify-between items-center border-b border-gray-800 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-40 h-40 bg-maco-red/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
 
 <div className="flex items-center gap-3 relative z-10">
 <div className="w-10 h-10 bg-gradient-to-br from-maco-red to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-maco-red/30">
 <Bot className="w-5 h-5 text-white" />
 </div>
 <div>
 <h3 className="text-white font-bold text-sm tracking-wide">MACO AI Assistant</h3>
 <div className="flex items-center gap-1.5 mt-0.5">
 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
 <span className="text-[11px] text-gray-300 font-medium">Online & Ready</span>
 </div>
 </div>
 </div>

 <button
 onClick={onClose}
 className="text-gray-400 hover:text-white transition-colors relative z-10 p-2 hover:bg-white/10 rounded-full"
 >
 <Minimize2 className="w-4 h-4" />
 </button>
 </div>

 {/* Chat Area */}
 <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50/50 scroll-smooth custom-scrollbar">
 {messages.map((msg) => (
 <motion.div
 key={msg.id}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
 >
 {msg.type === 'bot' && (
 <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
 <Bot className="w-4 h-4 text-gray-600 " />
 </div>
 )}
 
 <div 
 className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
 msg.type === 'user' 
 ? 'bg-gradient-to-br from-maco-red to-red-700 text-white rounded-br-sm shadow-maco-red/20' 
 : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-black/5'
 }`}
 >
 {msg.type === 'bot' && !msg.isComponent && !msg.isTypingComplete ? (
 <TypewriterText 
 text={msg.text} 
 onComplete={() => markMessageComplete(msg.id)}
 speed={25}
 />
 ) : (
 <div onLoad={() => !msg.isTypingComplete && markMessageComplete(msg.id)}>
 {msg.text}
 </div>
 )}
 </div>
 
 {msg.type === 'user' && (
 <div className="w-7 h-7 rounded-full bg-maco-red/20 flex items-center justify-center flex-shrink-0 mb-1">
 <User className="w-4 h-4 text-maco-red" />
 </div>
 )}
 </motion.div>
 ))}
 
 {/* Thinking Indicator */}
 {isThinking && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="flex items-end gap-2"
 >
 <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
 <Bot className="w-4 h-4 text-gray-600 " />
 </div>
 <div className="bg-white border border-gray-200 px-4 py-4 rounded-2xl rounded-bl-sm flex gap-1.5 shadow-sm">
 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
 </div>
 </motion.div>
 )}
 <div ref={messagesEndRef} />
 </div>

 {/* Input Area & Quick Replies */}
 <div className="bg-white border-t border-gray-200 flex flex-col relative z-20">
 
 {/* Dynamic Quick Replies */}
 <AnimatePresence>
 {showQuickReplies && latestBotMessage.quickReplies && (
 <motion.div 
 initial={{ opacity: 0, y: 10, height: 0 }}
 animate={{ opacity: 1, y: 0, height: 'auto' }}
 exit={{ opacity: 0, y: 10, height: 0 }}
 className="px-3 pt-3 pb-1 overflow-x-auto whitespace-nowrap flex gap-2 custom-scrollbar"
 >
 {latestBotMessage.quickReplies.map((q, idx) => (
 <motion.button
 key={idx}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={() => handleSuggestionClick(q)}
 disabled={isThinking}
 className="inline-flex flex-shrink-0 items-center justify-center text-[12px] font-medium bg-maco-red/10 hover:bg-maco-red/20 :bg-white/10 text-maco-red border border-maco-red/20 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
 >
 {q}
 </motion.button>
 ))}
 </motion.div>
 )}
 </AnimatePresence>

 <div className="p-3">
 <form onSubmit={handleSend} className="relative flex items-center group">
 <input
 type="text"
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 placeholder="Ask me anything..."
 className="w-full bg-gray-100 border border-transparent focus:border-maco-red/30 :border-white/20 rounded-full pl-4 pr-12 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-300 shadow-inner group-focus-within:bg-white :bg-[#0a0a0c]"
 />
 <button
 type="submit"
 disabled={!inputValue.trim() || isThinking}
 className="absolute right-1.5 p-2 bg-maco-red hover:bg-red-700 disabled:bg-gray-300 :bg-gray-800 disabled:text-gray-500 text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-md shadow-maco-red/20 disabled:shadow-none"
 >
 <Send className="w-4 h-4" />
 </button>
 </form>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 );
};

export default Chatbot;
