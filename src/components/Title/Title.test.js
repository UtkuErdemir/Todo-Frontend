import { render, screen } from '@testing-library/react';
import Title from '.';

test('renders given title', () => {
    render(<Title title="Adding Todo Form"/>);
    const titleElement = screen.getByText(/Adding Todo Form/i);
    expect(titleElement).toBeInTheDocument();
});
