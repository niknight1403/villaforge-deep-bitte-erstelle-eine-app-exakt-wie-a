import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock-KI-Antwort-Service
const getMockResponse = (input: string) => {
  const responses = ['Interessant, erzähl mir mehr!', 'Das sehe ich genauso.', 'Wie fühlst du dich dabei?', 'Erzähl mir von deinem Tag.'];
  return responses[Math.floor(Math.random() * responses.length)];
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user' | 'ai'}[]>([
    { id: 1, text: 'Hallo! Wie geht es dir heute?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newUserMsg = { id: Date.now(), text: input, sender: 'user' as const };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: getMockResponse(input), sender: 'ai' }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <div>
          <h2 className="font-bold">Companion</h2>
          <span className="text-xs text-green-500">● Online</span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map(m => (
            <motion.div 
              key={m.id} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-2xl max-w-[80%] ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}>
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="p-4 bg-[#1A1A22]">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="w-full bg-[#0F0F13] p-3 rounded-lg outline-none border border-[#FF3366]/30"
          placeholder="Schreibe eine Nachricht..."
        />
      </div>
    </div>
  );
}