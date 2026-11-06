import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  const [messages, setMessages] = useState([{ text: 'Hi, I am your companion. How are you today?', sender: 'ai' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#1A1A22]">
      <header className="p-4 border-b border-[#2A2A35] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#FF3366] flex items-center justify-center font-bold">A</div>
        <div>
          <h1 className="font-semibold">AI Companion</h1>
          <span className="text-xs text-[#A0A0B0]">Online</span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-3 rounded-lg ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#2A2A35]'} max-w-[80%]`}>
            {m.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 bg-[#0F0F13]">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="w-full p-3 rounded-full bg-[#1A1A22] border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="mt-2 w-full bg-[#FF3366] py-2 rounded-full font-bold">Send</button>
      </div>
    </div>
  );
}