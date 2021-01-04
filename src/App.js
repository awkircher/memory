import Data from './Components/Data';
import Gameboard from './Components/Gameboard';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Message from './Components/Message'
import divider from './images/divider.svg'

function App() {
  const [clicked, setClicked] = useState([]); //keeps track of every card you've clicked this game
  const [score, setScore] = useState(0);
  const [pastScores, setPastScores] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [win, setWin] = useState(false);

  const shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cards = shuffleArray(Data()); //Data() returns an array of objects, each with an id property and a src property
  
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

  //Compares the passed id with the Card id properties already contained in state. 
  //If there's a match (i.e., you've already clicked this card), then the game ends. 
  //Otherwise, the passed id is compared with all the Card id properties in Data, 
  //and the matching Card object is added to state.
  const handleCardClick = function(id) {
    const isCard = (card) => card.id === id;
    const indexInState = clicked.findIndex(isCard);
    if (indexInState === -1) { //keep playing!
      const indexInCardsData = cards.findIndex(isCard);
      setClicked([...clicked, cards[indexInCardsData]]);
      setScore(score + 1);
    } else { //game over :(
      setPastScores([...pastScores, score]);
      setTopScore(calculateTopScore());
      setScore(0);
      setClicked([]);
    }
  }

  useEffect(() => {
    if (score === 15) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [score]);

  return (
    <div className="App">
      <Message
        win={win} />
      <Header 
        topScore={topScore}
        score={score} />
      <img className="divider" src={divider} alt="Divider line" />
      <Gameboard 
        cards={cards}
        handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
