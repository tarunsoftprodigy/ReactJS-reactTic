import React, {useState} from 'react'
import GameBoard from './Components/GameBoard'


function App() {

   const [board, setBoard] = useState(Array(9).fill(null))
   const [move, setMove] = useState(true)

const getWinner = (squares) => {
         const lines = [
               [0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [2, 4, 6]
            ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

   const isWinner = getWinner(board)

  const handleClick = i => {
     if(isWinner || board[i]) return;
     board[i] = move ? 'X' : 'O'
     setBoard(board)
     setMove(!move)
   }

   const getMoves = () => {
     setBoard(Array(9).fill(null))
     setMove(true)
     document.querySelector('.players').style.display = 'block'
   }

   let draw = false
   if(!board.some(element => element === null) && isWinner === null) {
      draw = true;
      document.querySelector('.players').style.display = 'none'
   }

  return (
     <>
        <div className="game-wrap">
               <GameBoard square={board} onClick={handleClick}/>
               <div className="players">
                  { (!isWinner) && (move ? <p className="left">Player X</p> : <p className="right">Player O</p>)}
               </div>
              <div className="start-game-wrap"> 
               { isWinner || draw ? 
                  <>
                  <div className="winner">
                     <p>{ isWinner ?  isWinner + ' Won' : 'Game Draw'}</p>
                  </div>
                  <button className="start-game" onClick={getMoves}>
                      Play Again
                  </button>
                  </>
                  :  ''
                  }
               </div>
        </div>
     </>
  )
}

export default App
