import React from "react";

function GamePrompt(props) {
    let msg = "";
    if (props.correctGuess) msg = "You guessed correctly!";
    else if (props.correctGuess != null) msg = "You guessed incorrectly...";

    return (
        <div>{msg}</div>
    )
}

export default GamePrompt;