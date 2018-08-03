import React from 'react'
import Square from './Square'
import './board.css'

const Board = ({onClick, allSquares}) => {
    const renderSquare = (index) =>(
    <Square
        value={allSquares[index]}
        onClick={()=>onClick(index)}
    />)

        return (
            <div>
                <div className="game__board--row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                </div>
                <div className="game__board--row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                </div>
                <div className="game__board--row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                </div>
            </div>
        )
}

export default Board