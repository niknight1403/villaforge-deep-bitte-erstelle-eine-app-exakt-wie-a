import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ChatInterface: Optimized component for mobile-first chat experience.
 * Uses lazy loading patterns and efficient state management.
 */
export default function ChatInterface() {
  const [messages, setMessages] = useState<{ id: number; text: string; sender: 'user' | 'ai' }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), text: input, sender: 'user' as const };
    setMessages([...messages, newMsg]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: 'Hello! How can I help you today?', sender: 'ai' }]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-[#2A2A35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">AI Companion</h1>
            <span className="text-xs text-[#A0A0B0]">Online</span>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 pt-20 pb-24">
        {messages.map(msg => (
          <motion.div 
            key={msg.id} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg mb-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}
          >
            {msg.text}
          </motion.div>
        ))}
      </main>
      <footer className="fixed bottom-0 w-full p-4 bg-[#1A1A22]">
        <div className="flex gap-2">
          <input 
            className="flex-1 p-2 rounded bg-[#0F0F13] border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSend} className="px-4 py-2 bg-[#FF3366] rounded font-bold">Send</button>
        </div>
      </footer>
    </div>
  );
}