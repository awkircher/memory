function Card(props) {
    return (
      <div className="Card">
        <img data-id={props.id} src={props.src} alt="" style={props.position} />
      </div>
    );
  }
  
  export default Card;