import React from 'react';

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center">
        <div className="w-10 h-10 rounded-full bg-[#FF3366] mr-3" />
        <h1 className="font-bold">Companion</h1>
        <span className="ml-2 text-green-500">●</span>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-[#1A1A22] p-3 rounded-lg max-w-[80%]">
          Hallo! Wie kann ich dir heute helfen?
        </div>
      </div>
      <input 
        className="m-4 p-3 bg-[#1A1A22] rounded-lg border border-[#FF3366] outline-none" 
        placeholder="Nachricht schreiben..."
      />
    </div>
  );
}