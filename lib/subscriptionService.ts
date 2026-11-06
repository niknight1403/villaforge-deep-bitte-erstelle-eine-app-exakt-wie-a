/**
 * Subscription & Credit Service (Mock Implementation)
 * Provides logic for managing user credit balances and subscription status.
 */

export interface UserBalance {
  userId: string;
  credits: number;
  isPremium: boolean;
}

// In-memory state for demonstration
const userBalances: Record<string, UserBalance> = {
  'user_123': { userId: 'user_123', credits: 50, isPremium: false },
};

export const getBalance = (userId: string): UserBalance => {
  return userBalances[userId] || { userId, credits: 0, isPremium: false };
};

export const deductCredits = (userId: string, amount: number): boolean => {
  const user = userBalances[userId];
  if (user && user.credits >= amount) {
    user.credits -= amount;
    return true;
  }
  return false;
};

export const addCredits = (userId: string, amount: number): void => {
  if (userBalances[userId]) {
    userBalances[userId].credits += amount;
  }
};

export const upgradeToPremium = (userId: string): void => {
  if (userBalances[userId]) {
    userBalances[userId].isPremium = true;
  }
};

/**
 * Simulated Stripe Checkout Flow
 */
export const initiatePayment = async (userId: string, plan: 'credits' | 'premium'): Promise<{ success: boolean; url: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log(`Initiating payment for ${userId} - Plan: ${plan}`);
  return {
    success: true,
    url: '/dashboard/payment-success'
  };
};