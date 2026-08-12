import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Minimize2 } from 'lucide-react';

const predefinedKnowledge = [
  {
    keywords: ['hi', 'hello', 'hey'],
    response: "Hello! Welcome to MACO INDIA. I'm your AI assistant. How can I help you learn about our company or products today?"
  },
  {
    keywords: ['product', 'catalog', 'buy', 'parts', 'components', 'list', 'item'],
    response: (
      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        <p>We manufacture highly precise automotive and industrial components. Here is our complete list of products:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
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
        <p className="mt-2 pt-2 border-t border-gray-200 dark:border-white/10 text-xs">
          Click <strong>'Explore Products'</strong> on our website to view detailed specifications and sizes!
        </p>
      </div>
    )
  },
  {
    keywords: ['about', 'company', 'history', 'who'],
    response: "Established in 1956, MACO PRIVATE LIMITED has over 70 years of excellence in precision automotive component manufacturing. Our journey began with plants imported from the U.K., and today we stand as a trusted name globally."
  },
  {
    keywords: ['contact', 'location', 'where', 'address', 'phone'],
    response: "Our Head Office is in New Delhi (2-A/3, Asaf Ali Rd), and our Work Office/Factory is located in Sonepat, Haryana. You can call us at +91 11 23263672 or email macoho@maco-india.com."
  },
  {
    keywords: ['quality', 'standard', 'precision'],
    response: "Quality is our core value. We strictly adhere to global quality standards. Every component undergoes rigorous metallurgical, dimensional, and surface finish testing to guarantee maximum durability and zero-defect precision."
  },
  {
    keywords: ['price', 'cost', 'quote', 'bulk', 'order', 'pricing', 'expensive'],
    response: "For pricing, quotes, or bulk order inquiries, please visit our online store by clicking 'Explore Products' or contact our sales team directly at macoho@maco-india.com. We offer highly competitive pricing for bulk orders."
  },
  {
    keywords: ['export', 'shipping', 'international', 'global', 'countries', 'delivery'],
    response: "We are a globally trusted manufacturer with a robust export network. We ship our precision components worldwide, adhering to strict international packaging and shipping standards."
  },
  {
    keywords: ['appointment', 'book', 'meeting', 'schedule', 'talk', 'consultation'],
    response: "You can easily schedule a meeting with our experts by clicking the 'Make Appointment' icon located in the bottom right corner of the screen. We'd love to discuss your specific requirements!"
  },
  {
    keywords: ['technology', 'machine', 'manufacturing', 'facility', 'plant', 'infrastructure'],
    response: "Our state-of-the-art manufacturing facility in Sonepat, Haryana, is equipped with advanced imported machinery, ensuring zero-defect precision and high production capacity for all OEM needs."
  },
  {
    keywords: ['oem', 'aftermarket', 'industries', 'sectors', 'clients'],
    response: "We primarily serve the automotive sector, focusing on both OEMs (Original Equipment Manufacturers) and the global aftermarket. We also cater to specialized industrial machinery requirements."
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'good', 'great'],
    response: "You're very welcome! If you have any more questions, just ask. Otherwise, feel free to explore our website!"
  }
];

const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  
  let bestMatch = null;
  let maxScore = 0;

  for (const item of predefinedKnowledge) {
    let score = 0;
    
    item.keywords.forEach(kw => {
      // Check if keyword exists in input
      if (lowerInput.includes(kw)) {
        score += 1;
        // Weight longer and more specific keywords higher
        if (kw.length > 5) score += 1;
        // If it's an exact word match (surrounded by spaces or boundaries), give huge bonus
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        if (regex.test(lowerInput)) score += 2;
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = item.response;
    }
  }
  
  if (maxScore > 0 && bestMatch) {
    return bestMatch;
  }
  
  return (
    <div className="space-y-2">
      <p>I'm still learning and might not have the exact answer to that question yet.</p>
      <p>However, you can click the <strong>'Make Appointment'</strong> icon in the corner to speak directly with our team, or explore our catalog for more details!</p>
    </div>
  );
};

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi there! I'm the MACO INDIA AI Assistant. Ask me anything about our manufacturing, history, or products!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "What products do you manufacture?",
    "Tell me about MACO's history.",
    "Where is your factory located?",
    "What are your quality standards?"
  ];

  const handleSuggestionClick = (question) => {
    if (isTyping) return;
    
    const userMessage = { id: Date.now(), type: 'user', text: question };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = getBotResponse(question);
      const botMessage = { id: Date.now() + 1, type: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const botResponseText = getBotResponse(userMessage.text);
      const botMessage = { id: Date.now() + 1, type: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[550px] max-h-[80vh] bg-white dark:bg-[#1a1c23] border border-gray-200 dark:border-white/10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] z-[100] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black dark:from-[#111316] dark:to-black px-5 py-4 flex justify-between items-center border-b border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-maco-red/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-maco-red rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">MACO AI Assistant</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs text-gray-400">Online & Ready</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors relative z-10 p-2"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-[#111316]/50">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
              >
                {msg.type === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center flex-shrink-0 mb-1">
                    <Bot className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
                  </div>
                )}
                
                <div 
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-maco-red text-white rounded-br-sm' 
                      : 'bg-white dark:bg-[#1a1c23] border border-gray-200 dark:border-white/5 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
                
                {msg.type === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-maco-red/20 flex items-center justify-center flex-shrink-0 mb-1">
                    <User className="w-3.5 h-3.5 text-maco-red" />
                  </div>
                )}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-end gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center flex-shrink-0 mb-1">
                  <Bot className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="bg-white dark:bg-[#1a1c23] border border-gray-200 dark:border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-[#1a1c23] border-t border-gray-200 dark:border-white/10 flex flex-col gap-2">
            
            {/* Suggested Questions */}
            <div className="flex overflow-x-auto pb-1 gap-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                .flex.overflow-x-auto::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(q)}
                  disabled={isTyping}
                  className="whitespace-nowrap flex-shrink-0 text-[11px] font-medium bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 border border-transparent dark:border-white/10 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-gray-100 dark:bg-[#111316] border border-transparent focus:border-gray-300 dark:focus:border-white/20 rounded-full pl-4 pr-12 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-1.5 p-2 bg-maco-red hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
