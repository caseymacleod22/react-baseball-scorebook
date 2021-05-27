import {useState} from 'react'
import '../../App.css'

function FirstBase () {
    const [activeClass, setClass] = useState(false)
return (
    <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "red" : "white"}}id="first-base">
    </button>
    )
}

export default FirstBase