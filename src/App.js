import Data from './Components/Data';
import Gameboard from './Components/Gameboard';
import { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cards = shuffleArray(Data());

  const handleClick = function(id) {
    const isCard = (card) => card.id === id;
    const stateIndex = clicked.findIndex(isCard);
    if (stateIndex === -1) {
      console.log(id + " is not yet clicked")
      const dataIndex = cards.findIndex(isCard);
      setClicked([...clicked, cards[dataIndex]]);
    } else {
      console.log(id + " is already clicked")
    }
  }

  return (
    <div className="App">
      <img className="logo" src="./images/logo.svg" alt="Memory logo"/>
      <p className="instructions">
        How's your eagle eye? Try to click every card without clicking the same one twice.
      </p>
      <img className="divider" src="./images/divider.svg" alt="Divider line" />
      <Gameboard 
        cards={cards}
        handleClick={handleClick} />
    </div>
  );
}

export default App;
