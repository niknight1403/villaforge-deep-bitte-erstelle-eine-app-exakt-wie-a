import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-4">
      <header className="flex items-center justify-between py-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366] flex items-center justify-center">
            <span className="text-[#FF3366]">AI</span>
          </div>
          <div>
            <h1 className="font-bold">Luna</h1>
            <div className="flex items-center gap-1 text-xs text-[#A0A0B0]">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        <div className="bg-[#1A1A22] p-3 rounded-2xl rounded-tl-none max-w-[80%]">
          <p className="text-sm">Hallo! Wie kann ich dir heute den Tag verschönern?</p>
        </div>
      </div>
      <footer className="pt-4">
        <input 
          type="text" 
          placeholder="Schreibe eine Nachricht..." 
          className="w-full bg-[#1A1A22] p-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
        />
      </footer>
    </div>
  );
}