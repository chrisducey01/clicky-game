import React from "react";

function GameCard(props) {
    return (
        <div className="card">
            <div className="card-body p-2">
                <img {...props} alt="Placeholder"></img>
            </div>
        </div>
    );
}

export default GameCard;