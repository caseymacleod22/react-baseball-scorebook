import './App.css';
import Header from './components/Header/Header'
import Outs from './components/Outs/Outs'
import Balls from './components/Balls/Balls'
import Strikes from './components/Strikes/Strikes'
import FirstInning from './components/FirstInning/FirstInning'
import SecondInning from './components/SecondInning/SecondInning'
import ThirdInning from './components/ThirdInning/ThirdInning'
import FourthInning from './components/FourthInning/FourthInning'
import FifthInning from './components/FifthInning/FifthInning'
import SixthInning from './components/SixthInning/SixthInning'
import SeventhInning from './components/SeventhInning/SeventhInning'
import EigthInning from './components/EigthInning/EightInning'
import NinthInning from './components/NinthInning/NinthInning'
import Runs from './components/Runs/Runs'
import Hits from './components/Hits/Hits'
import Errors from './components/Errors/Errors'
import AwayLineup from './components/AwayLineup/AwayLineup'
import HomeLineup from './components/HomeLineup/HomeLineup'
import Field from './components/Field/Field'
import Teams from './components/Teams/Teams'

function App() {
  return (
    <div className="App">
        <Header />
      <div className='container'>
          <Teams />
          <FirstInning />
          <SecondInning />
          <ThirdInning />
          <FourthInning />
          <FifthInning />
          <SixthInning />
          <SeventhInning />
          <EigthInning />
          <NinthInning />
          <Runs />
          <Hits />
          <Errors />
      </div>
        <div className='outscontainer'>
          <div className='outsandcount'>
            <Balls />
            <Strikes />
            <Outs />
          </div>
      </div>  
        <AwayLineup />
        <HomeLineup />
        <Field />
    </div>
  );
}

export default App;
