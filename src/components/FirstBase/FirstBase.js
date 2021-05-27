import {useState} from 'react'
import '../../App.css'

function FirstBase () {
    const [activeClass, setClass] = useState(false)
return (
    <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "yellow" : "black", "height": activeClass ? "18px" : "13px", "width": activeClass ? "18px" : "13px"}}id="first-base">
    </button>
    )
}

export default FirstBase