import React from "react";
import GamePrompt from "./GamePrompt"

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul>
                <li className="brand">Clicky Game</li>
                <li><GamePrompt correctGuess={props.correctGuess}/></li>
                <li>High Score: {props.highScore} | Score: {props.score}</li>
            </ul>
        </nav>
    );
}

export default Header;