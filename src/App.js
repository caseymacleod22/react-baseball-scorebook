import './App.css';
import Header from './components/Header/Header'
import Outs from './components/Outs/Outs'
import Balls from './components/Balls/Balls'
import Strikes from './components/Strikes/Strikes'

function App() {
  return (
    <div className="App">
      <Header />
      <Outs />
      <Balls />
      <Strikes />
    </div>
  );
}

export default App;
