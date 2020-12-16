import Data from './Components/Data';
import Gameboard from './Components/Gameboard';
import Score from './Components/Score';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [pastScores, setPastScores] = useState([]);
  const [topScore, setTopScore] = useState(0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cards = shuffleArray(Data());
  
  const calculateTopScore = function() {
    const reducer = (accumulator, currentValue) => {
      if(accumulator < currentValue) {
        return currentValue;
      } else {
        return accumulator;
      }
    };
    return pastScores.reduce(reducer, score);
  }

  const handleClick = function(id) {
    const isCard = (card) => card.id === id;
    const stateIndex = clicked.findIndex(isCard);
    if (stateIndex === -1) {
      const dataIndex = cards.findIndex(isCard);
      setClicked([...clicked, cards[dataIndex]]);
      setScore(score + 1);
    } else {
      setPastScores([...pastScores, score]);
      setTopScore(calculateTopScore())
      setScore(0);
      setClicked([]);
    }
  }

  return (
    <div className="App">
      <Header 
        topScore={topScore}
        score={score} />
      <img className="divider" src="./images/divider.svg" alt="Divider line" />
      <Gameboard 
        cards={cards}
        handleClick={handleClick} />
    </div>
  );
}

export default App;
