import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  const [messages, setMessages] = useState([{ id: 1, text: 'Hi, how can I help you today?', sender: 'ai' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#1A1A22]">
      <header className="p-4 border-b border-[#333] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-500" />
        <div>
          <h1 className="font-bold">AI Companion</h1>
          <span className="text-xs text-green-500">● Online</span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <motion.div key={m.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-3 rounded-lg ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#2A2A35]'}`}>
            {m.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-[#333] flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-[#0F0F13] p-2 rounded" placeholder="Type a message..." />
        <button onClick={handleSend} className="bg-[#FF3366] px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}