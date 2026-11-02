import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between py-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">M</div>
          <div>
            <h1 className="font-semibold">MyBabes Companion</h1>
            <div className="flex items-center gap-1 text-xs text-[#A0A0B0]">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
            </div>
          </div>
        </div>
      </header>
      <section className="mt-8">
        <div className="bg-[#1A1A22] p-4 rounded-xl">
          <p className="text-[#A0A0B0]">Willkommen! Wie kann ich dir heute Gesellschaft leisten?</p>
        </div>
      </section>
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          placeholder="Schreibe eine Nachricht..." 
          className="w-full p-3 rounded-lg bg-[#1A1A22] border border-[#333] focus:outline-none focus:border-primary"
        />
      </footer>
    </main>
  );
}