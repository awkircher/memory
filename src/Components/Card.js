import { useState } from 'react';

function Card(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="Card">
      <img 
        data-id={props.id} 
        data-clicked={isClicked}
        src={props.src} 
        alt="" 
        onClick={() => setIsClicked(true)} />
    </div>
  );
}
  
  export default Card;