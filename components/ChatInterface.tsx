import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hallo! Wie kann ich dir heute helfen?', sender: 'ai' }
  ]);

  const memoizedMessages = useMemo(() => messages, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <div>
          <h2 className="font-bold">Companion</h2>
          <span className="text-xs text-green-500">● Online</span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {memoizedMessages.map((msg) => (
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