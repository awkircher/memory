import Data from './Components/Data';
import Gameboard from './Components/Gameboard';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Message from './Components/Message'
import divider from './images/divider.svg'

function App() {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]); //keeps track of every card you've clicked this game
  const [pastScores, setPastScores] = useState([]); //derived from score at game end
  const [topScore, setTopScore] = useState(null); //dependent on pastScores
  const [win, setWin] = useState(false); //dependent on score

  const shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  //Get a shuffled array of Card objects, each with an id property and a src property
  const cards = shuffleArray(Data()); 

  //Compare the passed id with the Card id properties already contained in state. 
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
      setScore(0);
      setClicked([]);
    }
  }

  //determine if there was a win or not
  useEffect(() => {
    if (score === 15) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [score]);

  //get the top score from your past scores, or keep the top score null if there are no past scores
  useEffect(() => {
    const topScore = (pastScores.length > 0) ? Math.max(...pastScores) : null;
    setTopScore(topScore);
  }, [pastScores])

  //display 0 to the user instead of null
  const displayValueTopScore = topScore ? topScore : 0;

  return (
    <div className="App">
      <Message
        win={win} />
      <Header 
        topScore={displayValueTopScore}
        score={score} />
      <img className="divider" src={divider} alt="Divider line" />
      <Gameboard 
        cards={cards}
        handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
