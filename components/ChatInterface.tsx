import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export const ChatInterface = React.memo(() => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hallo! Wie kann ich dir heute helfen?', sender: 'ai' }
  ]);

  const renderedMessages = useMemo(() => messages.map((msg) => (
    <motion.div
      key={msg.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg max-w-[80%] ${msg.sender === 'ai' ? 'bg-[#1A1A22] self-start' : 'bg-[#FF3366] self-end'}`}
    >
      <p className="text-white">{msg.text}</p>
    </motion.div>
  )), [messages]);

  return (
    <div className="flex flex-col h-full bg-[#0F0F13] p-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {renderedMessages}
      </div>
    </div>
  );
});

ChatInterface.displayName = 'ChatInterface';