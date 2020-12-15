import Data from './Components/Data';
import Gameboard from './Components/Gameboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src="./images/logo.svg" alt="Memory logo"/>
      <p className="instructions">
        How's your eagle eye? Try to click every card without clicking the same one twice.
      </p>
      <img className="divider" src="./images/divider.svg" alt="Divider line" />
      <Gameboard 
        cards={Data()} />
    </div>
  );
}

export default App;
