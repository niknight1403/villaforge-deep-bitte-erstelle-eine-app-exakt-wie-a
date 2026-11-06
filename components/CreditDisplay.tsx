import React from 'react';
import { useStore } from '../lib/store'; // Assuming a Zustand store exists

export const CreditDisplay = () => {
  const { balance } = useStore();
  return (
    <div className="fixed top-4 right-4 bg-[#1A1A22] px-4 py-2 rounded-full border border-[#FF3366] text-[#FF3366] font-bold">
      Credits: {balance}
    </div>
  );
};