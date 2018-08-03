import React from 'react'

const CalculateWinner = ({ allSquares, isXIsNextPlayer }) => {

    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winnerLines.length; i++) {
        const a = winnerLines[i][0]
        const b = winnerLines[i][1]
        const c = winnerLines[i][2]

        if (allSquares[a] && allSquares[a] === allSquares[b] && allSquares[a] === allSquares[c]) {
            return
            (<div className='status__winning'>
                The winner is {allSquares[a]}
            </div>)
        }
    }

    return
    (<div className='status__nextPlayer'>
        Next Player: {isXIsNextPlayer ? 'X' : 'O'}
    </div>)

}

export default CalculateWinner