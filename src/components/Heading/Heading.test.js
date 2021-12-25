import { render, screen } from '@testing-library/react';
import Heading from '.';

test('renders given title', () => {
    render(<Heading>Adding Todo Form</Heading>);
    const titleElement = screen.getByText(/Adding Todo Form/i);
    expect(titleElement).toBeInTheDocument();
});
