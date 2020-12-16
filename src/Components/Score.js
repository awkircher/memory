function Score(props) {
    return (
        <div className="Score">
            {props.score}
            <div>
                <p className="label">
                    <span id="leftarrow"></span>Score
                </p>
                <p className="label">
                    High<span id="rightarrow"></span>
                </p>
            </div>
            {props.topScore}
        </div>
    )
}

export default Score;