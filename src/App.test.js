import { render, screen } from '@testing-library/react';
import App from './App';


test('renders all components in the page', () => {
  const service = require('./utils/service');
  const getTodos = jest.spyOn(service,'getTodos').mockResolvedValue({data:{"success":true,message:'Ok.'}})
  render(<App/>);
  const input = screen.getByLabelText('app-text-input');
  const button = screen.getByRole('button');
  const heading = screen.getByText('Adding Todo Form');

  expect(input).toBeVisible();
  expect(button).toBeVisible();
  expect(heading).toBeVisible();
  expect(getTodos).toBeCalled();
});

test('calls addTodo when click to button', () => {
  const service = require('./utils/service');
  const getTodos = jest.spyOn(service,'getTodos').mockResolvedValue({data:{"success":true,message:'Ok.'}})
  render(<App/>);
  const button = screen.getByRole('button');
  const addTodo = jest.spyOn(service,'addTodo').mockResolvedValue({data:{"success":true,message:'Ok.'}})
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  button.click()
  expect(addTodo).toBeCalledTimes(1);
  expect(getTodos).toBeCalled();
});
