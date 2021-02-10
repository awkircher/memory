export function Card(props) {
  return (
    <div className="Card">
      <img 
        data-id={props.id} 
        src={props.src} 
        alt="" 
        onClick={() => props.handleCardClick(props.id)} />
    </div>
  );
}