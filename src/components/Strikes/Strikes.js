import {useState} from 'react'

function Strikes () {
    const [strikes, setStrikes] = useState(0)

    const increment = () => {
        if(strikes < 2) {
            setStrikes(strikes + 1)
        } else {
            setStrikes(0)
        }
    }
    const decrement = () => {
        if(strikes > 1) {
            setStrikes(strikes - 1)
        } else {
            setStrikes(0)
        }
    }

    return (
        <div id='strikes'>
            <h3>Strikes: {strikes}</h3>
            <button class='button6' onClick={increment}>+1</button>
            <button class='button7' onClick={decrement}>-1</button>
        </div>
    )
}

export default Strikes