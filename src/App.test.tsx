import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Nerds At Home navbar brand', () => {
  render(<App />);
  const brandElement = screen.getByRole('link', { name: /Nerds At Home/i });
  expect(brandElement).toBeInTheDocument();
});
