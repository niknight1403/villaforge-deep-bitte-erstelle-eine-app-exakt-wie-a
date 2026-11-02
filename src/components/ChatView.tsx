import React, { useState } from 'react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatView() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'ai', text: 'Hallo! Wie kann ich dir heute helfen?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-600 mr-3" />
        <div>
          <h1 className="font-bold">Companion</h1>
          <span className="text-xs text-green-500">Online</span>
        </div>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((m) => (
          <div key={m.id} className={`mb-4 p-3 rounded-lg ${m.sender === 'user' ? 'bg-[#FF3366] ml-auto' : 'bg-[#1A1A22]'} max-w-[80%]`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="p-4 bg-[#1A1A22] flex">
        <input 
          className="flex-1 bg-transparent outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nachricht schreiben..."
        />
        <button onClick={handleSend} className="text-[#FF3366] font-bold">Senden</button>
      </div>
    </div>
  );
}