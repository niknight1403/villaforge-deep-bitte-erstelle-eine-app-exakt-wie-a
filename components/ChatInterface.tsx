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
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newUserMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h2 className="font-bold">Companion</h2>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <motion.div 
            key={msg.id} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-[#1A1A22]">
        <input 
          className="w-full bg-[#1A1A22] p-3 rounded-full focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Schreibe eine Nachricht..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
      </div>
    </div>
  );
};