import React, { Component } from "react";
import GameCard from "../components/GameCard";
import Header from "../components/Header";

class GameContainer extends Component {
    state = {
        gameCards: [],
        highScore: 0,
        score: 0,
        numOfCards: 10,
        chosenCards: []
    }

    componentDidMount() {
        this.getPhotos();
    }

    getPhotos() {
        const tempArr = [];
        for (let i = 0; i < this.state.numOfCards; i++) {
            tempArr.push({ imgSrc: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png", id: `Card-${i}` });
        }
        this.setState({ gameCards: tempArr });
    }

    handleClick = id => {
        if (this.state.chosenCards.includes(id)) {
            console.log(`You lose!  You already chose that card dummy! Id: ${id}`);
            this.shuffleCards();
            this.setState(
                {
                    highScore: this.state.score > this.state.highScore ? this.state.score : this.state.highScore,
                    score:0,
                    chosenCards: []
                }
            );
        }
        else {
            console.log(`Great job!  You haven't picked that card yet.  Id: ${id}`);
            this.setState(
                {
                    chosenCards: this.state.chosenCards.concat(id),
                    score: this.state.score + 1
                }
            );
        }
    }

    shuffleCards() {
        const tempOldLayout = this.state.gameCards;
        let tempNewLayout = [];

        for (let i = 0; i < this.state.numOfCards; i++) {
            let index = Math.floor(Math.random() * tempOldLayout.length);
            tempNewLayout = tempNewLayout.concat(tempOldLayout.splice(index, 1));
        }
        this.setState({ gameCards: tempNewLayout });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Header score={this.state.score} highScore={this.state.highScore} />
                </div>
                <div className="row justify-content-center">
                    {this.state.gameCards.map(card => {
                        return <GameCard key={card.id} id={card.id} src={card.imgSrc} onClick={() => this.handleClick(card.id)} />
                    })}
                </div>
            </div>
        )
    }
}

export default GameContainer;