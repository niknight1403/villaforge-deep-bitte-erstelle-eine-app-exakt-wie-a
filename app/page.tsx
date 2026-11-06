import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between p-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366] flex items-center justify-center">
            <span className="text-[#FF3366]">AI</span>
          </div>
          <div>
            <h1 className="font-bold">Companion</h1>
            <div className="flex items-center gap-1 text-xs text-[#A0A0B0]">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
            </div>
          </div>
        </div>
      </header>
      <section className="mt-8 flex flex-col gap-4">
        <div className="p-4 bg-[#1A1A22] rounded-lg max-w-[80%]">
          <p>Hallo! Wie kann ich dir heute den Tag versüßen?</p>
        </div>
      </section>
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          placeholder="Schreibe eine Nachricht..." 
          className="w-full p-3 rounded-full bg-[#1A1A22] border border-[#FF3366] focus:outline-none"
        />
      </footer>
    </main>
  );
}