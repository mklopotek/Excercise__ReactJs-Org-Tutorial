import React from 'react';
import Board from './Board'

class Game extends React.Component {
  state = {
    nextPlayer: 'X'
  }

  render() {
    return (
      <div>
      <div className="next__player"><strong>Next Player: {this.state.nextPlayer}</strong></div>
      <Board/>
      </div>
    )
  }
}

export default Game;
