import React from 'react';
import Board from './Board'
// import CalculateWinner from './CalculateWinner'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      allSquares: [null, null, null,
        null, null, null,
        null, null, null,],
      isXIsNextPlayer: true,
    }
  }

  handleClick = (index) => {
    const allSquares = this.state.allSquares.slice()

    if (this.calculateWinner(allSquares) || allSquares[index]) {
      return
    }

    allSquares[index] = this.state.isXIsNextPlayer ? 'X' : 'O'

    this.setState({
      allSquares: allSquares,
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
    const winner = this.calculateWinner(this.state.allSquares)
    let status

    if(winner){status = <div className='status__winner'>The winner is: {winner}</div>
  } else {
      status = <div className='status__nextPlayer'>Next player: {this.state.isXIsNextPlayer ? 'X' : 'O'} </div>
    }

    return (
      <div>

        <div className="status">
          <strong>
            {/* <CalculateWinner
              allSquares={this.state.allSquares}
              isXIsNextPlayer={this.state.isXIsNextPlayer}
            /> */}

            {status}
          </strong>
        </div>

        <Board
          onClick={this.handleClick}
          allSquares={this.state.allSquares}
        />

      </div>
    )
  }

}

export default Game;