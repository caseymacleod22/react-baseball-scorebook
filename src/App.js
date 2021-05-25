import './App.css';
import Header from './components/Header/Header'
import Outs from './components/Outs/Outs'
import Balls from './components/Balls/Balls'
import Strikes from './components/Strikes/Strikes'
import Scoreboard from './components/Scoreboard/Scoreboard'
import Field from './components/Field/Field'
import FirstBase from './components/FirstBase/FirstBase'
import SecondBase from './components/SecondBase/SecondBase'
import ThirdBase from './components/ThirdBase/ThirdBase'

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
        <Field />
        <FirstBase />
        <SecondBase />
        <ThirdBase />
    </div>
  );
}

export default App;
