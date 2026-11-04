export const getMockResponse = async (message: string): Promise<string> => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  const responses = [
    "That's fascinating! Tell me more about that.",
    "I'm really enjoying our conversation today.",
    "That sounds like an interesting perspective. What do you think about it?",
    "I'm here for you. What's on your mind?",
    "I love how you think!"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};
