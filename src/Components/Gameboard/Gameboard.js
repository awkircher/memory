import { Card } from "./Card";

export function Gameboard(props) {
    const cards = props.cards;
    const grid = cards.map((item, index) =>
        <Card key={item.src} src={item.src} id={item.id} handleCardClick={props.handleCardClick} />
    );
    return (
        <div className="Gameboard">
            {grid}
        </div>
    );
}