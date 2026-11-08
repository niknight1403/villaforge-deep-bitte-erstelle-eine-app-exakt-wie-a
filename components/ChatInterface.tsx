import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// UI-Komponente fuer das Chat-Interface (Mobile-First)
// Farben: Hintergrund #0F0F13, Karten #1A1A22, Akzent #FF3366

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! Wie geht es dir heute?', sender: 'ai' },
    { id: 2, text: 'Mir geht es super, danke!', sender: 'user' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white font-sans">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-[#2A2A35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h2 className="font-bold">Luna AI</h2>
            <span className="text-xs text-green-400">● Online</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 pt-20 pb-24">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-2xl max-w-[80%] ${msg.sender === 'user' ? 'ml-auto bg-[#FF3366]' : 'bg-[#1A1A22]'}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 w-full p-4 bg-[#1A1A22]">
        <div className="flex gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded-full bg-[#0F0F13] border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
            placeholder="Schreibe eine Nachricht..."
          />
          <button onClick={sendMessage} className="px-6 py-2 bg-[#FF3366] rounded-full font-bold">Senden</button>
        </div>
      </footer>
    </div>
  );
}