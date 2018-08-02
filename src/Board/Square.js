import React from 'react'
import './square.css'

const Square = ({value, handleClick}) => (

   <button className='square' onClick={handleClick}>{value}</button>
    
)

export default Square 