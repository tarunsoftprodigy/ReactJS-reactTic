import React from 'react'
import Square from './Square'

const GameBoard = ({square, onClick}) => {
    return (
        <div className="game-board">
            <h1>O -- Tic Tac Toe -- X</h1>
                  <div className="board-main">
                       {square.map((el, i) => <Square key={i} value={el} onClick= {() => onClick(i)}/>)}
                  </div>   
        </div>
    )
}

export default GameBoard
