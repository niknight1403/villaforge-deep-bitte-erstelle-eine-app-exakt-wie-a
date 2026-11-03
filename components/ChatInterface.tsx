import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hallo! Wie kann ich dir heute den Tag verschönern?' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
        <span className="font-bold">Companion</span>
        <div className="w-2 h-2 rounded-full bg-green-500 ml-auto" />
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg max-w-[80%] ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}>
            {m.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 bg-[#1A1A22] flex gap-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="flex-1 bg-transparent outline-none" 
          placeholder="Schreibe eine Nachricht..."
        />
        <button onClick={sendMessage} className="text-[#FF3366]">Senden</button>
      </div>
    </div>
  );
}