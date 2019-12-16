import React from "react";

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul>
                <li className="brand">Clicky Game</li>
                <li>High Score: {props.highScore}</li>
                <li>Score: {props.score}</li>
            </ul>
        </nav>
    );
}

export default Header;