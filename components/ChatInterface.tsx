import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Optimized Chat Interface for performance and UX
export default function ChatInterface() {
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user' | 'ai'}[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), text: input, sender: 'user' as const };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: 'I am processing your request...', sender: 'ai' }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] border-b border-[#2A2A35] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h2 className="font-bold">AI Companion</h2>
            <span className="text-xs text-green-400">● Online</span>
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto p-4 mt-20 mb-20">
        <AnimatePresence>
          {messages.map(msg => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'ml-auto bg-[#FF3366]' : 'bg-[#1A1A22]'}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 w-full p-4 bg-[#1A1A22] border-t border-[#2A2A35]">
        <div className="flex gap-2">
          <input 
            className="flex-1 bg-[#0F0F13] p-3 rounded-lg outline-none border border-[#2A2A35]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage} className="bg-[#FF3366] px-6 py-2 rounded-lg font-bold">Send</button>
        </div>
      </footer>
    </div>
  );
}