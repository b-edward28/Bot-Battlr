import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bot Battlr', () => {
  render(<App />);
  const linkElement = screen.getByText(/bot battlr/i);
  expect(linkElement).toBeInTheDocument();
});
