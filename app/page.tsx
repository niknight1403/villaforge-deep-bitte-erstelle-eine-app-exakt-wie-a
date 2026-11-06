import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <div className="pt-20 pb-24">
        <div className="p-4 bg-[#1A1A22] rounded-lg mb-4">
          <p className="text-sm">Hallo! Wie kann ich dir heute helfen?</p>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-[#1A1A22]">
        <input 
          type="text" 
          placeholder="Schreibe eine Nachricht..." 
          className="w-full p-3 rounded-full bg-[#0F0F13] border border-[#333] text-white"
        />
      </footer>
    </main>
  );
}