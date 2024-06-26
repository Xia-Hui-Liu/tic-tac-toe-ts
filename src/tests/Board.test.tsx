// src/tests/Board.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from '../components/Board';

test('renders board and handles square clicks', () => {
    const squares = Array(9).fill(null);
    const handleClick = jest.fn();
    const { getAllByRole } = render(<Board squares={squares} onclick={handleClick} />);
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(9);
    fireEvent.click(buttons[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(0);
});
