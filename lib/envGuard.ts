/**
 * Environment Guard for Aurora Companion Studio
 * Validates critical configuration before runtime execution.
 */
export const validateEnvironment = () => {
  const required = ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_STRIPE_KEY'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.warn(`[EnvGuard] Missing optional configuration: ${missing.join(', ')}. Using mock defaults.`);
    return false;
  }
  return true;
};

export const withErrorHandling = async <T>(fn: () => Promise<T>, fallback: T): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    console.error('[ServiceGuard] Execution failed, returning fallback:', error);
    return fallback;
  }
};
