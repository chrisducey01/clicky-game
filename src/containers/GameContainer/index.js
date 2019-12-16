import React, { Component } from "react";
import GameCard from "../../components/GameCard";
import Header from "../../components/Header";
import GamePrompt from "../../components/GamePrompt";
import API from "../../utils/API";
import "./style.css";

class GameContainer extends Component {
    state = {
        gameCards: [],
        highScore: 0,
        score: 0,
        numOfCards: 12,
        chosenCards: [],
        correctGuess: null
    }

    componentDidMount() {
        this.getPhotos();
    }

    getPhotos() {
        API.search("pokemon", this.state.numOfCards)
            .then(res => {
                console.log(res.data.data);
                const tempArr = [];
                res.data.data.forEach(sticker => {
                    tempArr.push({ imgSrc: sticker.images.fixed_width_still.url, id: sticker.id });
                });
                this.setState({ gameCards: tempArr });
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleClick = id => {
        if (this.state.chosenCards.includes(id)) {
            console.log(`You lose!  You already chose that card dummy! Id: ${id}`);
            this.setState(
                {
                    highScore: this.state.score > this.state.highScore ? this.state.score : this.state.highScore,
                    score: 0,
                    chosenCards: [],
                    correctGuess: false
                }
            );
        }
        else {
            console.log(`Great job!  You haven't picked that card yet.  Id: ${id}`);
            this.setState(
                {
                    chosenCards: this.state.chosenCards.concat(id),
                    score: this.state.score + 1,
                    correctGuess: true
                }
            );
        }
        this.shuffleCards();
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
            <div>
                <Header score={this.state.score} highScore={this.state.highScore} />
                <div className="container">
                    <div className="row justify-content-center">
                        <GamePrompt correctGuess={this.state.correctGuess} />
                    </div>
                    <div className={(this.state.correctGuess === true || this.state.correctGuess === null) ? "row justify-content-center"  : "row justify-content-center shake"}>
                        {this.state.gameCards.map(card => {
                            return (
                                <div className="col-md-3 my-2">
                                    <GameCard key={card.id} id={card.id} src={card.imgSrc} onClick={() => this.handleClick(card.id)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default GameContainer;