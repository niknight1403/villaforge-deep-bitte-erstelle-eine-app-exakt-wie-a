// Mock Stripe integration for simulation (no real API calls)
exports.createCharge = async (amount, currency, source) => {
  // Simulate successful payment
  return {
    id: 'ch_mock_' + Date.now(),
    amount,
    currency,
    status: 'paid',
    created: new Date().toISOString(),
  };
};