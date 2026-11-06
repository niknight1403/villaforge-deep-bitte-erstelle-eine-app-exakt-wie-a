import React from 'react';
import { motion } from 'framer-motion';
import { initiatePayment } from '../lib/subscriptionService';

export const PaywallModal = ({ userId, onClose }: { userId: string; onClose: () => void }) => {
  const handlePurchase = async (plan: 'credits' | 'premium') => {
    const result = await initiatePayment(userId, plan);
    if (result.success) {
      alert('Zahlung erfolgreich simuliert!');
      onClose();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-[#1A1A22] p-8 rounded-2xl max-w-md w-full border border-[#FF3366]/30">
        <h2 className="text-2xl font-bold text-white mb-4">Premium Zugang</h2>
        <p className="text-[#A0A0B0] mb-6">Wähle ein Paket, um fortzufahren.</p>
        <div className="space-y-4">
          <button onClick={() => handlePurchase('credits')} className="w-full py-3 bg-[#FF3366] text-white rounded-lg font-bold">50 Credits kaufen</button>
          <button onClick={() => handlePurchase('premium')} className="w-full py-3 bg-transparent border border-[#FF3366] text-[#FF3366] rounded-lg font-bold">Premium Abo</button>
          <button onClick={onClose} className="w-full py-2 text-[#A0A0B0] text-sm">Abbrechen</button>
        </div>
      </div>
    </motion.div>
  );
};