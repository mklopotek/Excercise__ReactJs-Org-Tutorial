import React from 'react'
import Square from './Square'
import './board.css'

class Board extends React.Component {
    render() {
        'Next player:'

        return(
            <div className='board'>
                <div className="board-row"></div>
                <Square value={0}/>
                <Square value={1}/>
                <Square value={2}/>
                <div className="board-row"></div>
                <Square value={3}/>
                <Square value={4}/>
                <Square value={5}/>
                <div className="board-row"></div>
                <Square value={6}/>
                <Square value={7}/>
                <Square value={8}/>
            </div>
        )
    }
}

export default Board