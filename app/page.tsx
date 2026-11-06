import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 w-full p-4 flex items-center justify-between bg-[#1A1A22] border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">MyBabes AI</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <div id="chat-interface" className="pt-20">
        <p className="text-[#A0A0B0]">Willkommen im Chat-Interface.</p>
      </div>
    </main>
  );
}