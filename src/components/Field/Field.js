import { useState } from 'react'
import '../../App.css'

function Field () {
    const [activeClass, setClass] = useState(false)
    return (
        <div id="stadium">
    <div id="field" className="mowed-grass"></div>
    <div id="in-field"></div>
    <div id="in-field-grass" className="mowed-grass"></div>
    <div id="batting-circle"></div>
    <div id="home-plate">
      <div className="action-area"></div>
    </div>
    <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "yellow" : "white"}} id="first-base">
    </button>
    <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "yellow" : "white"}} id="second-base">
    </button>
    <button onClick={() => activeClass === true ? setClass(false) : setClass(true)} style={{"background-color": activeClass ? "yellow" : "white"}} id="third-base">
    </button>
    <div className="home-plate-pulse pulse"></div>
    <div id="base-lines"></div>
    <div id="pitchers-mound"></div>
    <div id="pitchers-plate"></div>
    <div id="first-circle" className="half-circle"></div>
    <div id="second-circle" className="half-circle"></div>
    <div id="third-circle" className="half-circle"></div>
    <div id="batters-box-right" className="batters-box"></div>
    <div id="batters-box-left" className="batters-box"></div>
    <div id="first-base-thing"></div>
</div>
    )
}

export default Field