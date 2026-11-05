import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy loading heavy components to optimize bundle size
const MessageList = lazy(() => import('./MessageList'));
const InputArea = lazy(() => import('./InputArea'));

export const OptimizedChat = () => {
  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="fixed top-0 w-full h-16 bg-[#1A1A22] border-b border-[#2A2A35] flex items-center px-4 z-50">
        <div className="w-10 h-10 rounded-full bg-[#FF3366] mr-3" />
        <span className="font-bold">Companion</span>
        <div className="ml-2 w-2 h-2 rounded-full bg-green-500" />
      </header>
      <main className="flex-1 pt-16 pb-20 overflow-y-auto">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <MessageList />
        </Suspense>
      </main>
      <footer className="fixed bottom-0 w-full bg-[#1A1A22] p-4">
        <Suspense fallback={null}>
          <InputArea />
        </Suspense>
      </footer>
    </div>
  );
};
