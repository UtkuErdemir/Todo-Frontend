import { render, screen } from '@testing-library/react';
import App from './App';
import {TodoService} from './utils/TodoService'; 

jest.mock('./utils/TodoService');

beforeEach(() => {
  TodoService.mockClear();
});


test('renders all components in the page', () => {
  render(<App/>);
  
  const input = screen.getByLabelText('app-text-input');
  const button = screen.getByRole('button');
  const heading = screen.getByText('Adding Todo Form');

  expect(input).toBeVisible();
  expect(button).toBeVisible();
  expect(heading).toBeVisible();
});

test('calls addTodo when click to button', () => {
  render(<App/>);
  const button = screen.getByRole('button');
  const addTodo = jest.spyOn(TodoService.mock.instances[0],'addTodo').mockResolvedValue({data:{"success":true,message:'Ok.'}})
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  button.click()
  expect(addTodo).toBeCalledTimes(1);
});
