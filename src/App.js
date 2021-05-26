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
import Field from './components/Field/Field'
import FirstBase from './components/FirstBase/FirstBase'
import SecondBase from './components/SecondBase/SecondBase'
import ThirdBase from './components/ThirdBase/ThirdBase'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
          <FirstInning />
          <SecondInning />
          <ThirdInning />
          <FourthInning />
          <FifthInning />
          <SixthInning />
          <SeventhInning />
          <EigthInning />
          <NinthInning />
      </div>
        <div className='outscontainer'>
          <div className='outsandcount'>
            <Balls />
            <Strikes />
            <Outs />
          </div>
      </div>  
        <Field />
        <FirstBase />
        <SecondBase />
        <ThirdBase />
    </div>
  );
}

export default App;
