import React from "react";

function Header(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand flex-grow-1">Clicky Game</li>
                <li className="score">High Score: {props.highScore}</li>
                <li className="score">Score: {props.score}</li>
            </ul>
        </nav>
    );
}

export default Header;