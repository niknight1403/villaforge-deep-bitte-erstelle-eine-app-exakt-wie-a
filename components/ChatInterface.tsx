import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hallo! Wie kann ich dir heute helfen?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1A1A22] p-4 flex items-center justify-between border-b border-[#2A2A35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h2 className="font-bold">Companion</h2>
            <div className="flex items-center text-xs text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1" /> Online
            </div>
          </div>
        </div>
        <button className="text-xl">...</button>
      </header>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto pt-24 pb-20 px-4 space-y-4">
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

      {/* Input Bar */}
      <div className="fixed bottom-0 w-full p-4 bg-[#1A1A22]">
        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-[#0F0F13] p-3 rounded-full border border-[#2A2A35] focus:outline-none"
            placeholder="Nachricht schreiben..."
          />
          <button onClick={handleSend} className="bg-[#FF3366] px-6 py-2 rounded-full font-bold">Senden</button>
        </div>
      </div>
    </div>
  );
}