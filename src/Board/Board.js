import React from 'react'
import Square from './Square'
import './board.css'

class Board extends React.Component {
    renderSquare = (number) => 
        <Square
            value={this.props.value}
            handleClick={this.handleClick}
        /> 


    render() {
        'Next player:'

        return (
            <div className='board'>
                <div className="board-row"></div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                <div className="board-row"></div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                <div className="board-row"></div>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        )
    }
}

export default Board