import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hallo! Wie kann ich dir heute helfen?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-[#2A2A35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h2 className="font-bold">Companion</h2>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
        <button className="text-xl">⋮</button>
      </header>

      <div className="flex-1 overflow-y-auto pt-20 pb-24 px-4 space-y-4">
        {messages.map((m) => (
          <motion.div 
            key={m.id} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-2xl max-w-[80%] ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}
          >
            {m.text}
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-0 w-full p-4 bg-[#1A1A22] border-t border-[#2A2A35]">
        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="flex-1 bg-[#0F0F13] p-3 rounded-full outline-none border border-[#2A2A35]"
            placeholder="Nachricht schreiben..."
          />
          <button onClick={sendMessage} className="bg-[#FF3366] px-6 rounded-full font-bold">Senden</button>
        </div>
      </div>
    </div>
  );
}