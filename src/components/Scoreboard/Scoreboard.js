import {useState} from 'react'
import '../../App.css';

// function Scoreboard () {
//     const [score, setScore] = useState

//     const increment = () => {
//         setScore(score + 1)
//     }
//     const decrement = () => {
//         if(score > 1) {
//             setScore(score - 1)
//         } else {
//             setScore(0)
//         }
//     }
function Scoreboard () {
    return (
        <div class='scoreboard'>
            <input type="number" />
            <input type="number" />
        </div>
    )
}

export default Scoreboard