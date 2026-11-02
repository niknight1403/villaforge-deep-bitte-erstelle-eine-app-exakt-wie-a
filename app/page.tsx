import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <h1 className="font-bold">MyBabes AI Clone</h1>
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </header>
      <section className="pt-20">
        <div className="p-4 bg-[#1A1A22] rounded-lg border border-[#333]">
          <p className="text-[#A0A0B0]">Willkommen beim KI-Companion-Erlebnis. Wähle einen Chat, um zu beginnen.</p>
        </div>
      </section>
    </main>
  );
}