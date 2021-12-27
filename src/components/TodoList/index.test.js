import { render,screen } from "@testing-library/react";
import TodoList from '.';

test('renders itself with type', () => {
    render(<TodoList type={"circle"}></TodoList>);
    const listElement = screen.getByLabelText(/todo-list/i);
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveAttribute('type','circle');
});