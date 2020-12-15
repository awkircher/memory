import Data from './Components/Data';
import Gameboard from './Components/Gameboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Gameboard 
        cards={Data()} />
    </div>
  );
}

export default App;
