import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Square from '../components/Square';

test('renders square with value and handles click', () => {
    const handleClick = jest.fn();
    render(<Square value='X' onclick={handleClick} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('X');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
})