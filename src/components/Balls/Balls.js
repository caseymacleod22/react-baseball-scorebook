import {useState} from 'react'

function Balls () {
    const [balls, setBalls] = useState(0)

    const increment = () => {
        if(balls < 3) {
            setBalls(balls + 1)
        } else {
            setBalls(0)
        }
    }
    const decrement = () => {
        if(balls > 1) {
            setBalls(balls - 1)
        } else {
            setBalls(0)
        }
    }

    return (
        <div id='balls'>
            <h3>Balls: {balls}</h3>
            <button className='button4' onClick={increment}>+1</button>
            <button className='button5' onClick={decrement}>-1</button>
        </div>
    )
}

export default Balls