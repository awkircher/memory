import { useState } from 'react';

function Card(props) {
  return (
    <div className="Card">
      <img 
        data-id={props.id} 
        src={props.src} 
        alt="" 
        onClick={() => props.handleClick(props.id)} />
    </div>
  );
}
  
  export default Card;