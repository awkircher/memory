export function Message(props) {
    if (props.isVisible) {
        return (
            <div className="Message">
                {props.message}
            </div>
        )   
    } else {
        return (
            <div className="Message hidden"></div>
        )
    }
}