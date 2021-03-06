import React from "react";

function GamePrompt(props) {
    let msg = "";
    if (props.correctGuess) msg = "You guessed correctly!";
    else if (props.correctGuess != null) msg = "You guessed incorrectly...";
    else msg = "Don't click on the same image twice.  Good luck!"

    return (
        <p className="p-2 p-md-3 m-0">{msg}</p>
    )
}

export default GamePrompt;