import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: number;
  mediaUrl?: string;
}

export const ChatManager = ({ characterId }: { characterId: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`chat_${characterId}`);
    if (saved) setMessages(JSON.parse(saved));
  }, [characterId]);

  // Save history on update
  useEffect(() => {
    localStorage.setItem(`chat_${characterId}`, JSON.stringify(messages));
  }, [messages, characterId]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: input, timestamp: Date.now() };
    const newAiMsg: Message = { id: (Date.now() + 1).toString(), sender: 'ai', text: 'Ich bin aktuell im Demo-Modus. KI-Anbindung folgt.', timestamp: Date.now() + 1 };
    setMessages([...messages, newUserMsg, newAiMsg]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-[#0F0F13] text-white p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-3 rounded-lg max-w-[80%] ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'}`}>
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-[#1A1A22] p-3 rounded-lg outline-none" placeholder="Schreibe etwas..." />
        <button onClick={sendMessage} className="bg-[#FF3366] px-6 py-2 rounded-lg font-bold">Senden</button>
      </div>
    </div>
  );
};