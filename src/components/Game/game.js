import React from 'react';
import Nav from "../Nav/nav.js";
import Container from "../Container/container.js";
import data from "../../data.json";
import Square from "../Square/square.js"


class Game extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        data
    };
    //
    // componentWillMount(){
    //
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //
    //
    // }

    mixSqaures = (id, clicked) => {

        const squareOrder = this.state.image;

        if (clicked) {
           squareOrder.forEach((square, index) => {
                squareOrder[index].clicked = false;
            });
            return this.setState({
                square: squareOrder.sort(() => Math.random() - 0.5),
                topScore: this.state.score,
                score: 0
            })
        }
        else {
            console.log("false");
            squareOrder.forEach((square, index) => {
                if (id === square.id) {
                    squareOrder[index].clicked = true;
                }
            });
            return this.setState({image: squareOrder.sort(() => Math.random() - 0.5), score: this.state.score + 1})
        }
    };


    render() {

        return (
            <div>
                <Nav score={this.state.score} />
                <Container>
                    {this.state.data.map(square => (
                        <Square
                            image={sqaure.image}
                            id={sqaure.id}
                            key={sqaure.id}
                            clicked={sqaure.clicked} />
                    ))}
                </Container>
            </div>
        )
    }
}

export default Game;
