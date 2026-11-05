import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 right-0 p-4 border-b border-[#1A1A22] bg-[#0F0F13]/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A22] flex items-center justify-center">
            <span className="text-[#FF3366]">AI</span>
          </div>
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <div className="pt-20 pb-20">
        <div className="bg-[#1A1A22] p-4 rounded-xl mb-4">
          <p>Hallo! Wie kann ich dir heute den Tag versüßen?</p>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          placeholder="Schreibe eine Nachricht..." 
          className="w-full p-3 rounded-full bg-[#1A1A22] border border-[#FF3366] focus:outline-none"
        />
      </footer>
    </main>
  );
}