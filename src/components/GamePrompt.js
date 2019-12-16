import React from "react";

function GamePrompt(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.correctGuess ? "You guessed correctly" : "You guessed incorrectly"}</h1>
        </div>
    )
}

export default GamePrompt;