import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between py-4 border-b border-[#1A1A22]">
        <h1 className="text-xl font-bold">MyBabes Clone</h1>
        <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
      </header>
      <section className="mt-8">
        <h2 className="text-2xl">Willkommen bei deinem KI-Companion</h2>
        <p className="text-[#A0A0B0] mt-2">Interagiere, entdecke und erlebe Premium-KI-Inhalte.</p>
      </section>
    </main>
  );
}