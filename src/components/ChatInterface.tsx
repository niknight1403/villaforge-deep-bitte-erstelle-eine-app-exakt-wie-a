import React from 'react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full p-4 bg-[#1A1A22] flex items-center justify-between border-b border-[#2A2A35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-20 p-4 overflow-y-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-[#1A1A22] rounded-lg max-w-[80%]">
          Hallo! Wie kann ich dir heute helfen?
        </motion.div>
      </main>
      <footer className="p-4 bg-[#1A1A22]">
        <input className="w-full p-3 rounded-full bg-[#0F0F13] border border-[#FF3366] focus:outline-none" placeholder="Nachricht schreiben..." />
      </footer>
    </div>
  );
}