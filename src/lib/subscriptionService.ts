/**
 * Subscription & Credit Service (Simulated)
 * Handles the logic for credit-based interactions and subscription status.
 */

export interface UserCredits {
  userId: string;
  balance: number;
  subscriptionActive: boolean;
}

// In-memory state simulation
const userStore: Record<string, UserCredits> = {
  'user_123': { userId: 'user_123', balance: 50, subscriptionActive: false }
};

export const getCredits = (userId: string): UserCredits => {
  return userStore[userId] || { userId, balance: 0, subscriptionActive: false };
};

export const consumeCredit = (userId: string, amount: number): boolean => {
  const user = userStore[userId];
  if (!user || user.balance < amount) return false;
  
  user.balance -= amount;
  return true;
};

export const purchaseCredits = (userId: string, amount: number): void => {
  if (userStore[userId]) {
    userStore[userId].balance += amount;
  }
};

export const toggleSubscription = (userId: string): void => {
  if (userStore[userId]) {
    userStore[userId].subscriptionActive = !userStore[userId].subscriptionActive;
  }
};
