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
            <div className='board'>
                <div className="board-row"></div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                <div className="board-row"></div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                <div className="board-row"></div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        )
}

export default Board