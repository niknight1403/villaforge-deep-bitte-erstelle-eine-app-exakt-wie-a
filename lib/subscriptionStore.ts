import { create } from 'zustand';

interface SubscriptionState {
  credits: number;
  isPremium: boolean;
  useCredit: () => boolean;
  addCredits: (amount: number) => void;
  setPremium: (status: boolean) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  credits: 10,
  isPremium: false,
  useCredit: () => {
    let success = false;
    set((state) => {
      if (state.isPremium || state.credits > 0) {
        success = true;
        return { credits: state.isPremium ? state.credits : state.credits - 1 };
      }
      return state;
    });
    return success;
  },
  addCredits: (amount) => set((state) => ({ credits: state.credits + amount })),
  setPremium: (status) => set({ isPremium: status }),
}));