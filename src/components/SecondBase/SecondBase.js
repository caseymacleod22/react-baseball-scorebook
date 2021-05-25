import {useState} from 'react'
import '../../App.css'

function SecondBase () {
    const [activeClass, setClass] = useState(false)
    return(
        <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "yellow" : "white"}} id="second-base">
        </button>
    )
}

export default SecondBase