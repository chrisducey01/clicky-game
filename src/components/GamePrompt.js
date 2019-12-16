import React from "react";

function GamePrompt(props) {
    let msg = "";
    if(props.correctGuess) msg = "You guessed correctly!";
    else if(props.correctGuess != null) msg = "You guessed incorrectly...";

    return (
        <div className="jumbotron">
            <h1 className="display-4">{msg}</h1>
        </div>
    )
}

export default GamePrompt;