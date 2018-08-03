import React from 'react';
import Board from './Board'
import CalculateWinner from './CalculateWinner'

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
    allSquares[index] = this.state.isXIsNextPlayer ? 'X' : 'O'

    this.setState({
      allSquares: allSquares,
      isXIsNextPlayer: !this.state.isXIsNextPlayer,
    })

  }

  render() {

    return (
      <div>

        <div className="status">
          <strong>
            <CalculateWinner
              allSquares={this.state.allSquares}
              isXIsNextPlayer={this.state.isXIsNextPlayer}
            />
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