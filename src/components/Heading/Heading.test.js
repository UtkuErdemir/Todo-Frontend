import { render, screen } from '@testing-library/react';
import Heading from '.';

test('renders given title', () => {
    render(<Heading title="Adding Todo Form"/>);
    const titleElement = screen.getByText(/Adding Todo Form/i);
    expect(titleElement).toBeInTheDocument();
});
