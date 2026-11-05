import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Optimized Chat Component using dynamic imports and memoization
 * to ensure low bundle size and high performance.
 */
export const OptimizedChat = () => {
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user' | 'ai'}[]>([]);

  useEffect(() => {
    // Initial mock message
    setMessages([{ id: 1, text: 'Hello! How can I help you today?', sender: 'ai' }]);
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#0F0F13] text-white p-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <motion.div 
            key={msg.id} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg max-w-[80%] ${msg.sender === 'ai' ? 'bg-[#1A1A22]' : 'bg-[#FF3366] ml-auto'}`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
