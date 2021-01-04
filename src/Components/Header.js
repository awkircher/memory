import Score from './Score'
import logo from '../images/logo.svg'

function Header(props) {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="Memory logo"/>
      <p className="instructions">
        How's your eagle eye? Try to click every card without clicking the same one twice.
      </p>
      <Score 
      topScore={props.topScore}
      score={props.score} />
    </div>
  );
}

export default Header;
