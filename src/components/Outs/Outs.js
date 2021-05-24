import {useState} from 'react'

  function Outs () {
    const [outs, setOuts] = useState(0)

    const increment = () => {
        if(outs < 2) {
            setOuts(outs + 1)
        } else {
            setOuts(0)
        }
    }
    const decrement = () => {
        if(outs > 1) {
            setOuts(outs - 1)
        } else {
            setOuts(0)
        }
    }
    const reset = () => {
        setOuts(0)
    }

    return (
        <div className='Outs'>
            <h3>Outs: {outs}</h3>
            <button class='button1' onClick={increment}>+1</button>
            <button class='button2' onClick={reset}>Reset Outs</button>
            <button class='button3' onClick={decrement}>-1</button>
        </div>
    )
  }

export default Outs