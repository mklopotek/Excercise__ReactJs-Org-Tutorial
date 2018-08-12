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
      stepNumber: 0
    }
  }

  handleClick = (index) => {
    const historySquares = this.state.history.slice(0, this.state.stepNumber + 1)
    const currentSquares = historySquares[historySquares.length - 1]
    const allSquares = currentSquares.allSquares.slice()

    if (this.calculateWinner(allSquares) || allSquares[index]) {
      return
    }

    allSquares[index] = this.state.isXIsNextPlayer ? 'X' : 'O'

    this.setState({
      history: historySquares.concat([{ allSquares: allSquares }]),
      isXIsNextPlayer: !this.state.isXIsNextPlayer,
      stepNumber: historySquares.length
    })

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isXIsNextPlayer: (step % 2) === 0,
    });
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
    const historySquares = this.state.history
    const currentSquares = historySquares[this.state.stepNumber]

    const winner = this.calculateWinner(currentSquares.allSquares)
    let status
    if (winner) {
      status = <div className='game__status--winner'>The winner is: {winner}</div>
    } else {
      status = <div className='game__status--nextPlayer'>Next player: {this.state.isXIsNextPlayer ? 'X' : 'O'} </div>
    }

    const moves = historySquares.map((step, move) => {
      const description = move ?
        'Go to move #' + move
        :
        'Start'

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {description}
          </button>
        </li>
      );
    });


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

        <div className='game__info'>
        <ul>{moves}</ul>
        </div>

      </div>
    )
  }

}

export default Game;