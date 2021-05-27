import {useState} from 'react'
import '../../App.css'

function ThirdBase () {
    const [activeClass, setClass] = useState(false)
    return(
        <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "red" : "white"}} id="third-base">
        </button>
    )
}

export default ThirdBase