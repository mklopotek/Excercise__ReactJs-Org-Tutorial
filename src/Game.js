import React from 'react';
import Board from './Board'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      history: [
        {
          allSquares: [null, null, null,
            null, null, null,
            null, null, null,]
        }
      ],
      nextPlayer: 'X'
    }
  }

  handleClick = (index) => {

    const newAllSquares = {
      allSquares: this.state.history[0].allSquares.map((e, i) => i === index? e = this.nextPlayer : e )
    }
    
      return this.setState({ history: {newAllSquares}})
  }


  render() {
    return (
      <div>
        <div className="next__player"><strong>Next Player: {this.state.nextPlayer}</strong></div>
        <Board
          onClick={this.handleClick}
          allSquares={this.state.history[0].allSquares}
        />
      </div>
    )
  }
}

export default Game;
