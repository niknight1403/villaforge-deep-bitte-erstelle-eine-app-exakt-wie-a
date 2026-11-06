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

  const handleSend = () => {
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
            <p className="font-bold">Companion</p>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
        <button className="text-xl">⋮</button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 pt-20 pb-24">
        {messages.map((msg) => (
          <motion.div 
            key={msg.id} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-3 rounded-2xl max-w-[80%] ${msg.sender === 'ai' ? 'bg-[#1A1A22] self-start' : 'bg-[#FF3366] self-end ml-auto'}`}
          >
            {msg.text}
          </motion.div>
        ))}
      </main>

      <footer className="fixed bottom-0 w-full p-4 bg-[#1A1A22]">
        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="flex-1 bg-[#0F0F13] p-3 rounded-full outline-none"
            placeholder="Schreibe eine Nachricht..."
          />
          <button onClick={handleSend} className="bg-[#FF3366] px-6 py-2 rounded-full font-bold">Senden</button>
        </div>
      </footer>
    </div>
  );
}