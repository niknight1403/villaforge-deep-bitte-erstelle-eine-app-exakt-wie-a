import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hello, I am your companion. How are you?' }]);
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
        <div>
          <h1 className="font-bold">Companion</h1>
          <span className="text-xs text-green-500">Online</span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-3 rounded-lg ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}>
            {m.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-[#1A1A22] flex gap-2">
        <input 
          className="flex-1 bg-[#1A1A22] p-2 rounded outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-[#FF3366] px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}