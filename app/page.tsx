import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between p-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">MyBabes AI</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <section className="mt-8">
        <div className="bg-[#1A1A22] p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Willkommen bei MyBabes</h2>
          <p className="text-[#A0A0B0] mt-2">Interaktive KI-Companion Plattform.</p>
        </div>
      </section>
    </main>
  );
}