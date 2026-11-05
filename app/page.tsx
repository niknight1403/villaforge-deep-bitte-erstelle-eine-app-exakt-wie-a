import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between pb-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A22] border-2 border-[#FF3366]" />
          <div>
            <h1 className="font-bold">MyBabes AI</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-bold">Willkommen bei MyBabes</h2>
        <p className="text-[#A0A0B0] mt-2">Wähle deinen Companion und starte das Gespräch.</p>
      </motion.div>
    </main>
  );
}