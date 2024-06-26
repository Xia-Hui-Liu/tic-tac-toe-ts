// src/tests/Game.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../components/Game';

test('plays a game of tic-tac-toe', () => {
    const { getAllByRole, getByText } = render(<Game />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttons = getAllByRole('button');
    
    fireEvent.click(buttons[0]); // X
    fireEvent.click(buttons[1]); // O
    fireEvent.click(buttons[4]); // X
    fireEvent.click(buttons[2]); // O
    fireEvent.click(buttons[8]); // X
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Next player: O')).toBeInTheDocument();
    fireEvent.click(buttons[3]); // O
    fireEvent.click(buttons[6]); // X
    fireEvent.click(buttons[5]); // O
    fireEvent.click(buttons[7]); // X
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Next player: O')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Winner: X')).toBeInTheDocument();
});
