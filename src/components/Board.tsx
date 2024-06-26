import React from "react";
import Square from "../components/Square";

interface BoardProps
{
    squares: (null|string)[];
    onclick: (i: number) => void;
}

const Board : React.FC<BoardProps> = ({squares, onclick}) =>
{
    const renderSquare = (i: number) => {
        return <Square value={squares[i]} onclick={() => onclick(i)} />
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board