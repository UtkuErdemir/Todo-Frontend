import { render, screen } from '@testing-library/react';
import AppButton from '.';

test('renders button default text', () => {
    render(<AppButton/>);
    const titleElement = screen.getByText(/Click/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders given button text', () => {
  render(<AppButton title="Add" />);
  const titleElement = screen.getByText(/Add/i);
  expect(titleElement).toBeInTheDocument();
});

test('emit given button press event', () => {
    const mockedFunction = jest.fn();
    render(<AppButton onPress={mockedFunction}/>);
    const button = screen.getByRole('button');
    button.click();
    expect(mockedFunction).toHaveBeenCalled();
});