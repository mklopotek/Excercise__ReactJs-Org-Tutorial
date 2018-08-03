import React from 'react';
import Board from './Board'
// import CalculateWinner from './CalculateWinner'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      history: [
        {
          allSquares: [null, null, null,
                      null, null, null,
                      null, null, null]
        }
      ],
      isXIsNextPlayer: true,
    }
  }

  handleClick = (index) => {
    const historySquares =this.state.history
    const currentSquares =historySquares[historySquares.length - 1]
    const allSquares = currentSquares.allSquares.slice()

    if (this.calculateWinner(allSquares) || allSquares[index]) {
      return
    }

    allSquares[index] = this.state.isXIsNextPlayer ? 'X' : 'O'

    this.setState({
      history: historySquares.concat([{allSquares: allSquares}]),
      isXIsNextPlayer: !this.state.isXIsNextPlayer,
    })

  }

  calculateWinner = (allSquares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (allSquares[a] && allSquares[a] === allSquares[b] && allSquares[a] === allSquares[c]) {
        return allSquares[a];
      }
    }
    return null;
  }

  render() {
    const historySquares =this.state.history
    const currentSquares =historySquares[historySquares.length - 1]
    
    const winner = this.calculateWinner(currentSquares.allSquares)
    let status

    if (winner) {
      status = <div className='game__status--winner'>The winner is: {winner}</div>
    } else {
      status = <div className='game__status--nextPlayer'>Next player: {this.state.isXIsNextPlayer ? 'X' : 'O'} </div>
    }

    return (
      <div className='game'>

        <div className="game__status">
          <strong>
            {/* <CalculateWinner
              allSquares={this.state.allSquares}
              isXIsNextPlayer={this.state.isXIsNextPlayer}
            /> */}

            {status}
          </strong>
        </div>
        <div className="game__board">
        <Board
          onClick={this.handleClick}
          allSquares={currentSquares.allSquares}
        />
        </div>

        <div className='game__info'></div>
        <ol></ol>

      </div>
    )
  }

}

export default Game;