import React from 'react';
import Board from './Board'

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

  handleClick = (index)=> {
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
        <div className="next__player"><strong>Next Player: {this.state.isXIsNextPlayer ? 'X' : 'O'}</strong></div>
        <Board
          onClick={this.handleClick}
          allSquares={this.state.allSquares}
        />
      </div>
    )
  }
}

export default Game;