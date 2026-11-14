import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-6 flex flex-col items-center">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md flex justify-between items-center py-4 border-b border-[#1A1A22]"
      >
        <div className="w-10 h-10 rounded-full bg-[#FF3366] flex items-center justify-center font-bold">A</div>
        <h1 className="text-xl font-semibold">Aurora Studio</h1>
        <div className="text-sm text-gray-400">Online</div>
      </motion.header>
      
      <div className="flex-1 w-full max-w-md flex flex-col justify-center items-center gap-4">
        <div className="w-full p-6 bg-[#1A1A22] rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">Willkommen bei Aurora</h2>
          <p className="text-gray-400">Dein exklusiver Begleiter für Geschichten und Dialoge.</p>
        </div>
        <button className="w-full py-3 bg-[#FF3366] rounded-xl font-bold hover:bg-[#ff1a55] transition-colors">
          Chat starten
        </button>
      </div>
    </main>
  );
}