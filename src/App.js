import './App.css';
import Header from './components/Header/Header'
import Outs from './components/Outs/Outs'
import Balls from './components/Balls/Balls'
import Strikes from './components/Strikes/Strikes'
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
          <Scoreboard />
        </div>
        <Outs />
        <Balls />
        <Strikes />
    </div>
  );
}

export default App;
