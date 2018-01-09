import React from 'react';
import Nav from "../Nav/nav.js";
import Container from "../Container/container.js";
import data from "../../data.json";
import Square from "../Square/Square.js"


class Game extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        data: data
    };


    handleClick = (id) => {
        return (e) => {
            let square = this.state.data.find(squareData => (squareData.id === id))
            square.clicked = !square.clicked;

        }
    }


    //Math function


    render() {

        return (
            <div>
                <Nav score={this.state.score}/>
                <Container>
                    {this.state.data.map(square => (
                        <Square
                            image={square.image}
                            id={square.id}
                            key={square.id}
                            clicked={square.clicked}
                            handleClick={this.handleClick}/>
                    ))}
                </Container>
            </div>
        )
    }
}

export default Game;
