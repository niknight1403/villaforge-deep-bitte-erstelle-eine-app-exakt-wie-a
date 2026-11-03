import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between py-4 border-b border-[#1A1A22]">
        <h1 className="text-xl font-bold text-[#FF3366]">MyBabes Clone</h1>
        <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366]" />
      </header>
      <section className="mt-8">
        <h2 className="text-2xl">Willkommen in der Companion-Welt</h2>
        <p className="text-[#A0A0B0] mt-2">Interagiere mit deiner KI-Begleitung.</p>
      </section>
    </main>
  );
}