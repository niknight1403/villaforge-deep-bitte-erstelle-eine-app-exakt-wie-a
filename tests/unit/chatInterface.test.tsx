// tests/unit/chatInterface.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatInterface from '../src/components/ChatInterface';

describe('ChatInterface', () => {
  test('renders without crashing', () => {
    render(<ChatInterface />);
    expect(screen.getByText(/chat/i)).toBeInTheDocument();
  });
});