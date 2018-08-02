import React from 'react';
import Board from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    state = {
      history: [
        {
          allSquares: ['null', 'null', 'null',
            'null', 'null', 'null',
            'null', 'null', 'null']
        }
      ],

      nextPlayer: 'X'
    }
  }

//   handleClick = (i) => {
//  const newSquares = [] 

//   this.setState({
//     history: this.state.history.slice().concat([
//     {
//       allSquares: newSquares
//     }
//   ]),
//   nextPlayer: this.state.nextPlayer === 'X'? '0' : 'X'

// })
// }

  render() {
    return (
      <div>
        <div className="next__player"><strong>Next Player: {this.state.nextPlayer}</strong></div>
        <Board
          // oneSquares={this.state.history.allSquares}
          // handleClick={this.handleClick(i)}
        />
      </div>
    )
  }
}

export default Game;
