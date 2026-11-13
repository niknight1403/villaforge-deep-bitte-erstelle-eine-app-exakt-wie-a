import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#FF3366]">Aurora Companion</h1>
        <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366]" />
      </header>
      <section className="bg-[#1A1A22] p-6 rounded-xl">
        <h2 className="text-xl mb-4">Willkommen im Studio</h2>
        <p className="text-gray-400">Entdecke deine Begleiterinnen.</p>
      </section>
    </main>
  );
}