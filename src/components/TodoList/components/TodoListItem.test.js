import TodoListItem from './TodoListItem';
import { render,screen } from "@testing-library/react";

test('renders itself with text', () => {
    render(<TodoListItem text={"Todo List Item Element"}></TodoListItem>);
    const listItem = screen.getByText(/Todo List Item Element/i);
    expect(listItem).toBeInTheDocument();
});