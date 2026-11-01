import React from 'react';

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700" />
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="bg-[#1A1A22] p-3 rounded-lg max-w-[80%] self-start">
          Hallo! Wie kann ich dir heute helfen?
        </div>
      </main>
      <footer className="p-4 border-t border-[#1A1A22]">
        <input 
          type="text" 
          className="w-full bg-[#1A1A22] p-3 rounded-full outline-none focus:ring-2 focus:ring-[#FF3366]"
          placeholder="Schreibe eine Nachricht..."
        />
      </footer>
    </div>
  );
}