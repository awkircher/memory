import { Data } from './Models/Data';
import { Gameboard } from './Components/Gameboard';
import { useEffect, useReducer } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Message } from './Components/Message';
import divider from './images/divider.svg';
import { init, initialState, reducer } from './reducer';

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  
  const shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  //Get a shuffled array of Card objects, each with an id property and a src property
  const cards = shuffleArray(Data); 

  const handleCardClick = function(id) {
    //Compare the passed id with the Card id properties already contained in state. 
    const isCard = (card) => card.id === id;
    const indexInState = state.clicked.findIndex(isCard);
    if (indexInState === -1) {
      //If no match, the passed id is compared with all the Card id properties in Data, 
      //and the matching Card object is added to state.
      const indexInCardsData = cards.findIndex(isCard);
      const cardToAdd = cards[indexInCardsData]
      dispatch({type: 'clicked new card', payload: cardToAdd})
    } else {
      //If there's a match (i.e., you've already clicked this card), then the game ends.
      dispatch({type: 'clicked same card twice'});
    }
  }

  useEffect(() => {
    dispatch({type: 'check won'})
  }, [state.score])

  //Get the top score from your past scores, or keep the top score 0 if there are no past scores
  const topScore = (state.pastScores.length > 0) ? Math.max(...state.pastScores) : 0;
  
  //Set the visibility of a 'game won' message and its content.
  const messageVisibility = state.win;
  const message = (state.win) ? 'You won!' : null;

  return (
    <div className="App">
      <Message
        message={message}
        isVisible={messageVisibility} />
      <Header 
        topScore={topScore}
        score={state.score} />
      <img className="divider" src={divider} alt="Divider line" />
      <Gameboard 
        cards={cards}
        handleCardClick={handleCardClick} />
    </div>
  );
}
