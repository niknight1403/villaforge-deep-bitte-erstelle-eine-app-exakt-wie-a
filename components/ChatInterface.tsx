import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock-Daten für den Chat
const INITIAL_MESSAGES = [
  { id: 1, sender: 'ai', text: 'Hallo! Wie kann ich dir heute helfen?' },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages([...messages, newMsg]);
    setInput('');
    // Hier würde die KI-Logik folgen
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] border-b border-[#2A2A35] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h2 className="font-bold">Companion</h2>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 pt-20">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div 
              key={m.id} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg max-w-[80%] ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
      <div className="p-4 bg-[#1A1A22]">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="w-full p-3 rounded bg-[#0F0F13] border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
          placeholder="Schreibe eine Nachricht..."
        />
        <button onClick={handleSend} className="mt-2 w-full bg-[#FF3366] py-2 rounded font-bold">Senden</button>
      </div>
    </div>
  );
}