import React from 'react';
import { motion } from 'framer-motion';

interface PaywallProps {
  onPurchase: (plan: string) => void;
  isOpen: boolean;
}

export const PaywallOverlay: React.FC<PaywallProps> = ({ onPurchase, isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F13]/90 backdrop-blur-md p-6"
    >
      <div className="bg-[#1A1A22] p-8 rounded-2xl max-w-sm w-full border border-[#FF3366]/20">
        <h2 className="text-2xl font-bold text-white mb-4">Unlock Premium Access</h2>
        <p className="text-[#A0A0B0] mb-6">Get unlimited messages and exclusive content with a premium subscription.</p>
        <button 
          onClick={() => onPurchase('monthly')}
          className="w-full py-3 bg-[#FF3366] text-white rounded-xl font-bold hover:bg-[#FF3366]/90 transition-all"
        >
          Subscribe Now - $9.99/mo
        </button>
        <button 
          onClick={() => onPurchase('credits')}
          className="w-full py-3 mt-3 bg-transparent border border-[#FF3366] text-[#FF3366] rounded-xl font-bold hover:bg-[#FF3366]/10 transition-all"
        >
          Buy 50 Credits
        </button>
      </div>
    </motion.div>
  );
};