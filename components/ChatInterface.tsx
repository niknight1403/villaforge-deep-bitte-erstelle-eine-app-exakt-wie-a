import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock-Daten für den Chat
const INITIAL_MESSAGES = [
  { id: 1, sender: 'ai', text: 'Hallo! Wie geht es dir heute?' },
  { id: 2, sender: 'user', text: 'Mir geht es gut, danke!' },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h2 className="font-bold">Companion</h2>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 mt-20 mb-20">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span className={`inline-block p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-[#FF3366]' : 'bg-[#1A1A22]'}`}>
                {msg.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
      <footer className="fixed bottom-0 w-full p-4 bg-[#1A1A22]">
        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="flex-1 p-3 rounded-full bg-[#0F0F13] border border-gray-700 focus:outline-none focus:border-[#FF3366]"
            placeholder="Nachricht schreiben..."
          />
          <button onClick={sendMessage} className="bg-[#FF3366] px-6 py-2 rounded-full font-bold">Senden</button>
        </div>
      </footer>
    </div>
  );
}