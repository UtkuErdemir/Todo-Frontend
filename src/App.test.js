import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all components in the page', () => {
  render(<App/>);
  
  const input = screen.getByLabelText('app-text-input');
  const button = screen.getByRole('button');
  const heading = screen.getByText('Adding Todo Form');

  expect(input).toBeVisible();
  expect(button).toBeVisible();
  expect(heading).toBeVisible();
});
