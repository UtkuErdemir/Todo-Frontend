import { render, screen, fireEvent } from '@testing-library/react';
import AppTextInput from '.';

test('renders text input default placeholder', () => {
  render(<AppTextInput/>);
  const placeholder = screen.queryByPlaceholderText(/Please fill the input./i);
  expect(placeholder).toBeInTheDocument();
});

test('renders text input given placeholder', () => {
  render(<AppTextInput placeholder={"Please type the todo name."}/>);
  const placeholder = screen.queryByPlaceholderText(/Please type the todo name./i);
  expect(placeholder).toBeInTheDocument();
});

test('renders text input given value', () => {
  render(<AppTextInput value={"Make the app."}/>);
  const value = screen.getByDisplayValue(/Make the app./i);
  expect(value).toBeInTheDocument();
});

test('emits given changeFn', () => {
  const mockedFunction = jest.fn();
  render(<AppTextInput changeValue={mockedFunction}/>);
  const input = screen.getByLabelText('app-text-input');
  fireEvent.change(input, {target: {value: "Make the app."}})
  expect(mockedFunction).toHaveBeenCalled();
});