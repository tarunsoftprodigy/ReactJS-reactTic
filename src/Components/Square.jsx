import React from 'react'

const Square = ({value, onClick}) => {
    return (
        <>
            <button className= {`square-button ${value}`} onClick={onClick}>
                 {value}
            </button>
        </>
    )
}

export default Square
