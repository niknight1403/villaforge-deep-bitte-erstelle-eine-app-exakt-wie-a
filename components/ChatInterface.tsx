import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ChatInterface = () => {
  const [messages, setMessages] = useState([{ id: 1, text: 'Hi there! How are you?', sender: 'ai' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#1A1A22]">
      <header className="p-4 border-b border-[#2A2A35] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
        <div>
          <h1 className="font-bold">AI Companion</h1>
          <span className="text-xs text-green-500">Online</span>
        </div>
      </header>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((m) => (
          <motion.div 
            key={m.id} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-xl max-w-[80%] ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#2A2A35]'}`}>
            {m.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-[#2A2A35]">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#0F0F13] text-white outline-none"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="mt-2 w-full bg-[#FF3366] p-2 rounded-lg font-bold">Send</button>
      </div>
    </div>
  );
};