export function Message(props) {
    const win = props.win;
    if (win) {
        return (
            <div className="Message">
                {"You won!"}
            </div>
        )   
    } else {
        return (
            <div className="Message hidden"></div>
        )
    }
}