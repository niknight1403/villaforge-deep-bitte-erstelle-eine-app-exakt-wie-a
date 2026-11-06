import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0F0F13] text-white p-4">
      <h1 className="text-4xl font-bold text-[#FF3366]">MyBabes Clone</h1>
      <p className="mt-4 text-[#A0A0B0]">Willkommen in der interaktiven Companion-Plattform.</p>
      <div className="mt-8 p-6 bg-[#1A1A22] rounded-xl">
        <p>Chat-Interface wird initialisiert...</p>
      </div>
    </main>
  );
}